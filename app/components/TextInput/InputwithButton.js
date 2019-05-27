import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
} from 'react-native';


import styles from './styles';

const InputwithButton = (props) => {
    const { onPress, buttonText, editable, textColor = true } = props;

    const underlayColor = "white";


    const containerStyles = [styles.container];
    if (editable == false) {
        containerStyles.push(styles.containerDisabled);
    }
    const buttonTextStyles = [styles.buttonText];
    if (textColor) {
        buttonTextStyles.push({
            color: props.textColor,
            borderColor: props.textColor
        });
    }
    return (
        <View style={containerStyles}>
            <TouchableHighlight
                underlayColor={underlayColor}
                style={styles.buttonContainer}
                onPress={onPress}>
                <Text style={buttonTextStyles}>{buttonText}</Text>
            </TouchableHighlight>
            <TextInput style={styles.input}{...props} />
        </View>
    );
};

InputwithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    textColor: PropTypes.string,
};


export default InputwithButton;