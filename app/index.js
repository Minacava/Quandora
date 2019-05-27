import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import { Provider } from 'react-redux';


import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';


EStyleSheet.build({
    $primaryBlue: '#202C39',
    $primaryGreen: '#8AB643',
    $primaryOrange: '#FF6601',
    $primaryPurple: '#560D80',

    $white: '#FFFFFF',
    $border: '#d6d4d4',
    $strongGreen: '#73B834',
    $darkText: '#343434',


})

export default () => (
    <Provider store={store}>
        <AlertProvider>
            <Navigator onNavigationStateChange={null} />
        </AlertProvider>
    </Provider >
);
