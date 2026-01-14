import { View, Text, StatusBar } from "react-native";
import "../global.css"
import {CameraView ,useCameraPermissions} from "expo-camera"

export default function Index() {
  const [permissions , requsetPermission] = useCameraPermissions();
  if(!permissions?.granted){
    return(
      <View className="flex-1 items-center justify-center">
        <Text style={{color:"white"}}>We need your permission to use the camera</Text>
        <Text style={{color:"blue"}} onPress={requsetPermission}>Grant Permission</Text>
      </View>
    )
  }
  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View className="p-6 items-center">
        <Text className="text-3xl font-bold text-white">
          AMD Last Day
        </Text>
        <Text className="text-slate-300 mt-2 text-center">
          Welcome to the Last Day Event App
        </Text>
      </View>

      {/* Camera Section */}
      <View className="flex-1 overflow-hidden rounded-t-3xl">
        <CameraView
          className="flex-1"
          facing="front"
        />
      </View>
    </View>
  );
}
