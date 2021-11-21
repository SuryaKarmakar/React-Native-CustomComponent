import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

// This is a Function based component
const CustomComponent1 = () => {
  return (
    <View>
      <Text>Your CustomComponent 1</Text>
    </View>
  );
};

// This is a Class based component
class CustomComponent2 extends Component {
  render() {
    return (
      <View>
        <Text>Your CustomComponent 2</Text>
      </View>
    );
  }
}
// This is a Root component
const App = () => {
  return (
    <View style={styles.container}>
      {/*Here we use our custom component*/}
      <CustomComponent1 />
      <CustomComponent2 />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
