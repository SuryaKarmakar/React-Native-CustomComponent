# React Native Custom Component

In React Native (and also in React) you can create custom components and use them easily as much as you want in your app. You may give custom styles and values to these components by passing different values in the props of these components.

## Usage :

- Every component name should be start with <b>Capital latter</b> :

```js
const CustomComponent1 = () => {
  return (
    <View>
      <Text>Your CustomComponent 1</Text>
    </View>
  );
};
```

- You can use this component into your app like this :

```js
const App = () => {
  return (
    <View>
      <CustomComponent1 />
    </View>
  );
};
```

<!-- ## Exporting custom components :

Syntax : export default [Component Name];

```js
export default MyComponent;
```

## Importing custom components :

Syntax : import [Component Name] from '[Path of the Component]';

```js
import MyComponent from "./component/MyComponent";
``` -->
