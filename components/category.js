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
          source={require('../assets/burger.png')}
        />
        <Text style={styles.buttonText}>Burger</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/roast-chicken.png')}
        />
        <Text style={styles.buttonText}>Chicken</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/fried-egg.png')}
        />
        <Text style={styles.buttonText}>Breakfast</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/salad.png')}
        />
        <Text style={styles.buttonText}>Salad</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/sushi.png')}
        />
        <Text style={styles.buttonText}>Sushi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/taco.png')}
        />
        <Text style={styles.buttonText}>Taco</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/cupcake.png')}
        />
        <Text style={styles.buttonText}>Dessert</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/fish.png')}
        />
        <Text style={styles.buttonText}>Seafood</Text>
      </TouchableOpacity>

      <TouchableOpacity
        //nPress={handleLogin}
        style={styles.outline}
      >
        <Image
          style={styles.logo}
          source={require('../assets/sandwich.png')}
        />
        <Text style={styles.buttonText}>Sandwich</Text>
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