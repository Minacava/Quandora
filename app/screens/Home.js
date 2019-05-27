import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SplashScreen from 'react-native-splash-screen';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputwithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { connectAlert } from '../components/Alert';

import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        lastConvertedDate: PropTypes.object,
        primaryColor: PropTypes.string,
        alertWithType: PropTypes.func,
        currencyError: PropTypes.string,

    }
    componentDidMount() {
        SplashScreen.hide()
    }
    componentWillMount() {
        this.props.dispatch(getInitialConversion());
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.currencyError && nextProps.currencyError !== this.props.currencyError) {
            this.props.alertWithType('error', 'Error', nextProps.currencyError);
        }
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' })
    }
    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' })
    }
    handleTextChange = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    }
    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency());
    };
    handleOptionsPress = () => {
        this.props.navigation.navigate('Options')
    };
    render() {
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
        if (this.props.isFetching) {
            quotePrice = "...";
        }
        return (
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar translucent={false} barStyle='light-content' />
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView
                    keyboardVerticalOffset="0"
                    behavior='padding'
                    style={{ flex: 1 }}>
                    <Logo tintColor={this.props.primaryColor} />
                    <InputwithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType='numeric'
                        onChangeText={this.handleTextChange}
                        keyboardAppearance='dark'
                        textColor={this.props.primaryColor}
                    />
                    <InputwithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        editable={false}
                        value={quotePrice}
                        textColor={this.props.primaryColor}
                    />
                    <LastConverted
                        date={this.props.lastConvertedDate}
                        base={this.props.baseCurrency}
                        quote={this.props.quoteCurrency}
                        conversionRate={this.props.conversionRate}
                    />
                    <ClearButton
                        text='Reverse Currencies'
                        onPress={this.handleSwapCurrency}
                    />
                </KeyboardAvoidingView>
            </Container >
        );
    }
};

const mapStateToProps = (state) => {
    const { baseCurrency, quoteCurrency } = state.currencies;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        isFetching: conversionSelector.isFetching,
        primaryColor: state.theme.primaryColor,
        currencyError: state.currencies.error,
    };
};

export default connect(mapStateToProps)(connectAlert(Home));