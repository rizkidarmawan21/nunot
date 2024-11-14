import { Colors } from "@/constants/Colors";
import { Pressable, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function Notification() {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.5, {
        duration: 800,
        easing: Easing.out(Easing.ease),
      }),
      -1, // -1 untuk repeat tanpa batas
      true // reverse setelah selesai
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: 1 - (scale.value - 1),
    };
  });

  return (
    <Pressable
      style={{
        width: 39,
        height: 39,
        borderRadius: 50,
        backgroundColor: `${Colors.global.mainSecondary}`,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          position: "relative",
        }}
      >
        <Ionicons
          name="notifications-outline"
          size={25}
          color={Colors.global.main}
        />
        <Animated.View
          style={[
            {
              width: 8.5,
              height: 8.5,
              borderRadius: 50,
              backgroundColor: `${Colors.global.red}`,
              position: "absolute",
              right: 3,
              top: 2,
              zIndex: 1,
            },
          ]}
        ></Animated.View>
      </View>
    </Pressable>
  );
}
