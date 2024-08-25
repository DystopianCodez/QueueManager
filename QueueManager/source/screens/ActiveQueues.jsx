import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import React, { useState } from "react";

function ActiveQueuesScreen({ navigation }) {
  const [createdQueues, setCreatedQueues] = useState([]);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
  });

  function createQueueHandler() {
    navigation.navigate("Register");
  }

  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContainerText}>Your Queues</Text>
        <View style={styles.headerContainerIcons}>
          <TouchableOpacity onPress={createQueueHandler}>
            <Image
              style={styles.headerContainerAddIcon}
              source={require("../../assets/icons/plus.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.headerContainerAddIcon}
              source={require("../../assets/icons/add-link.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.createdQueuesContainer}>
        {createdQueues.length <= 0 ? (
          <View style={styles.noActiveQueuesContainer}>
            <Text style={styles.noActiveQueuesContainerText}>
              The Queues You create appear here. Join one to see the magic!
            </Text>
          </View>
        ) : (
          "No, you can't vote yet."
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    marginHorizontal: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainerText: {
    fontFamily: "Poppins-ExtraBold",
    fontSize: 28,
  },
  headerContainerAddIcon: {
    height: 30,
    width: 30,
  },
  headerContainerIcons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 16,
  },
  createdQueuesContainer: {
    // backgroundColor: "lightgray",
    flex: 1,
  },
  noActiveQueuesContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 25,
  },
  noActiveQueuesContainerText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
});

export default ActiveQueuesScreen;
