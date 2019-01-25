import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { white } from '../utils/colors'
import Icon from './icon'

export default function TextButton({ text, color, icon, onPress, style = {} }) {
    return (
        <TouchableOpacity
            style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, { backgroundColor: color, }]}
            onPress={onPress}>
            {icon && <Icon name={icon} size={18} color='#ffffff' />}
            {text && <Text style={styles.submitBtnText}>{text}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iosSubmitBtn: {
        marginTop: 20,
        padding: 10,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    androidSubmitBtn: {
        marginTop: 20,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitBtnText: {
        color: white,
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 10,
    },
})