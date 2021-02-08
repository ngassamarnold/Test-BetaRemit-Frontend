/* eslint-disable prettier/prettier */
import React from 'react';

import { Text } from 'react-native'
import colors from '../../constants/colors'

export const InlineText = (props) => {
    let { text, bg, size, top, fontWeight, left, numberOfLines } = props
    return (<Text numberOfLines={numberOfLines || 2} style={{
        fontSize: size || 12,
        marginTop: top || 3,
        marginLeft: left || 10,
        color: bg || colors.gray,

        fontWeight: fontWeight || 'normal'
    }}> { text}</Text >
    )
}
