import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/useStorage';
  
import { PasswordItem } from './components/passworditem';

export function Password() {

  const [listPasswords, setListPasswords] = useState([]);
  const focused = useIsFocused();
  const { getItens, removeItens } = useStorage();


useEffect(() => { 
  async function loadPasswords() { 
  const passwords = await getItens("@pass")
  setListPasswords(passwords);
}
loadPasswords();
},
[focused]);

async function handDeletePassword(item) {
  const passwords = await removeItens("@pass", item);
  setListPasswords(passwords);

}


  return (
    <SafeAreaView style={{flex: 1 , backgroundColor: '#fff'}}> 
      <View style={styles.header}></View>
      <View style={styles.header}>
        <Text style={styles.title}>
           Minhas senhas
        </Text>
      </View>

        <View style={styles.content}>
          <FlatList 
          style={{flex: 1, paddingTop:14}}
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={ ({ item }) => <PasswordItem data={item} removePassword = {() => handDeletePassword(item) } />}
         
           />
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
  content: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 14,
    paddingRight: 14,
  },
})


