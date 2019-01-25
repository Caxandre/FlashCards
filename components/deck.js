import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native'
import { connect } from 'react-redux'
import { white, DarkSeaGreen } from '../utils/colors'

class Deck extends Component {

    onDeckPress = () => {
        const { deckKey, deck, navigation } = this.props

        navigation.navigate('DeckDetailScreen', {
            deckKey,
            title: deck.title.toUpperCase()
        })
    }

    render() {

        const { deck } = this.props

        return (
            <TouchableOpacity onPress={this.onDeckPress}>
                <View style={styles.deck}>
                    <Text style={styles.deckTitle}>
                        {deck.title.toUpperCase()}
                    </Text>
                    <Text style={styles.deckText}>
                        {deck.questions.length} card(s)
                        </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        flex:1,
        backgroundColor: DarkSeaGreen,
        borderRadius: Platform.OS === 'ios' ? 16 : 6,
        padding: 30,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 25,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    deckTitle: {
        fontSize: 20,
        color: white,
        fontWeight: 'bold',
    },
    deckText: {
        fontSize: 16,
        color: white,
        fontWeight: 'bold',
    }
})

function mapStateToProps({ decks }, { deckKey }) {
    return {
        deck: decks[deckKey]
    }
}

export default connect(mapStateToProps)(Deck)