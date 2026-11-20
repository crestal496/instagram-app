import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>
      <Text style={styles.subtitle}>Log in to continue</Text>

      <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </View>

      <Text style={styles.footer}>
        Don't have an account? <Text style={styles.link}>Register</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', padding: 28 },
  logo: { fontSize: 40, fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center' },
  subtitle: { textAlign: 'center', color: '#777', marginBottom: 30, marginTop: 6 },
  input: {
    borderWidth: 1, borderColor: '#ddd', backgroundColor: '#fafafa',
    borderRadius: 10, padding: 14, marginBottom: 12,
  },
  button: { backgroundColor: '#8B6FD6', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  footer: { textAlign: 'center', marginTop: 24, color: '#555' },
  link: { color: '#8B6FD6', fontWeight: 'bold' },
});