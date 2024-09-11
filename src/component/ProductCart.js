import React from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { Rating } from 'react-native-ratings';
import Icons2 from  'react-native-vector-icons/Entypo'

function ProductCart(prop) {
    const { data, images } = prop;
    return (
        <View style={style.container}>
            <View style={style.cart}>
                <View style={style.cart_images}>
                    <Image source={{ uri: images }} style={style.image} />
                </View>
                <View style={style.cart_name}>
                    <Text>{data.name}</Text>
                </View>
                <View style={style.cart_dec}>
                    <View style={style.cart_dec_view}>
                        <Rating
                            type='custom'
                            ratingColor='rgb(255, 150, 51)'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={1}
                            imageSize={20}
                            style={{ paddingVertical: 10 , marginRight: 4}}
                        />
                        <Text>{data.reading}</Text>
                    </View>
                    <View style={style.cart_dec_view2}>
                        <Icons2 name="heart-outlined" size={24} color="red"/>
                    </View>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "45%",
        height: 250,
        backgroundColor: "white",
        borderRadius: 20,
        marginBottom: 31,
        alignItems: 'center',
    },
    cart:{
        width: "100%",
    },
    cart_images:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center"
    },
    cart_name:{
        marginTop: 9,
        flexDirection: "row",
        justifyContent: "center"
    },
    cart_dec:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 12,
        alignItems: "center"
    },
    cart_dec_view:{
        width: "40%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    cart_dec_view2:{
        width: "23%"
    },
    image: {
        width: "100%",
        height: 121,
    }
});

export default ProductCart;
