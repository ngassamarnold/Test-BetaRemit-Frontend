/* eslint-disable prettier/prettier */

import AsyncStorage from "@react-native-async-storage/async-storage"

export default {
  get(key, defaultValue = null) {
    return new Promise((resolve, reject) => {
      AsyncStorage
        .getItem(key)
        .then(data => resolve(data ? JSON.parse(data).ObjectCastContainer : defaultValue))
        .catch(error => reject(error))
    })
  },
  getMultiple(keys, defaultValues = []) {
    return new Promise((resolve, reject) => {
      AsyncStorage
        .multiGet(keys)
        .then(keyValuePairs => {
          const data = {}
          keyValuePairs.forEach((keyValuePair, i) => {
            let value = keyValuePair[1]
            data[keyValuePair[0]] = value === null ? null : JSON.parse(value).ObjectCastContainer
              ? JSON.parse(value).ObjectCastContainer
              : JSON.parse(value)
          })
          resolve(data)
        })
        .catch(error => reject(error))
    })
  },
  set(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify({
      ObjectCastContainer: value
    }))
  },
  remove(key) {
    return AsyncStorage.removeItem(key)
  },
  clear() {
    return AsyncStorage.clear()
  }
}
