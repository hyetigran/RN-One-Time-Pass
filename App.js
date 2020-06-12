import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";

export default function App() {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <SignupForm />
      <SigninForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
