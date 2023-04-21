import { Text } from "react-native";
import { ImageBackground } from "react-native";
import { View } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        
    <View style={styles.QbpERChc}><ImageBackground style={styles.ZfuTqsxg} source={require("./Runners Background.png")} resizeMode="cover"><ImageBackground style={styles.wqwKpQGP} source={require("./Description.png")} resizeMode="cover"><View style={styles.MNIqTKZd}></View></ImageBackground><ImageBackground style={styles.BIIbPkax} source={require("./Home Indicator - On Light.png")} resizeMode="cover"></ImageBackground><Text style={styles.EmfEkjec}>Get Started</Text></ImageBackground></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  QbpERChc: {
    height: 572,
    width: 356,
    backgroundColor: "#28333F",
    borderRadius: 0,
    color: "#777777"
  },
  ZfuTqsxg: {
    width: 355,
    height: 572
  },
  wqwKpQGP: {
    width: 252,
    height: 77,
    alignItems: "center",
    position: "absolute",
    top: 369,
    left: 51.5
  },
  BIIbPkax: {
    width: 204,
    height: 22,
    position: "absolute",
    left: 75.5,
    top: 532
  },
  MNIqTKZd: {
    height: 60,
    width: 247,
    backgroundColor: "#7B61FF",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 2,
    top: 95
  },
  EmfEkjec: {
    width: 147,
    height: 62,
    lineHeight: 50,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    left: 104,
    top: 464,
    fontWeight: "700",
    color: "#ffffff",
    opacity: 1,
    letterSpacing: 0,
    textAlign: "center"
  }
});
export default Untitled1;