import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView,AsyncStorage } from 'react-native'
import Deck from '../components/deck'
import { PaleRose } from '../utils/colors'
import { requestDecks } from '../actions/deck'


class DeckScreen extends Component {

    componentDidMount() {
        this.props.dispatch(requestDecks())
    }

    render() {

        const { decks, navigation } = this.props

        return (
            <ScrollView style={styles.container}>
                {Object.keys(decks).length === 0 ?
                    <View style={styles.noDeck}>
                        <Text style={styles.noDeckText}>Create a deck to start!
                       After that you will be able to create question and answer cards to run a quiz.
                       </Text>


                    </View>
                    : Object.keys(decks).reverse().map(deck => (
                        <Deck key={deck} deckKey={deck} navigation={navigation} />
                    ))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PaleRose,
    },
    noDeck: {
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDeckText: {
        fontSize: 20,
        fontWeight: '500',
        paddingTop: 20,
        paddingBottom: 20,
    }
})

function mapStateToProps({ decks }, { navigation }) {
    return {
        decks,
        navigation
    }
}

export default connect(mapStateToProps)(DeckScreen)

