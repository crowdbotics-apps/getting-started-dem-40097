import { TextInput } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>

    <View style={styles.DfOFPAIj}><ImageBackground style={styles.qcQLHGBM} source={require("./Logo.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.vlkharVG} source={require("./Inputs.png")} resizeMode="cover"><TextInput style={styles.yJZzSaNW} placeholder="name@email.com" placeholderTextColor="#fffafa"></TextInput></ImageBackground><Text style={styles.VISDeSxo}>Log In</Text></View><TextInput style={styles.SCXNETpx} placeholder="Password" placeholderTextColor="#B1B1B1"></TextInput></SafeAreaView>;
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
    top: 91
  },
  vlkharVG: {
    width: 341,
    height: 182,
    position: "absolute",
    left: 8,
    top: 222
  },
  VISDeSxo: {
    width: 353,
    height: 40,
    lineHeight: 40,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 2,
    top: 184,
    color: "#ffffff",
    textAlign: "center"
  },
  yJZzSaNW: {
    backgroundColor: "#2F3C50",
    borderColor: "#cccccc",
    width: 294,
    height: 30,
    position: "absolute",
    left: 22,
    top: 16,
    color: "#ffffff"
  },
  SCXNETpx: {
    backgroundColor: "#2F3C50",
    borderColor: "#cccccc",
    width: 305,
    height: 30,
    position: "absolute",
    left: 30,
    top: 308,
    color: "#ffffff"
  }
});
export default Untitled2;