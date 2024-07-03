import { Text, View, SafeAreaView, StyleSheet, Image, Pressable, } from "react-native";

import { drawables } from "../constants/drawables";

export function HomeScreen({ navigation }) {



    return (
        <SafeAreaView className="p-5" style={styles.container}>
            <Image source={drawables.Logo} style={{ width: 100, height: 80 }} resizeMode="contain" />
            <Text className="text-5xl font-bold mt-7 pt-2" style={{ color: "#1D1D1D", }}>Hi!👋</Text>
            <Text className="text-xl" style={{ color: "#8C8C8C" }}>Welcome to MacPaw</Text>
            <View className="mt-11">
                <Text className="text-xl font-bold" style={{ color: "#1D1D1D", }}>Lets start using The Cat Api</Text>

                <Pressable onPress={() => navigation.navigate("Breads")} >
                    <View className="bg-white rounded-md p-3 mt-5 text-center " >
                        <Text className="text-lg text-center" style={{ color: "#FF868E", letterSpacing: 2 }}>Voting</Text>
                    </View>
                </Pressable>
                <View className="bg-white rounded-md p-3 mt-5 text-center " >
                    <Text className="text-lg text-center" style={{ color: "#FF868E", letterSpacing: 2 }}>Breeds</Text>
                </View>
                <View className="bg-white rounded-md p-3 mt-5 text-center " >
                    <Text className="text-lg text-center" style={{ color: "#FF868E", letterSpacing: 2 }}>Gallery</Text>
                </View>
            </View>
        </ SafeAreaView>
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

