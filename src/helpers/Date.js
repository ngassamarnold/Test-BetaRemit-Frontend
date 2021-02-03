/* eslint-disable prettier/prettier */

import { to2Digits } from "./"

export default {
  make(day, month, year) {
    day = to2Digits(day)
    month = to2Digits(month + 1)
    year = to2Digits(year)

    return {
      iso: year + '-' + month + '-' + day,
      fr: day + '/' + month + '/' + year,
    }
  },
  fromIso(isoDate) {
    if (!isoDate)
      return {}

    const date = typeof isoDate === "string" ? new Date(isoDate) : isoDate
    return this.make(date.getDate(), date.getMonth(), date.getFullYear())
  },
  today() {
    return this.fromIso(new Date())
  },
  isoToFr(isoDate) {
    if (!isoDate)
      return isoDate

    const parts = isoDate.split('-')
    return parts[2] + '/' + parts[1] + '/' + parts[0]
  },
  frToIso(frDate) {
    if (!frDate)
      return frDate

    const parts = frDate.split('/')
    return parts[2] + '-' + parts[1] + '-' + parts[0]
  }
}
