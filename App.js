import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native-svg";
import StarIcon from "./assets/Star";
import Cours from './screens/Cours';
import Corriges from "./screens/Corriges";
import OneStar from "./screens/OneStar";
import TwoStar from "./screens/TwoStar";
import ThreeStar from "./screens/ThreeStar";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
        <Text style={styles.name}>Algorithme</Text>
        <View style={styles.choix}>
            <TouchableOpacity style={styles.element} 
            onPress={() => navigation.navigate("Cours")}>
              <View style={styles.contenu_element}><Text style={styles.content_element}>Cours</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.element}>
              <View style={styles.contenu_element}><Text style={styles.content_element}>corriges</Text></View>
            </TouchableOpacity>
        </View>
        <Text style={styles.name}>Exercices</Text>
          <View style={styles.choix}>
              <TouchableOpacity style={styles.element}>
                <View style={styles.stars}><StarIcon/></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.element}>
                <View style={styles.stars}><StarIcon/><StarIcon/></View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.element}>
                <View style={styles.stars}><StarIcon/><StarIcon/><StarIcon/></View>
              </TouchableOpacity>
          </View>
  </View>
  ); 
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Cours" component={Cours}/>
      <Stack.Screen name="Corriges" component={Corriges}/>
      <Stack.Screen name="OneStar" component={OneStar}/>
      <Stack.Screen name="TwoStar" component={TwoStar}/>
      <Stack.Screen name="ThreeStar" component={ThreeStar}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
  <></>
  <View></View>
  <TouchableOpacity></TouchableOpacity>
  <Text></Text>
  <NavigationContainer></NavigationContainer>
  <Stack.Navigator></Stack.Navigator>
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11b6abff',
  },
  name: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 25,
    fontFamily: "calibri",
    fontWeight: 800,
  },
  choix: {
    width: "100%",
    boxSizing: "border-box",
    gap: 30,
    marginTop: 50,
    marginLeft: 15,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  element: {
    backgroundColor: "#fff",
    width: "40%",
    height: 80,
    borderRadius: 50,
  }, 
  contenu_element: {
    margin: "auto"
  },
  content_element: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "monospace",
  },
  stars: {
    margin: "auto",
    flexDirection: "row"
  }
});
