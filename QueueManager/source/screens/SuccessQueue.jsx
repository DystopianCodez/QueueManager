import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OutputtedText from "../components/OutputtedText";
import index from "uuid-random";

function SuccessQueueScreen() {
  const [createdInformation, setFetchedInformation] = useState({});
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  // Fetch the information only once when the component mounts
  useEffect(() => {
    fetchCreatedInformation();
  }, []);

  async function fetchCreatedInformation() {
    let data = await AsyncStorage.getItem("qScreen");
    let reparsedString = JSON.parse(data);
    setFetchedInformation(reparsedString);
  }

  // Ensure consistent rendering even if fonts aren't loaded
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Loading fonts...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Queue Successfully created</Text>
        <View style={styles.queueJoin}>
          <Text style={styles.paragraph}>Your Queue's join</Text>
          <Text style={styles.paragraph}>Find details below</Text>
          <Text style={styles.paragraphCode}>21221</Text>
        </View>
        <View style={styles.addionalInformation}>
          <Text>Additional information visible to users</Text>
          {/*{createdInformation.map((item) =>*/}
          {/*  console.log(item),*/}
          {/*  // <View key={item.id}>*/}
          {/*  //   /!* Loop through the properties of each object *!/*/}
          {/*  //   {Object.entries(item).map(([key, value]) => (*/}
          {/*  //     <Text key={key}>*/}
          {/*  //       {key}: {value}*/}
          {/*  //     </Text>*/}
          {/*  //   ))}*/}
          {/*  // </View>*/}
          {/*)}*/}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
  },
  paragraph: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  queueJoin: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
  },
  paragraphCode: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
  },
  addionalInformation: {
    backgroundColor: "#b9b9bb",
    padding: 30,
    borderRadius: 10,
    marginTop: 16,
  },
});

export default SuccessQueueScreen;
