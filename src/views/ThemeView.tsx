// ThemeView.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { LightTheme, DarkTheme } from '../constants/themes';

const ThemeView = () => {
  const { theme } = useTheme();
  const currentTheme = theme === 'light' ? LightTheme : DarkTheme;

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <Text style={[styles.text, { color: currentTheme.text }]}>
        Current System Theme: {theme.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ThemeView;
