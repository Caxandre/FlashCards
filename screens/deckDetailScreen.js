import React, { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import DeckDetail from '../components/deckDetail'
import { PaleRose } from '../utils/colors'
import { requestDeleteDeck } from '../actions/deck'

class DeckDetailScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title
        }
    }

    onStartQuiz = () => {
        const { deck, navigation, deckKey } = this.props
        navigation.navigate('QuizScreen', { deckKey })
    }

    onAddCard = () => {
        const { navigation, deckKey } = this.props
        navigation.navigate('NewCardScreen', { deckKey })
    }

    onDeleteDeck = () => {
        Alert.alert('Confirmation', `Delete "${this.props.deck.title}"?`, [
            {
                text: 'Delete', onPress: () => {
                    const { dispatch, navigation, deckKey } = this.props
                    dispatch(requestDeleteDeck(deckKey))
                    navigation.navigate('Home')
                }
            },
            { text: 'Cancel' }
        ])
    }

    render() {

        const { deck } = this.props

        return (
            <View style={styles.container}>
                <DeckDetail
                    deck={deck}
                    onStartQuiz={this.onStartQuiz}
                    onAddCard={this.onAddCard}
                    onDeleteDeck={this.onDeleteDeck}
                    navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PaleRose,
    },
    cardItem: {
        padding: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function mapStateToProps({ decks }, { navigation }) {
    return {
        deckKey: navigation.state.params.deckKey,
        deck: decks[navigation.state.params.deckKey],
    }
}

export default connect(mapStateToProps)(DeckDetailScreen)

