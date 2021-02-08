/* eslint-disable prettier/prettier */

import React from 'react';
import { ActivityIndicator } from 'react-native';

export default function Loader({ propreties }) {
    let { size, color } = propreties
    return (
        <ActivityIndicator size={size || 'small'} color={color || 'red'} />
    );
}
