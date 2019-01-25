import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import { LavenderGrey } from '../utils/colors'

class FlashCard extends Component {
  state = {
    showingQuestion: 1,
    rotate: new Animated.Value(0),
  }

  onToggleCard = () => {
    const { showingQuestion, rotate } = this.state
    const toValue = showingQuestion ? 180 : 0

    Animated.timing(rotate, {
      toValue,
      duration: 600
    }).start()

    setTimeout(() => {
      this.setState({ showingQuestion: !showingQuestion })
    }, 150)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.question !== this.props.question) {
      this.setState({ showingQuestion: 1 })
      Animated.timing(this.state.rotate, {
        toValue: 0,
        duration: 600
      }).start()
    }
  }

  render() {
    const { showingQuestion, rotate } = this.state
    const { question, answer } = this.props

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onToggleCard} >
          <Animated.View
            style={[{
              transform: [{
                rotateY: rotate.interpolate({
                  inputRange: [0, 180],
                  outputRange: ['0deg', '180deg']
                })
              }]
            }, styles.ViewStyle]}>
            {showingQuestion && (
              <View>
                <Text style={styles.titleText}>Question:</Text>
                <Text style={styles.simpleText}>{question}</Text>
              </View>
            )}
            {!showingQuestion && (
              <View>
                <Text style={[{ transform: [{ rotateY: '-180deg' }] }, styles.titleText]}>Answer:</Text>
                <Text style={[{ transform: [{ rotateY: '-180deg' }] }, styles.simpleText]}>{answer}</Text>
              </View>
            )}
          </Animated.View>
        </TouchableWithoutFeedback  >
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

  },
  ViewStyle: {
    width: 300,
    height: 250,
    borderRadius: 6,
    backgroundColor: LavenderGrey,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontSize: 16,
    fontWeight:'500',
  },
  simpleText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    fontWeight:'600',
  }
});

export default FlashCard
