import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>

    <View style={styles.DfOFPAIj}><ImageBackground style={styles.qcQLHGBM} source={require("./Logo.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.vlkharVG} source={require("./Inputs.png")} resizeMode="cover"><TextInput style={styles.yJZzSaNW} placeholder="name@email.com" placeholderTextColor="#fffafa"></TextInput><Pressable onPress={() => {
          navigation.navigate("Untitled3");
        }}><ImageBackground style={styles.QaZHUVnx} source={require("./Buttons.png")} resizeMode="cover"></ImageBackground></Pressable></ImageBackground><Text style={styles.VISDeSxo}>Log In</Text><ImageBackground style={styles.zEPIOpvy} source={require("./Social Media Buttons.png")} resizeMode="cover"></ImageBackground></View><TextInput style={styles.SCXNETpx} placeholder="Password" placeholderTextColor="#B1B1B1"></TextInput><ImageBackground style={styles.nnzYMeKR} source={require("./Home Indicator - On Light.png")}></ImageBackground></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  DfOFPAIj: {
    height: 573,
    width: 357,
    backgroundColor: "#28333F",
    borderRadius: 0,
    color: "#777777"
  },
  qcQLHGBM: {
    width: 87,
    height: 87,
    position: "absolute",
    left: 135,
    top: 58
  },
  vlkharVG: {
    width: 341,
    height: 182,
    position: "absolute",
    left: 8,
    top: 193
  },
  VISDeSxo: {
    width: 353,
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    left: 2,
    top: 153,
    color: "#ffffff",
    textAlign: "center"
  },
  yJZzSaNW: {
    backgroundColor: "#2F3C50",
    borderColor: "#cccccc",
    width: 300,
    height: 30,
    position: "absolute",
    left: 18,
    top: 17,
    color: "#ffffff"
  },
  SCXNETpx: {
    backgroundColor: "#2F3C50",
    borderColor: "#cccccc",
    width: 300,
    height: 30,
    position: "absolute",
    left: 25,
    top: 278,
    color: "#ffffff"
  },
  zEPIOpvy: {
    width: 348,
    height: 65,
    position: "absolute",
    left: 4.5,
    top: 461
  },
  nnzYMeKR: {
    width: 240,
    height: 22,
    position: "absolute",
    left: 58.5,
    top: 536
  },
  QaZHUVnx: {
    width: 356,
    height: 96,
    position: "absolute",
    left: -7.5,
    top: 183
  }
});
export default Untitled2;