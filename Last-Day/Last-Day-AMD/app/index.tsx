import { View, Text, TouchableOpacity, Alert, StatusBar, Image, Platform } from "react-native";
import "../global.css";
import {
  CameraView,
  useCameraPermissions,
  CameraType,
  BarcodeScanningResult
} from "expo-camera";
import { useRef, useState } from "react";

export default function Index() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("back");
  const [photo, setPhoto] = useState<string | null>(null);

  const cameraRef = useRef<CameraView>(null);

  if (!permission) {
    return <View className="flex-1 bg-black" />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-900 px-6">
        <Text className="text-white text-center mb-4">
          We need your permission to use the camera
        </Text>
        <Text
          className="text-blue-400 text-lg"
          onPress={requestPermission}
        >
          Grant Permission
        </Text>
      </View>
    );
  }

  if (Platform.OS === "ios" && !permission.granted) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-900 px-6">
        <Text className="text-white text-center">
          Camera not available on iOS Simulator. Use a real device.
        </Text>
      </View>
    );
  }

  // Flip front/back camera
  const toggleCameraFacing = () => {
    setFacing((f) => (f === "back" ? "front" : "back"));
  };

  // Capture photo
  const takePhoto = async () => {
    if (!cameraRef.current) return;
    try {
      const result = await cameraRef.current.takePictureAsync();
      setPhoto(result.uri);
      console.log("Photo captured:", result.uri);
    } catch (error) {
      console.error("Failed to take photo:", error);
    }
  };

  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View className="p-6 items-center">
        <Text className="text-3xl font-bold text-white">AMD Last Day</Text>
        <Text className="text-slate-300 mt-2 text-center">
          Welcome to the Last Day Event App
        </Text>
      </View>

      {/* Camera Feed */}
      <View className="flex-1 overflow-hidden rounded-t-3xl">
        <CameraView
          ref={cameraRef}
          className="flex-1 rounded-t-3xl"
          facing={facing}
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          onBarcodeScanned={(result: BarcodeScanningResult) => {
            console.log("QR Scanned:", result.data);
          }}
        />

        {/* Flip & Capture Buttons */}
        <View className="absolute bottom-10 left-0 right-0 flex-row justify-center space-x-4">
          <TouchableOpacity
            className="bg-black bg-opacity-50 px-5 py-3 rounded-full"
            onPress={toggleCameraFacing}
          >
            <Text className="text-white">Flip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-black bg-opacity-50 px-5 py-3 rounded-full"
            onPress={takePhoto}
          >
            <Text className="text-white">Capture</Text>
          </TouchableOpacity>
        </View>

        {/* Show last photo thumbnail */}
        {photo && (
          <Image
            source={{ uri: photo }}
            className="absolute top-4 left-4 w-24 h-24 border-2 border-white rounded"
          />
        )}
      </View>
    </View>
  );
}
