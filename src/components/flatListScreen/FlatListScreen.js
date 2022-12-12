import { useRoute } from '@react-navigation/native'
import {View, Text, FlatList, Alert} from 'react-native'


import ItemUser from './itemUser'
var list = [
    {
        id: 4312342,
        name: "Nguyễn Văn A",
        avatar: "https://thophat.com/wp-content/uploads/2022/03/BA%CC%81NH-HEO-1.jpg",
        email: "chothi@gmail.com",
        tell: "0123456789"
    },
    {
        id: 4312342,
        name: "Nguyễn Văn B",
        avatar: "https://www.ecovet.com.vn/res/project/cac-bien-phap-phong-ngua-tieu-chay-heo-con-sau-cai-sua-2419.png",
        email: "chothi@gmail.com",
        tell: "0123456789"
    },
    {
        id: 4312342,
        name: "Nguyễn Văn C",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Plums.jpg/280px-Plums.jpg",
        email: "chothi@gmail.com",
        tell: "0123456789"
    },
    {
        id: 4312342,
        name: "Nguyễn Văn D",
        avatar: "https://znews-photo.zingcdn.me/w660/Uploaded/sgorvz/2016_06_14/qua_xoai_1.jpg",
        email: "chothi@gmail.com",
        tell: "0123456789"
    },
    {
        id: 4312342,
        name: "Nguyễn Văn E",
        avatar: "https://images.baodantoc.vn/uploads/2021/Th%C3%A1ng%208/Ng%C3%A0y_23/Thanh/shutterstock_1491950819_eenv.jpg",
        email: "chothi@gmail.com",
        tell: "0123456789"
    },
    {
        id: 4312342,
        name: "Nguyễn Văn F",
        avatar: "https://trungtamtienghan.edu.vn/uploads/blog/2019_07/cach-noi-qua-tao-bang-tieng-han_1.jpg",
        email: "chothi@gmail.com",
        tell: "0123456789"
    },
    {
        id: 4312342,
        name: "Nguyễn Văn G",
        avatar: "https://cdn1.youmed.vn/tin-tuc/wp-content/uploads/2021/05/nho-fi.jpg",
        email: "chothi@gmail.com",
        tell: "0123456789"
    }
]

const FlatListScreen = ({navigation}) => {

    const route = useRoute()

    return(
            <FlatList
            data={list}
            renderItem={(item) => <ItemUser dataUser={item} />}
            keyExtractor={ item => item.id}
            style={{paddingHorizontal: 20, backgroundColor: '#FAFAFA'}}>

            </FlatList>
    )
}

export default FlatListScreen;