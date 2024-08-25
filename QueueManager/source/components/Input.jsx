import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Switch,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";

function InputField(props) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  }
  return (
    <View style={styles.input}>
      <View style={styles.inputIconWrapper}>
        <Image
          style={styles.inputIcon}
          source={require("../../assets/icons/inbox.png")}
        />
      </View>
      <TextInput
        placeholder={props.inputPlaceHolder}
        style={styles.inputPlaceHolderText}
        onChangeText={(text) => {
          props.setQueueInfo(text);
        }}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      />
    </View>
  );
}

function InputFieldWithRadio(props) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Hello</Text>;
  }
  return (
    <View style={styles.inputRadio}>
      <Text style={styles.radioPlaceholder}>{props.placeholder}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={props.setQueueState ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={props.setQueueState}
        value={props.value}
      />
    </View>
  );
}

function InputFieldWithCounter(props) {
  return (
    <View style={styles.inputCounterWrapper}>
      <View style={styles.inputIconWrapper}>
        <Image
          style={styles.inputIcon}
          source={require("../../assets/icons/inbox.png")}
        />
      </View>
      <Text>Wait time/Person</Text>
      <View style={styles.countWrapper}>
        <View style={styles.countWrapperParent}>
          <TouchableOpacity
            style={styles.incrementButton}
            onPress={() => props.setWaitTime(props.waitTime - 1)}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <View style={styles.lineDivider}>
            <View style={styles.lineChild}>
              <Text></Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.decrementButton}
            onPress={() => props.setWaitTime(props.waitTime + 1)}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.countMinute}>{props.waitTime}min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 10,
    // flex: 0.2, // Use flex to take full height relative to parent
    // height: 70,
  },
  inputCounterWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 10,
  },
  radioPlaceholder: {
    fontFamily: "Poppins-Regular",
  },
  inputRadio: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: "space-between",
    // flex: 0.2, // Use flex to take full height relative to parent
    // height: 70,
  },
  waitTImeText: {
    fontFamily: "Poppins-Regular",
  },

  //   End
  inputIconWrapper: {
    height: 30,
    width: 30,
    backgroundColor: "black",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputIcon: {
    height: 15,
    width: 15,
  },
  inputPlaceHolderText: {
    fontFamily: "Poppins-SemiBold",
    marginLeft: 10,
    // backgroundColor: "red",
    height: "100%",
  },
  incrementButton: {
    backgroundColor: "lightgray",
    padding: 8,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  decrementButton: {
    backgroundColor: "lightgray",
    padding: 8,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  lineDivider: {
    width: 3,
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  countWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  lineChild: {
    width: 3,
    backgroundColor: "darkgray",
  },
  countWrapperParent: {
    display: "flex",
    flexDirection: "row",
  },
  countMinute: {
    fontFamily: "Poppins-Regular",
  },
});

export { InputField, InputFieldWithRadio, InputFieldWithCounter };
