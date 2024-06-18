import { View, Text } from "react-native";

export default function Greeting({ name }) {
  return(
  <>
    <View>
      <Text>Hello, {name}</Text>
    </View>
  </>
  )
}
