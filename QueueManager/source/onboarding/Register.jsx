import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from "react-native";
import { useFonts } from "expo-font";
import InputBoxIcon from "../../assets/icons/Icons";
import React, { useState } from "react";
import { InputField } from "../components/Input";

function RegistrationScreen() {
  const [queueName, setQueueName] = useState("");
  const [queueLocation, setQueueLocation] = useState("");
  const [queueLandmark, setQueueLandmark] = useState("");

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  }

  function createAccoutn() {
    console.log(queueName);
    console.log(queueLocation);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Enter Queue Details</Text>
        <Text style={styles.paragraph}>
          Entering these details woulsd make the experience smoother for
          customers.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField
          inputPlaceHolder={"Queue's Name: 'Bilsling Queue'"}
          setQueueInfo={setQueueName}
        />
        <InputField
          inputPlaceHolder={"Queue's Name: 'Billing Queue'"}
          setQueueInfo={setQueueLocation}
        />
        <InputField
          inputPlaceHolder={"Queue's Name: 'Billing Queue'"}
          setQueueInfo={setQueueLandmark}
        />
        <InputField
          inputPlaceHolder={"Queue's Name: 'Billing Queue'"}
          setQueueInfo={setQueueLandmark}
        />
        <InputField
          inputPlaceHolder={"Queue's Name: 'Billing Queue'"}
          setQueueInfo={setQueueLandmark}
        />
      </View>
      <View style={styles.proceed}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 20,
    gap: 10,
    marginVertical: 100,
    marginHorizontal: 20,
  },
  headerContainer: {
    flex: 0.4,
    backgroundColor: "blue",
  },
  header: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 32,
  },
  paragraph: {
    fontFamily: "Poppins-Regular",
    color: "#8a8a8c",
    fontSize: 16,
    marginTop: 16,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 10,
  },

  inputContainer: {
    flex: 1,
    gap: 30,
    backgroundColor: "red",
  },
  proceed: {
    flex: 1,
  },
});

export default RegistrationScreen;
