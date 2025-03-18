import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage';
 
export function Password() {

  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItens } = useStorage();


useEffect(() => { 
  async function loadPasswords() { 
  const passwords = await getItens("@pass")
  console.log(passwords);
}
loadPasswords();
},
[focused]);


  return (

      <SafeAreaView style={{flex: 1 , backgroundColor: '#fff'}}> 
      <View style={styles.header}>
        <Text style={styles.title}>
           Minhas senhas
        </Text>
      </View>
     </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  header: {
    paddingTop: 58,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#392de9',
  },
  title: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    fontWeight: 'bold',
  },

})


