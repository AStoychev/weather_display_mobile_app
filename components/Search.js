import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCity } from "../redux/slices/cityQuery";

import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Search({ onHandlePress }) {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    function onHandleSearch() {
        dispatch(setCity(query));
        onHandlePress(query)
    }
    return (
        <View style={styles.searchWrapper}>
            <TextInput
                style={styles.input}
                placeholder="Search city"
                placeholderTextColor='#ffffff'
                value={query}
                onChangeText={text => setQuery(text)}
            />
            <TouchableOpacity style={styles.searchButton} onPress={onHandleSearch}>
                <Ionicons name="search" size={30} color="#999" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchWrapper: {
        width: '100%',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        color: '#ffffff',
    },
    searchButton: {
        marginHorizontal: 10
    },
});

export default Search;