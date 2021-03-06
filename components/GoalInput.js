import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => setEnteredGoal(enteredText);

    const addGoalHandler = () => {
        props.addData(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputConteiner}>
                <TextInput value={enteredGoal}
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button style={styles.button} title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                    <Button style={styles.button} title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>

            </View>
        </Modal>

    );
}
const styles = StyleSheet.create({
    inputConteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderBottomColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%"
    },
    button: {
        width: "40%"
    }
});

export default GoalInput;