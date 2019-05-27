import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';


const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$primaryBlue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
        width: '100%',
        top: 0,
        height: 275,
        zIndex: 0,
        position: 'absolute'

    }
});
