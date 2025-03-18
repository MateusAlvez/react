import * as Clipboard from "expo-clipboard";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useStorage from "../../hooks/useStorage";

export function ModalPassword({ password, handleClose }) {
  const { saveItens} = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password);
    await saveItens("@pass", password);

    alert("Senha copiada com sucesso!");
    handleClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada.</Text>

        <Pressable
          style={styles.innerPassword}
          onLongPress={handleCopyPassword}
        >
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(24,24,24,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "85%",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },

  innerPassword: {
    backgroundColor: "#0e0e0e",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: "90%",
  },

  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 8,
    alignContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
  },
  buttonSave: {
    backgroundColor: "#392DE9",
    marginLeft: 10,
    borderRadius: 8,
  },
  buttonSaveText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
