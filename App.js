// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = enteredText => setEnteredGoal(enteredText);

  const addGoalHandler = () => setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);

  return (
    <View style={styles.screen} >
      <View style={styles.inputConteiner}>
        <TextInput value={enteredGoal} placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        <ScrollView>
          {courseGoals.map((goal, index) => (
            <View style={styles.listItem} key={index}>
              <Text >{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputConteiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
