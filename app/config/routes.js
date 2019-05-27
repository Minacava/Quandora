import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';


const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options',
        },
    },
    Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Themes',
        },

    },
},
    {
        headerMode: 'screen',
    });

const CurrencyListStack = createStackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    }
})

export default createStackNavigator(


    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                header: () => null,
            },
        },
        CurrencyList: {
            screen: CurrencyListStack,
        },
    },
    {
        headerMode: 'none',
        mode: 'modal',
        cardStyle: {
            paddingTop:
                StatusBar.currentHeight,


        },

    },
);  