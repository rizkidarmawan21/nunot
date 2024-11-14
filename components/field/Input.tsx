import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  secure?: boolean;
  error?: boolean;
};

export default function Input({
  placeholder,
  value,
  onChange,
  secure,
  error,
}: Props) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={{
          borderWidth: 1,
          paddingVertical: 14,
          paddingHorizontal: 20,
          borderColor: error ? Colors.global.red : Colors.global.grey,
          borderRadius: 50,
          fontFamily: "PoppinsMedium",
          fontSize: 14,
          backgroundColor: "#fff",
          color: Colors.global.title,
          flex: 1,
        }}
        placeholder={placeholder}
        placeholderTextColor={Colors.global.grey}
        keyboardType="default"
        value={value}
        onChangeText={onChange}
        secureTextEntry={secure && !isPasswordVisible}
      />
      {secure && (
        <TouchableOpacity
          style={styles.visibilityIcon}
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <FontAwesome
            name={isPasswordVisible ? "eye" : "eye-slash"}
            size={22}
            color={Colors.global.grey}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 18,
  },
  required: {
    fontSize: 25,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  visibilityIcon: {
    position: "absolute",
    right: 20,
  },
});
