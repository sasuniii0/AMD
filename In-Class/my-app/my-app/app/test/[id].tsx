import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native"

const id = () => {
    const params = useLocalSearchParams();
    console.log(params.id);
    
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text>This is dynamic route with id page</Text>
        </View>
    )
}
export default id;