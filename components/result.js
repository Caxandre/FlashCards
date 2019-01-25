import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { WineBerry, OldGold, DarkSeaGreen, VinRouge } from '../utils/colors'
import { SimpleLineIcons, Entypo } from '@expo/vector-icons'
import TextButton from './TextButton'

export default function Result({ deck, tally, media, onBackToDecks, onRetakeQuiz }) {
    return (
        <View>
            <View style={styles.cardItem}>
                {tally >= media
                    ? <View style={styles.result}>
                        <SimpleLineIcons name='trophy' size={80} color={OldGold} />
                        <Text style={styles.resultText}>Congratulations!</Text>
                    </View>
                    : <View style={styles.result}>
                        <Entypo name='emoji-sad' size={80} color={WineBerry} />
                        <Text style={styles.resultText}>Sorry... Try again!</Text>
                    </View>
                }
                <Text style={styles.resultText}>Did you get {tally} from {deck.questions.length} questions.</Text>
            </View>
            <View style={styles.optionArea}>
                <TextButton
                    onPress={onBackToDecks}
                    color={VinRouge}
                    text='All Decks'
                    icon='arrow-left'
                />
                <TextButton
                    onPress={onRetakeQuiz}
                    color={DarkSeaGreen}
                    text='Retake Quiz'
                    icon='refresh'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardItem: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 100,
        margin: 20,
    },
    resultText: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 20,
        color: WineBerry
    },
    optionArea: {
        flex: 1,
        marginTop: 90,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    result: {
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultText: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 20,
        fontWeight: '500',
        color: WineBerry,
    },
})