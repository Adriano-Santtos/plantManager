import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet
} from 'react-native';

import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😀
                </Text>

            </View>
        </SafeAreaView>
    )
}