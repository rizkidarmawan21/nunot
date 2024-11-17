import { Keyboard, StyleSheet } from "react-native";
import { PropsWithChildren, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import * as TextInputState from "react-native/Libraries/Components/TextInput/TextInputState"; // Manual import

type Props = PropsWithChildren<{}>;

export default function Container({ children, ...props }: Props) {
  const isTargetTextInput = useRef(false);
  const tap = Gesture.Tap()
    // Dismiss on tap end to avoid being triggered when scrolling
    .onEnd(() => {
      if (!isTargetTextInput.current) {
        Keyboard.dismiss();
      }
    })
    .runOnJS(true);
  /*
        Container is a component that wraps the entire app. 
        It is responsible for setting up the theme and the navigation.
    */
  return (
    <GestureDetector gesture={tap}>
      <SafeAreaView
        style={styles.container}
        onStartShouldSetResponderCapture={(e) => {
          // Allow to avoid keyboard flickering when clicking on a TextInput
          isTargetTextInput.current = TextInputState.isTextInput(e.target);

          return false;
        }}
        accessible={false}
        {...props}
      >
        {children}
      </SafeAreaView>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
