import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';



const styles = EStyleSheet.create({
    $underlayColor: '$border',
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '$white',
    },
    text: {
        color: '$primaryBlue',
        fontSize: 15,
        fontFamily: 'ZapfDingbatsITC',
        letterSpacing: 2,
    },
    separator: {
        marginLeft: 20,
        backgroundColor: '$primaryGreen',
        flex: 1,
        height: StyleSheet.hairlineWidth,
    },
    icon: {
        backgroundColor: 'transparent',
        width: 35,
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    iconVisible: {
        backgroundColor: '$primaryBlue',
    },
    checkIcon: {
        width: 20,
    }
});

export default styles;