import { Account } from 'appwrite';
import React, { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import client from '../../services/appwrite';

const account = new Account(client);

useEffect(() => {
  // This will trigger a harmless API call to Appwrite on screen load
  account.get().catch(() => {});
}, []);

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await account.createSession(email, password);
      // Immediately try to get the user to verify session
      const user = await account.get();
      console.log('User:', user);
      Alert.alert('Success', 'Logged in successfully!');
    } catch (err: any) {
      setError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center p-4 bg-white">
      <Text className="text-2xl font-bold mb-4 text-center">Login</Text>
      <TextInput
        className="border-1 border-gray-300 rounded-md p-2 mb-4 text-lg"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        className="border-1 border-gray-300 rounded-md p-2 mb-4 text-lg"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text className="text-red-500 mb-4 text-center">{error}</Text> : null}
      <Button title={loading ? 'Logging in...' : 'Login'} onPress={handleLogin} disabled={loading} />
    </View>
  );
};

export default LoginScreen; 