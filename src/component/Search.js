import React, {useCallback, useState} from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Product from "../data/products.json";
import Icon from 'react-native-vector-icons/FontAwesome';

function Search() {
    const [value, setValue] = useState('')

    const handleChange = useCallback((e) =>{
        setValue(e.nativeEvent.text)
        // Filter products based on search query
        const filteredProducts = Product.products.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        console.log(filteredProducts)
    }, [])

    
    return (
        <View style={styles.container}>
            <Icon name="search" size={20} color="#000" style={styles.icon} />
            <TextInput style={styles.input} onChange={(e) => handleChange(e)} placeholder="Search" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        width: '100%',
        height: 60,
        paddingLeft: 15,
        paddingRight: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        backgroundColor: 'transparent',
    },
});

export default Search;