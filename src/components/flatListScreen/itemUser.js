import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

import constant from "../../controllers/constant";

const ItemUser = ({ dataUser, handlerTouch}) => {

    const navigation  = useNavigation()

    function handlerTouch() {
        navigation.navigate(constant.screenName.DetailUser, {data: dataUser})
    }
    return (
        <TouchableOpacity onPress={handlerTouch}>
            <View style={styles.container}>
                <Image source={{uri: dataUser?.item.avatar}} style={styles.itemAvatar}/>
                <Text style={styles.itemTitle}>{dataUser?.item.name}</Text>
                
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7,
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: "#000",
        marginLeft: 15
    },
    itemAvatar: {
        width: 50,
        aspectRatio: 1,
        resizeMode: 'center',
        borderRadius: 50
    },
})

export default ItemUser;