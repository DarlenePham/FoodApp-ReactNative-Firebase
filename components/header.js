import React from "react";
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, TextInput, Image, View, TouchableOpacity, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const HeaderBar = () => {
  const navigation = useNavigation()

  const handleProfile = () => {
    navigation.navigate("Profile")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}
      /*style={
        clicked
          ? styles.searchBar__clicked
          : styles.searchBar__unclicked
      }*/
      >
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="What are you craving?"
        //value={searchPhrase}
        //onChangeText={setSearchPhrase}
        /* onFocus={() => {
          setClicked(true);
        }} */
        />
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginRight: 1 }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {/*clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )*/}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {/*clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
          )*/}
      <TouchableOpacity onPress={handleProfile}>
        <Image
          style={styles.logo}
          source={require('../assets/pro5.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
export default HeaderBar;

// styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    marginLeft: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },
  logo: {
    height: 60,
    width: 60,
    margin: 10
  },
  header: {
    padding: 10,
    flexDirection: "row",
    width: "98%",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "90%",
  },
});