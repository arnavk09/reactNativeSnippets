import {
  ScrollView,
  Button,
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
} from "react-native";

export default function App() {
  const handleButtonPress = () => {
    console.log("Pressed");
  };
  const handleImagePress = () => {
    console.log(" onPress Triggered");
    //can see that it isn't triggered on a long press!
  };
  const handleImageLongPress = () => {
    console.log("Long Press detected on Image");
  };
  const handleImageOnPressIn = () => {
    console.log("onPressIn Triggered");
  };
  const handleImageOnPressOut = () => {
    console.log("onPressOut Triggered");
  };

  return (
    <>
    <ScrollView>
      <View style={{ padding: 90, flex: 1, backgroundColor: "plum" }}>
          <Text style={{ marginLeft: 80 }}>Button:</Text>
          <Text>
            {"\n"}
            {"\n"}
          </Text>
          <Button title="Press" onPress={handleButtonPress} />
          <Text>
            {"\n"}
            {"\n"}
          </Text>
          <Text>
            I will paste a big and unformatted, ugly image now to check out the
            scrollable function:
          </Text>
          <Text>
            {"\n"}
            {"\n"}
          </Text>
          <Pressable
            onPress={handleImagePress}
            onLongPress={handleImageLongPress}
            onPressIn={handleImageOnPressIn}
            onPressOut={handleImageOnPressOut}
          >
            <Image
              source={{
                uri: "https://www.apple.com/v/iphone-se/k/images/overview/display/retina_hd_1__bbscnm8poyea_large_2x.jpg",
              }}
              style={{ width: 800, height: 800 }}
            />
          </Pressable>
      </View> 
    </ScrollView>
    </>
  );
}
