import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';

export default function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        Styles.safeArea,
        { backgroundColor: isDarkMode ? '#000000' : '#ffffff' },
      ]}
    >
      <View style={Styles.container}>
        <Text
          style={[Styles.text, { color: isDarkMode ? '#ffffff' : '#000000' }]}
        >
          AppPro 🚀
        </Text>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: '700',
  },
});
