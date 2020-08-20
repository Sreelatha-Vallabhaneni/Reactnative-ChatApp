import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatScreen = () => {
    return(
        <View style={styles.container}>
            <Text>chat screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ChatScreen;