/* eslint-disable prettier/prettier */
import { utils } from '../constants/utils'
import Images from '../constants/Images'
import { HOST } from '../config'
import colors from '../constants/colors'
import { getIconStatus, transactionSign, DateMonth, numberWithCommas } from '../helpers'

export const mapTransactionHistories = history => ({
    id: history.transaction_ref,
    operation: history.operation,
    // target: history.target,
    target: history.target === null ? '' : '(' + history.target + ')',
    targetDetail: history.target === null ? '' : history.target,
    phone: history.transaction_phone_number,
    description: history.reason,
    // image: history.operator === utils.SLUG_MTN ? Images.LOGO_MTN : Images.LOGO_ORANGE,
    price: numberWithCommas(history.amount),
    currency: history.currency,
    date: history.created_at,
    dayMonth: DateMonth(history.created_at),
    out: history.operation !== utils.RECHARGE,
    sign: transactionSign(history.is_payin),
    is_payin: history.is_payin,
    statusLabel: history.status.label,
    status: history.status.status,
    name: 'RAS',
    IconColor: getIconStatus(history.status.status),
    fee: history.fees,
    provider: history.is_from_user ? 'Bénéficiaire' : 'Source',
    logo: HOST + history.operator.image_path,
    // color: history.status.status !== (utils.STAND_BY && utils.SUCCESS) ? colors.gray : history.is_payin ? colors.green : colors.red,
    color: history.is_payin === true ? colors.green : history.is_payin === false ? colors.red : colors.gray
});

