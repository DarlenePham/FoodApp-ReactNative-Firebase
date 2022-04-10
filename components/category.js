import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, Keyboard, Button } from "react-native";

const Category = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
        <Text style={styles.buttonText}>Food Type</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
        <Text style={styles.buttonText}>Food Type</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
        <Text style={styles.buttonText}>Food Type</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
        <Text style={styles.buttonText}>Food Type</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
        <Text style={styles.buttonText}>Food Type</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
        <Text style={styles.buttonText}>Food Type</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
        <Text style={styles.buttonText}>Food Type</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
        <Text style={styles.buttonText}>Food Type</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
        <Text style={styles.buttonText}>Food Type</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  outline: {
    width: 90,
    height: 90,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25
  },
  logo: {
    height: 60,
    width: 60,
    padding: 5
  },
  buttonText: {
    color: '#191919',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 13,
    padding: 5
  },
})