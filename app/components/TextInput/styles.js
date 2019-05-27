import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 40;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({


    container: {
        backgroundColor: '#202C39',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11,
        borderColor: '$white',

    },
    containerDisabled: {
        backgroundColor: '$strongGreen',
    },
    buttonContainer: {
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBFBFB',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '$white',
        borderWidth: 0.3,
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 20,
        paddingHorizontal: 18,
        color: '$white',
    },
    input: {
        flex: 1,
        height: INPUT_HEIGHT,
        borderTopRightRadius: BORDER_RADIUS,
        paddingHorizontal: 8,
        color: '$white',
        fontSize: 18,
        borderColor: '$white',
        borderWidth: 0.3,
    },
});