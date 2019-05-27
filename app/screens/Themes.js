import React, { Component } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple',

    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
});

class Themes extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    }
    handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView >
                    <StatusBar traslucent={false} barStyle='default' />
                    <ListItem
                        text='Blue'
                        onPress={() => this.handleThemePress(styles.$blue)}
                        selected
                        checkmark={false}
                        iconBackground={styles.$blue}
                    />
                    <Separator />
                    <ListItem
                        text='Orange'
                        onPress={() => this.handleThemePress(styles.$orange)}
                        selected
                        checkmark={false}
                        iconBackground={styles.$orange}
                    />
                    <Separator />
                    <ListItem
                        text='Green'
                        onPress={() => this.handleThemePress(styles.$green)}
                        selected
                        checkmark={false}
                        iconBackground={styles.$green}
                    />
                    <Separator />
                    <ListItem
                        text='Purple'
                        onPress={() => this.handleThemePress(styles.$purple)}
                        selected
                        checkmark={false}
                        iconBackground={styles.$purple}
                    />
                    <Separator />
                </ScrollView>
            </View>
        )
    }
}

export default connect()(Themes);

