import AsyncStorage from "@react-native-async-storage/async-storage";

export function useStorage() {
  // Função para buscas os itens no AsyncStorage
  const getItens = async (key) => {
    try {
      const password = await AsyncStorage.getItem(key);
      if (itens) {
        return JSON.parse(password) || [];
      }
      return [];
    } catch (error) {
      console.log("Erro ao buscar", error);
      return [];
    }
  };
  // Função para salvar os itens no AsyncStorage

  const saveItens = async (key, value) => {
    try {
      let password = await getItens(key);
      password.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(password));
    } catch (error) {
      console.log("Erro ao salvar", error);
    }
  };
  // Função para remover os itens no AsyncStorage

  const removeItens = async (key, item) => {
    try {
      let password = await getItens(key);

      let mypassword = password.filter((password) => {
        return password !== item;
      });

      await AsyncStorage.setItem(key, JSON.stringify(mypassword));

      return mypassword;
    } catch (error) {
      console.log("Erro ao remover", error);
    }
  };

  return { getItens, saveItens, removeItens };
}

export default useStorage;
