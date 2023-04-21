import { ImageBackground } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>

    <ImageBackground style={styles.ARmhvyuW} source={require("./Home Screen.png")} resizeMode="cover"><ImageBackground style={styles.IdqTpSPL} source={require("./Home Top Info.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.yNoXHbKy} source={require("./Share and get.png")} resizeMode="cover"></ImageBackground><ImageBackground style={styles.pcJbencr} source={require("./History Section.png")} resizeMode="cover"><ImageBackground style={styles.WnohOgKJ} source={require("./Bottom Navigation.png")} resizeMode="cover"></ImageBackground></ImageBackground></ImageBackground></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  ARmhvyuW: {
    width: 357,
    height: 573
  },
  IdqTpSPL: {
    width: 352,
    height: 375
  },
  yNoXHbKy: {
    width: 321,
    height: 88,
    position: "absolute",
    left: 17,
    top: 377
  },
  pcJbencr: {
    width: 319,
    height: 115,
    position: "absolute",
    left: 20,
    top: 466
  },
  WnohOgKJ: {
    width: 288,
    height: 39,
    position: "absolute",
    left: 13,
    top: 35
  }
});
export default Untitled3;