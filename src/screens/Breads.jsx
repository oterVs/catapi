
import axios from "axios";
import { useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";

export function Breads() {



    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/images/search?breed_ids=beng").then(res => {
            console.log(res.data, "respuesta")
        }
        )
    }, [])

    return (
        <SafeAreaView className="p-6" style={styles.container}>

            <View className="bg-white rounded-md">
                <Text>Holas</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F7'
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
});

