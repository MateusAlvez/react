import { ExpoRoot } from 'expo-router';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Slider  from '@react-native-community/slider'

export default function App() {
  return (
   
      <View style={styles.container}>
        <Image source={require("../src/assets/logo.png")} style={styles.logo}  
        />

        <Text style={styles.title}>20 Caracteres</Text>

        <View  style={styles.area}>
          <Slider
            style={{height: 50}}
            minimumValue={6}
            maximumValue={20}
            minimumTrackTintColor="#00f"
            maximumTrackTintColor="#f00"
            thumbTintColor='#329de9'
          />
        </View>

        <TouchableOpacity style={styles.button}>  
          <Text style={styles.buttonText}>
              Gerar senha.
          </Text>
        </TouchableOpacity>

      </View>
  
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  logo: {

    marginBottom: 60,
  },
  area: {
    marginTop : 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor:"#392de9",
    width: "80%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,  
    marginBottom: 18,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',   
  },
});