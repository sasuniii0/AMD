import { View , Text} from "react-native"

const sample = () => {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-2xl font-bold text-gray-900">
                Sample Page
            </Text>

            <Text className="mt-4 text-center text-gray-700">
                This is a sample page for testing navigation in the app.
            </Text>
        </View>
    )
}

export default sample;