import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Here you define/create a user define custom component
const CustomComponent1 = () => {
  return (
    <view>
      <Text>Your CustomComponent 1</Text>
    </view>
  );
}

const CustomComponent2 = () => {
  return (
    <view>
      <Text>Your CustomComponent 2</Text>
    </view>
  );
}

// Root component .........................................................................
const App = () => {
  return (
    <View style={styles.container}>
      {/*Here we use our custom component*/}
      <CustomComponent1 />
      <CustomComponent2 />
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
