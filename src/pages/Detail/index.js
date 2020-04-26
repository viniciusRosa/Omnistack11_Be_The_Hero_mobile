import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import { View, TouchableOpacity, Image, Text, ScrollView, Linking } from 'react-native'

import LogoImg from '../../assets/logo.png'
import styles from './styles'

export default function Detail() {
    const message = 'mensagem a ser enviada'
    const navigation = useNavigation();

    function navigationBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Nome do caso',
            recipients: ['vinicius.rosa00@gmail.com'],
            body: message
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=555133001477&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image source={LogoImg} />
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name='arrow-left' size={28} color='#E02041' />
                </TouchableOpacity>
            </View>


            <ScrollView>

                <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>Caso 1</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>R$120,00</Text>
                </View>

                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o Dia</Text>
                    <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>
                    <Text style={styles.heroDescription}>Entre em Contato:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp} >
                            <Text style={styles.actionText}>WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={sendMail} >
                            <Text style={styles.actionText}>Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
