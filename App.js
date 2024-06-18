import {
  ScrollView,
  Button,
  Image,
  Text,
  View,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { useState } from "react";
import Greeting from "./components/Greeting";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
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
          <Button title="Open Modal" onPress={handleModalOpen} />
          <Modal
            visible={isModalVisible}
            onRequestClose={handleModalClose}
            animationType="slide"
            presentationStyle="pageSheet"
          >
            <ScrollView
              style={{ flex: 1, padding: 60, backgroundColor: "lightblue" }}
            >
              <Text>This is a Modal</Text>
              <Button title="Close Modal" onPress={handleModalClose} />
              <Button
                title="Alert"
                onPress={() =>
                  Alert.alert("Invalid Data", "Secondary Line", [
                    {
                      text: "Cancel",
                      onPress: () => {console.log("Cancel Pressed")},
                    },
                    {
                      text: "OK",
                      onPress: () => {console.log("OK Pressed")},
                    },
                  ])
                }
              />
            </ScrollView>
          </Modal>
          <Text>
            {"\n"}
          </Text>
          <View>
            <Greeting name="Pass Any Prop Here"/>
          </View>
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
