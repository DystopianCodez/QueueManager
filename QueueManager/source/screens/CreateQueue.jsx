import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  InputField,
  InputFieldWithCounter,
  InputFieldWithRadio,
} from "../components/Input";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../database/database.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CreateQueueScreen() {
  const [queueName, setQueueName] = useState("");
  const [queueLocation, setQueueLocation] = useState("");
  const [queueLandmark, setQueueLandmark] = useState("");
  const [count, setCount] = useState(1);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  }

  function generateNumber() {
    return Math.floor(Math.random() * 9);
  }

  async function createQueueCard() {
    let queue = "";
    for (let i = 0; i <= 5; i++) {
      let number = generateNumber();
      queue += number;
    }
    let qInfoObject = {
      groupingEn: isEnabled,
      landmark: queueLandmark,
      location: queueLocation,
      name: queueName,
      waitTime: count,
    };
    await AsyncStorage.setItem("qScreen", JSON.stringify(qInfoObject));
    let data = await AsyncStorage.getItem("qScreen");
    console.log(data);

    const customDocId = "qInfo"; // Replace this with your desired custom ID
    const customDocRef = doc(db, queue, customDocId);
    await setDoc(customDocRef, qInfoObject);
    console.log(queue);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.header}>Enter Queue Details</Text>
        <Text style={styles.paragraph}>
          Entering these details woulsd make the experience smoother for
          customers.
        </Text>
      </View>
      <View style={styles.containerForm}>
        <InputField
          inputPlaceHolder={"Queue's Name: 'Billing Queue'"}
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
        <InputFieldWithCounter setWaitTime={setCount} waitTime={count} />
        <InputFieldWithRadio
          placeholder={"Enable Grouping"}
          setQueueState={toggleSwitch}
          value={isEnabled}
        />
        <Button title={"Proceed"} onPress={createQueueCard} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    marginHorizontal: 25,
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
  containerHeader: {
    // backgroundColor: "orange",
    // flex: 1,
  },
  containerForm: {
    flex: 1,
    gap: 20,
    marginTop: 30,
  },
});

export default CreateQueueScreen;
