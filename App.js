import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Segment from 'expo-analytics-segment';

Segment.initialize({ androidWriteKey: 'xZ7Bd9ZeC3VfIcQ2FzRF6alzsClR4SjG', iosWriteKey: '5xlLyxwJecXjOxhlHjmq8GRHbRcpeYUm' })
Segment.track('Test Event')
export default function App() {
  Segment.screen()
  return (
    <View style={styles.container}>
      <Text>React Native Segment Source Test</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
