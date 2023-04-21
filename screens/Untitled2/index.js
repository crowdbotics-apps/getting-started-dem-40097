import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>

    <View style={styles.DfOFPAIj}><ImageBackground style={styles.qcQLHGBM} source={require("./Logo.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.vlkharVG} source={require("./Inputs.png")} resizeMode="cover"><TextInput style={styles.yJZzSaNW} placeholder="name@email.com" placeholderTextColor="#fffafa"></TextInput></ImageBackground><Text style={styles.VISDeSxo}>Log In</Text><ImageBackground style={styles.zEPIOpvy} source={require("./Social Media Buttons.png")} resizeMode="cover"></ImageBackground></View><TextInput style={styles.SCXNETpx} placeholder="Password" placeholderTextColor="#B1B1B1"></TextInput><ImageBackground style={styles.nnzYMeKR} source={require("./Home Indicator - On Light.png")}></ImageBackground></SafeAreaView>;
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
    top: 72
  },
  vlkharVG: {
    width: 341,
    height: 182,
    position: "absolute",
    left: 7,
    top: 209
  },
  VISDeSxo: {
    width: 353,
    height: 40,
    lineHeight: 40,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    left: 2,
    top: 170,
    color: "#ffffff",
    textAlign: "center"
  },
  yJZzSaNW: {
    backgroundColor: "#2F3C50",
    borderColor: "#cccccc",
    width: 300,
    height: 30,
    position: "absolute",
    left: 10,
    top: 18,
    color: "#ffffff"
  },
  SCXNETpx: {
    backgroundColor: "#2F3C50",
    borderColor: "#cccccc",
    width: 300,
    height: 30,
    position: "absolute",
    left: 15,
    top: 293,
    color: "#ffffff"
  },
  zEPIOpvy: {
    width: 348,
    height: 62,
    position: "absolute",
    left: -9,
    top: 456
  },
  nnzYMeKR: {
    width: 240,
    height: 22,
    position: "absolute",
    left: 58.5,
    top: 536
  }
});
export default Untitled2;