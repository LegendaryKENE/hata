import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },  
    image: {
        width: Platform.OS === 'android' ? 75 : 100,
        height: Platform.OS === 'android' ? 75 : 100,
        borderRadius: 50,
    },
    inner_container: {},
    title: {},
    info_container: {},
    year: {},
    },
);