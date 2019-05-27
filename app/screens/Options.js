import React, { Component } from 'react';
import { ScrollView, StatusBar, View, StyleSheet, Platform, Linking } from 'react-native';
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#FF6601';
const ICON_SIZE = 23;


class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  }
  handlePressTheme = () => {
    this.props.navigation.navigate('Themes')
  }

  handleSitePress = () => {
    Linking.openURL('https://bouncingshield.com/index.html').catch(() =>
      this.props.alertWithType('error', 'UPS, Sorry!', "Bouncing Shield Website can't be opened right now."))
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar translucent={false} barStyle='default' />
          <ListItem
            text='Themes'
            onPress={this.handlePressTheme}
            customIcon={
              <Icon
                type='ionicon'
                name={`${ICON_PREFIX}-arrow-forward`}
                size={ICON_SIZE}
                color={ICON_COLOR}
              />
            }
          />
          <Separator />
          <ListItem
            text='Developed by Bouncing Shield '
            onPress={this.handleSitePress}
            customIcon={
              <Icon
                name={`${ICON_PREFIX}-link`}
                size={ICON_SIZE}
                color={ICON_COLOR}
                type='ionicon'
              />}
          />
          <Separator />
        </ScrollView>
      </View>
    )
  }
}

export default connectAlert(Options);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    ...Platform.select({
      android: {
        paddingVertical: 5,
      },
    }),
  },
});
