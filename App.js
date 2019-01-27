import React, { Component } from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import middleware from './middleware'
import reducers from './reducers'
import { Constants } from 'expo'
import DeckScreen from './screens/deckScreen'
import NewDeckScreen from './screens/newDeckScreen'
import DeckDetailScreen from './screens/deckDetailScreen'
import NewCardScreen from './screens/newCardScreen'
import QuizScreen from './screens/quizScreen'
import QuizResultScreen from './screens/quizResultScreen'
import { Lochmara, white, DarkSeaGreen } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { setLocalNotification } from './utils/helpers'

const store = createStore(reducers, middleware)

function DefaultStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createMaterialTopTabNavigator(
  {
    Home: DeckScreen,
    NewDeck: NewDeckScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        return routeName === 'Home' ? (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        ) : (
            <FontAwesome name="plus-square" size={30} color={tintColor} />
          );
      },
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: Platform.OS === 'ios' ? Lochmara : white,
      style: {
        height: 70,
        backgroundColor: Platform.OS === 'ios' ? white : Lochmara,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

const TabsContainer = createAppContainer(Tabs)

const MainNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: TabsContainer,
    navigationOptions: {
      header: null,
    },
  },
  DeckDetailScreen: {
    screen: DeckDetailScreen,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: Lochmara,
      },
    }),
  },
  NewCardScreen: {
    screen: NewCardScreen,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: Lochmara,
      },
    }),
  },
  QuizScreen: {
    screen: QuizScreen,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: DarkSeaGreen,
      },
    }),
  },
  QuizResultScreen: {
    screen: QuizResultScreen,
    navigationOptions: {
      header: null
    }
  },

}));

export default class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <DefaultStatusBar
            backgroundColor={Lochmara}
            barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}


