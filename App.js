
import React , {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Import dei Vari Componenti
import Task from './components/Task';


export default function App() {

  const [task, setTask] = useState();
  const [Tasks, setTasks] = useState([{text: 'Task Test'}]);



  const handleAddTask = () => {
      Keyboard.dismiss();
      setTasks([...Tasks, {text: task}]);
      setTask(null)

    }

  const completeTask = (index) => {
  
    let newTasks = [...Tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);

    }

  return (
    <View style={styles.container}>
      {/* Testo*/}
      <View style={styles.TasksWrapper}>
        <Text style={styles.sectionTitle}>Le Tue Tasks</Text>

        <View style={styles.items}>

          {Tasks.map((item, index) => {
            return (
              /* l'index rappresenta la posizione specifica nel vettore... ed è toranto dal metodo map */
              
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item.text} />
              </TouchableOpacity>
            )
          })}
  

        </View>

        </View>

        {/* Aggiungiamo l'input da tastiera */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios"?'padding':'height'}
          style={styles.writeTaskWrapper}>

            <TextInput style={styles.input} placeholder={'Aggiungi una Tasks'} value={task} onChangeText={text => setTask(text)} />
            <TouchableOpacity onPress= {() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>

          </KeyboardAvoidingView>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
    TasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },

    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30,
    },

    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper : {
      width: 60,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText : {
      fontSize: 20,
    },

});
