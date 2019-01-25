import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'
import Result from '../components/result'
import { PaleRose } from '../utils/colors'

class QuizResultScreen extends Component {

  onRetakeQuiz = () => {
    const resetAction = StackActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({
          routeName: 'DeckDetailScreen',
          params: {
            title: this.props.deck.title,
            deckKey: this.props.navigation.state.params.deckKey
          }
        }),
        NavigationActions.navigate({
          routeName: 'QuizScreen',
          params: {
            deckKey: this.props.navigation.state.params.deckKey
          }
        })
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  onBackToDecks = () => {
    this.props.navigation.navigate('Home')
  }

  render() {
    const { tally } = this.props.navigation.state.params
    const { deck } = this.props
    const media = (deck.questions.length / 2)

    return (
      <View style={styles.container}>
        <Result
          deck={deck}
          tally={tally}
          media={media}
          onRetakeQuiz={this.onRetakeQuiz}
          onBackToDecks={this.onBackToDecks} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PaleRose,
  },
})

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckKey]
  }
}

export default connect(mapStateToProps)(QuizResultScreen)