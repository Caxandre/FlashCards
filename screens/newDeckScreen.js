import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { Lochmara, PaleRose, DarkSeaGreen, Nobel } from '../utils/colors'
import { addDeck } from '../actions/deck'

class NewDeckScreen extends Component {

    state = {
        deckName: ''
    }

    onSubmit = () => {
        const { dispatch, navigation } = this.props
        const { deckName } = this.state

        if (deckName === '') return;

        dispatch(addDeck(deckName))

        navigation.navigate('Home')

        this.setState({
            deckName: ''
        })
    }

    render() {

        const { deckName } = this.state

        const disable = deckName === ''

        return (
            <View style={styles.container}>
                <View style={styles.addArea}>
                    <Text style={styles.addTxt}>Deck Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ deckName: text })}
                        value={deckName}
                        autoFocus={true} />
                        <TextButton
                            onPress={this.onSubmit}
                            color={disable === true ? Nobel : Lochmara}
                            text='Create Deck'
                            icon='check'
                        />
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
        borderRadius: Platform.OS === 'ios' ? 16 : 6,
        paddingLeft: 10,
        paddingRight: 10
    },
})

export default connect()(NewDeckScreen)
