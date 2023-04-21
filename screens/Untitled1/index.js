import { ImageBackground } from "react-native";
import { View } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        
    <View style={styles.QbpERChc}><ImageBackground style={styles.ZfuTqsxg} source={require("./Runners Background.png")} resizeMode="cover"><ImageBackground style={styles.wqwKpQGP} source={require("./Description.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.tCvMmNvH} source={require("./Time:Connection:Battery.png")} resizeMode="cover"></ImageBackground></ImageBackground></View></SafeAreaView>;
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
  tCvMmNvH: {
    width: 354,
    height: 27,
    position: "absolute",
    left: -6,
    top: 7
  }
});
export default Untitled1;