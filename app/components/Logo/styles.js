import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    $largeImageSize: imageWidth,
    $smallImageSize: imageWidth / 2,
    $textBgSize: 50,
    $textSmSize: 15,

    container: {
        alignItems: 'center',
        marginTop: 140,

    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '$largeImageSize',
        height: '$largeImageSize',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    textBg: {
        color: '$white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '$textBgSize',
        letterSpacing: 4,
        marginTop: 3,
        fontWeight: '700',
        fontFamily: 'ZapfDingbatsITC'
    },
    textSm: {
        color: '$white',
        letterSpacing: 1.2,
        fontSize: '$textSmSize',
        marginBottom: 15,
        fontFamily: 'ZapfDingbatsITC'
    },
});
