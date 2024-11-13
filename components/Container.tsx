import { StyleSheet } from "react-native";
import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = PropsWithChildren<{}>;

export default function Container({ children, ...props }: Props) {
    /*
        Container is a component that wraps the entire app. 
        It is responsible for setting up the theme and the navigation.
    */
    return (
        <SafeAreaView style={styles.container} {...props}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});