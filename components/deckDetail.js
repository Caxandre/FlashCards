import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import TextButton from '../components/TextButton'
import { DarkSeaGreen, Lochmara, VinRouge, WineBerry } from '../utils/colors'

export default function DeckDetail({ deck,
    onStartQuiz,
    onAddCard,
    onDeleteDeck,
    navigation
}) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                {deck.title.toUpperCase()}
                </Text>
                <Text style={styles.cardText}>
                    {deck.questions.length} card(s)
                    </Text>
            </View>
            <View style={styles.content}>
                <TextButton
                    onPress={onAddCard}
                    color={Lochmara}
                    text='New Card'
                    icon='cards'
                />
                {deck.questions.length >= 1 && (
                    <TextButton
                        onPress={onStartQuiz}
                        color={DarkSeaGreen}
                        text='Start Quiz'
                        icon='play-circle-outline'
                    />
                )}
                <TextButton
                    onPress={onDeleteDeck}
                    color={VinRouge}
                    text='Delete Deck'
                    icon='trash-can-outline'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    card: {
        flex: 1,
        padding: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 30,
        fontWeight: '500',
        color: WineBerry,
    },
    cardText: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 20,
        color: WineBerry,
    },
})

