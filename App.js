import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [goal, setGoal] = useState([]);
  const [text, setText] = useState("");

  const goalInputHandler = (e) => {
    setInputText(e);
  };

  const addGoalHandler = () => {
    setGoal((currentGoal) => [...currentGoal, inputText]);
    setText(" ");
  };

  const goals = goal.map((item, index) => {
    return <Text key={index}>{item}</Text>;
  });

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContaier}>
        <TextInput
          value={text}
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals...</Text>
        <View>{goals}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    flexDirection: "column",
  },
  inputContaier: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
