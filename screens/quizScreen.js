import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { PaleRose, WineBerry } from '../utils/colors'
import Quiz from '../components/quiz'

class QuizScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Quiz Started!'
        }
    }

    state = {
        qI: 0,
        tally: 0
    }

    onGrade = (correct) => {
        const { qI } = this.state
        const { deck, navigation } = this.props

        const tally = correct ? this.state.tally + 1 : this.state.tally
        this.setState({ tally })

        if (qI + 1 < deck.questions.length) {
            this.setState(({ qI }) => ({
                qI: qI + 1,
            }))
        } else {
            navigation.navigate('QuizResultScreen', {
                tally,
                deckKey: navigation.state.params.deckKey
            })
        }
    }

    render() {
        const { qI, tally } = this.state
        const { deck } = this.props

        if (deck.questions.length === 0) {
            return (
                <View style={styles.container}>
                    <View style={styles.noCard}>
                        <Text style={styles.noCardText}>You need to create some questions before start quiz!</Text>
                    </View>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Quiz
                    deck={deck}
                    qI={qI}
                    question={deck.questions[qI].question}
                    answer={deck.questions[qI].answer}
                    onGrade={this.onGrade} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PaleRose,
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


function mapStateToProps({ decks }, { navigation }) {
    return {
        deck: decks[navigation.state.params.deckKey]
    }
}

export default connect(mapStateToProps)(QuizScreen)
