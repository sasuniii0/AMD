import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Image} from "react-native";
import "../global.css"

const Index = () => {
    const [data, setData] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.text}>My-First-App</Text>
            <Image source={{uri : 'https://img.icons8.com/material/48/--tinder.png'}} style={styles.image}/>

            <TextInput 
            value={data} 
            onChangeText={setData}
            placeholder="Enter Something"
            style= {styles.input}
            />

            <TouchableOpacity 
            onPress={() => alert(data)}>
                <Text style={styles.text}>Press Me</Text>
            </TouchableOpacity>
            {/* <ScrollView/> */}

            <Text className="text-xl font-semibold text-gray-900">All rights received</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1, 
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'teal' , 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25, 
        elevation: 5
    },
    text: {
        fontSize: 24, 
        color: 'white', 
        fontWeight: 'bold',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    input: {
        height: 40, 
        borderColor: 'white', 
        borderWidth: 1,
        width: '80%',
        margin: 20,
        paddingHorizontal: 10,
        color: 'white',
        borderRadius: 5,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.2, 
        elevation: 3
    },
    image:{
        width: 48,
        height: 48
    }
})

export default Index;