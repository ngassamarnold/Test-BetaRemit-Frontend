/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Colors from '../../constants/colors'

export default function WavyHeader(props) {
    let { top, height } = props
    return (
        <View style={styles.svgCurve}>
            <StatusBar backgroundColor={Colors.stausBarColor} barStyle='default' />
            <View style={{ backgroundColor: Colors.blue, height: height || 200 }} />
            <Svg
                height="100%"
                width="100%"
                viewBox="0 0 1440 320"
                style={{ position: 'absolute', top: top || 130 }}
            >
                <Path
                    fill={Colors.blue}
                    d="M0,224L34.3,202.7C68.6,181,137,139,206,154.7C274.3,171,343,245,411,234.7C480,224,549,128,617,122.7C685.7,117,754,203,823,218.7C891.4,235,960,181,1029,149.3C1097.1,117,1166,107,1234,112C1302.9,117,1371,139,1406,149.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                />
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
});
