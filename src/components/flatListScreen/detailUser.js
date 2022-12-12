import { useRoute } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import constant from "../../controllers/constant";

const DetailUser = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const dataUser = route.params?.data

    const [name, setName] = useState(dataUser?.item?.name)
    const [tell, setTell] = useState(dataUser?.item?.tell)
    const [email, setEmail] = useState(dataUser?.item?.email)
    const [avatar, setAvatar] = useState(dataUser?.item?.avatar)

    const item = {
        name: name,
        tell: tell, 
        email: email,
        avatar: avatar
    }

    function gotoList() {
        navigation.navigate(constant.screenName.FlatListScreen, {dataItem: {index: dataUser.item.index,
        item: item}})
    }

    function home() {
        navigation.popToTop()
    }




    return(
        <View style={styles.container}>
            <View style={styles.avatarBox}>
                <Image source={{uri: avatar}} style={styles.avatar}/>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.title}>Tên: </Text>
                <TextInput style={styles.title} onChangeText={(text) => setName(text)}>{name}</TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.tell}>Số điện thoại: </Text>
                <TextInput placeholder="Hahaha"  style={styles.tell}>{tell}</TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.email}>Email: </Text>
                <TextInput placeholder="Hahaha"  style={styles.tell}>{email}</TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{...styles.email}}>Avatar: </Text>
                <TextInput placeholder="Hahaha"  style={{...styles.tell, width: 200}}>{avatar}</TextInput>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity  style={{backgroundColor: '#FFFF00', marginRight: 5, borderRadius: 50, paddingHorizontal: 15, paddingVertical: 5}} onPress={home}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>Quay lại</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={{backgroundColor: '#00FF00', marginLeft: 5, paddingHorizontal: 15, paddingVertical: 5, borderRadius: 50}} onPress={gotoList}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10
    },
    avatar: {
        width: 150,
        aspectRatio: 1,
        borderRadius: 150
    }, 
    avatarBox: {
        width: 175,
        aspectRatio: 1,
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#1DA1F2'
    }, 
    title: {
        fontSize: 25,
        marginTop: 15,
        fontWeight: 'bold',
        color: '#000',

    },
    tell: {
        fontSize: 18,
        color: '#000'
    },
    email: {
        fontSize: 18,
        color: '#000'
    }

})

export default DetailUser;