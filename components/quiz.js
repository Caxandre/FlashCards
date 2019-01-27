import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import TextButton from '../components/TextButton'
import { DarkSeaGreen, Lochmara, VinRouge, WineBerry } from '../utils/colors'
import FlashCard from './FlashCard'



export default function Quiz({ deck, qI,
    question,
    answer,
    onGrade,
    navigation
}) {

    return (
        <View style={styles.container}>
            <View style={styles.headerQuiz}>
                <Text style={styles.headerText}>
                    {deck.title.toUpperCase()}
                </Text>
                <Text style={styles.counterText}>
                    Question {qI + 1} of {deck.questions.length}
                </Text>
                <Text style={styles.tipText}>
                    Tap the card to check the answer
                         </Text>
            </View>
            <FlashCard
                question={question}
                answer={answer}
            />

            <View style={styles.quizChoices}>
                <TextButton
                    onPress={() => onGrade(true)}
                    color={DarkSeaGreen}
                    text='Correct'
                    icon='check-circle-outline'
                />
                <TextButton
                    onPress={() => onGrade(false)}
                    color={VinRouge}
                    text='Incorrect'
                    icon='close-circle-outline'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerQuiz: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: '600',
        color: WineBerry,
    },
    counterText: {
        fontSize: 18,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: '500',
        color: WineBerry,
    },
    tipText: {
        fontSize: 14,
        paddingTop: 5,
        paddingBottom: 5,
    },
    quizChoices: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    noCard: {
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noCardText: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 20,
        fontWeight: '500',
        color: WineBerry,
    }
})

