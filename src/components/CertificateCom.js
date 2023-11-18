
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';




export default function Certificatecom({ Title, type,date,image }) {

    const { filtereddata } = useSelector((state) => state.RegisterReducer);
    const dispatch = useDispatch();

  

    return (
        <View style={styles.foodcontainer}>
 
            <View style={{ flex: 1 }}>
                <Image
                    source={{ uri: image == null ? "https://classroomclipart.com/image/static7/preview2/certificate-of-excellence-with-star-clip-art-59659.jpg" : `data:image/jpeg;base64,${image}` }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    foodcontainer: {
        margin: 15,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        flexDirection: "row",
        width: 150,
        height: 100,
        borderRadius: 5,
        alignItems: "center",
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
})
