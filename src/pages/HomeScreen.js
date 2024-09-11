import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import Shearch from "../component/Shearch";
import categories from "../data/categories.json"
import Product from "../data/products.json"
import ProductCart from "../component/ProductCart";
function HomeScreen() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.parent}>
                    <View style={{width: "45%"}}>
                        <Text style={styles.text}>Food</Text>
                    </View>
                    <View style={{width: "35%"}}>
                        <Image source={require("../assets/images/img_4.png")} style={styles.logo}/>
                    </View>
                </View>
                <Text style={styles.textUnder}>Order your favourite food!</Text>
            </View>

            <View style={{paddingTop: 45}}>
                <View style={styles.shearch}>
                    <View style={{width: "75%"}}>
                        <Shearch/>
                    </View>
                    <View style={{width: "20%"}}>
                        <Image source={require("../assets/images/img_5.png")} style={{width: 60, height: 60}}/>
                    </View>
                </View>
            </View>

            <View style={styles.fillter}>
                <ScrollView horizontal={true} style={{width: "100%", marginRight: 500}}>
                    {categories.map(el => (
                        <TouchableOpacity style={styles.elements} key={el.id}>
                            <Text style={styles.text2}>{el.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>


            <ScrollView style={{maxHeight: 295}}>
                <View style={styles.cartParent}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
                        {Product.products?.map(item => (
                            <ProductCart data={item} images={item.image} key={item.id}/>
                        ))}
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 10,
    },
    parent: {
        width: "100%",
        paddingTop: 15,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    text: {
        color: 'rgb(60, 47, 47)',
        fontFamily: 'Lobster',
        fontSize: 45,
        fontWeight: '400',
        textAlign: 'left',
    },
    textUnder: {
        color: "rgb(106, 106, 106)",
        fontFamily: "Poppins",
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'left',
    },
    logo: {
        width: "100%",
        height: 150,
        backfaceVisibility: "visible"
    },
    fillter: {
        paddingTop: 41,
        width: "100%"
    },
    elements: {
        width: "8%",
        height: 50,
        borderRadius: 20,
        backgroundColor: "rgb(239, 42, 57)",
        marginHorizontal: 14
    },
    text2: {
        paddingTop: 15,
        textAlign: "center",
        color: "rgb(245, 245, 245)",
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 19,
    },
    shearch: {
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    cartParent: {
        width: "100%",
        paddingTop: 41,
    }
});

export default HomeScreen;
