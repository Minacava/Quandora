import React, { Component } from 'react';
import {
    View, Text, Image, Keyboard, Animated, Platform

} from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

export default class Logo extends Component {
    constructor(props) {
        super(props);

        this.imageWidth = new Animated.Value(styles.$largeImageSize);
        // this.textBgWidth = new Animated.Value(styles.$textBgSize);
        // this.textSmWidth = new Animated.Value(styles.$textSmSize);

    }

    componentDidMount() {

        let showListener = 'keyboardWillShow';
        let hidelistener = 'keyboardWillHide';

        if (Platform.OS === 'android') {
            showListener = 'keyboardWillShow';
            hidelistener = 'keyboardWillHide';
        }

        this.KeyboardShowListener = Keyboard.addListener(showListener, this.KeyboardShow);
        this.KeyboardHideListener = Keyboard.addListener(hidelistener, this.KeyboardHide);
    }

    componentWillUnmount() {
        this.KeyboardShowListener.remove();
        this.KeyboardHideListener.remove();
    }


    KeyboardShow = () => {
        Animated.timing(this.imageWidth, {
            toValue: styles.$smallImageSize,
            duration: ANIMATION_DURATION,
        }).start();
    }
    KeyboardHide = () => {
        Animated.timing(this.imageWidth, {
            toValue: styles.$largeImageSize,
            duration: ANIMATION_DURATION,
        }).start();

    }


    render() {
        const containerImageStyle = [
            styles.containerImage,
            { width: this.imageWidth, height: this.imageWidth },
        ];
        return (
            <View style={styles.container}>
                <Animated.Image
                    resizeMode="contain" style={containerImageStyle}
                    source={require('./images/logo.png')} />
                <Text style={styles.textBg} >Quandora </Text>
                <Text style={styles.textSm} > Your Currency Agent </Text>
            </View>
        );
    }
}



