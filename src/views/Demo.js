import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

const ChatBot = () => {
  const validServices = [
    'Haircut',
    'Facial',
    'Manicure',
    'Pedicure',
    'Hair Color',
  ];

  const [messages, setMessages] = useState([
    {
      id: '1',
      text: '👋 Welcome to XYZ Salon!',
      sender: 'bot',
    },
    {
      id: '2',
      text:
        '💇‍♀️ Our services include:\n' +
        '- Haircut\n' +
        '- Facial\n' +
        '- Manicure\n' +
        '- Pedicure\n' +
        '- Hair Color',
      sender: 'bot',
    },
    {
      id: '3',
      text: 'What service would you like to book?',
      sender: 'bot',
    },
  ]);

  const [step, setStep] = useState(1);
  const [input, setInput] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };
    const updatedMsgs = [...messages, userMsg];

    if (step === 1) {
      const trimmedInput = input.trim();
      if (!validServices.includes(trimmedInput)) {
        setMessages([
          ...updatedMsgs,
          {
            id: Date.now() + 'a',
            text:
              '❗ Please select a valid service from the list:\n' +
              '- Haircut\n' +
              '- Facial\n' +
              '- Manicure\n' +
              '- Pedicure\n' +
              '- Hair Color',
            sender: 'bot',
          },
        ]);
        setInput('');
        return;
      }

      setSelectedService(trimmedInput);
      setMessages([
        ...updatedMsgs,
        {
          id: Date.now() + 'b',
          text: `Great! Please choose a time slot:\n- 10:00 AM\n- 2:00 PM\n- 5:00 PM`,
          sender: 'bot',
        },
      ]);
      setStep(2);
    } else if (step === 2) {
      const trimmedTime = input.trim();
      setSelectedTime(trimmedTime);
      setMessages([
        ...updatedMsgs,
        {
          id: Date.now() + 'c',
          text: `✅ Booking confirmed for ${selectedService} at ${trimmedTime}. Thank you!`,
          sender: 'bot',
        },
      ]);
      setStep(3);
    } else {
      setMessages([
        ...updatedMsgs,
        {
          id: Date.now() + 'd',
          text: `ℹ️ You already have a booking. To restart, refresh the screen.`,
          sender: 'bot',
        },
      ]);
    }

    setInput('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <Text style={item.sender === 'user' ? styles.user : styles.bot}>
            {item.text}
          </Text>
        )}
        keyExtractor={item => item.id}
      />

      {step < 3 && (
        <>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type your response..."
          />
          <Button title="Send" onPress={handleSend} />
        </>
      )}

      {(selectedService || selectedTime) && (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>📋 Booking Summary:</Text>
          {selectedService ? (
            <Text style={styles.summaryText}>Service: {selectedService}</Text>
          ) : null}
          {selectedTime ? (
            <Text style={styles.summaryText}>Time: {selectedTime}</Text>
          ) : null}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 26, padding: 16 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  user: {
    alignSelf: 'flex-end',
    backgroundColor: '#CFFFCF',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  bot: {
    alignSelf: 'flex-start',
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  summaryContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  summaryTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  summaryText: {
    fontSize: 14,
    marginBottom: 3,
  },
});

export default ChatBot;
