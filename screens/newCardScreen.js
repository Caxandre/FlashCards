import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { Lochmara, PaleRose, DarkSeaGreen, Nobel } from '../utils/colors'
import { addCard } from '../actions/deck'

class NewCardScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Create Card'
        }
    }

    state = {
        question: '',
        answer: ''
    }

    onSubmit = () => {
        const { dispatch, navigation, deckKey } = this.props
        const { question, answer } = this.state
        if (question === '' || answer === '') return;

        dispatch(addCard({ deckKey, question, answer }))

        navigation.navigate('DeckDetailScreen', { deckKey })
    }

    render() {

        const { question, answer } = this.state

        const disable = question === '' || answer === '';

        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.addArea}>
                        <Text style={styles.addTxt}>Question</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({ question: text })}
                            value={question}
                            autoFocus={true}
                        />
                        <Text style={styles.addTxt}>Answer</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({ answer: text })}
                            value={answer}
                        />
                        <TextButton
                            onPress={this.onSubmit}
                            color={disable === true ? Nobel : Lochmara}
                            text='Create Card'
                            icon='check'
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PaleRose,
    },
    addArea: {
        backgroundColor: DarkSeaGreen,
        borderRadius: Platform.OS === 'ios' ? 16 : 6,
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 25,
        justifyContent: 'flex-start',
        shadowRadius: 3,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    addTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },
    input: {
        height: 50,
        backgroundColor: PaleRose,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: Platform.OS === 'ios' ? 16 : 6,
    },
})

function mapStateToProps(state, { navigation }) {
    return {
        deckKey: navigation.state.params.deckKey,
    }
}

export default connect(mapStateToProps)(NewCardScreen)

