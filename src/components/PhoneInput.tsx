import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CountryCode from '../constants/countryCode.json';

interface Country {
  name: string;
  dial_code: string;
  emoji: string;
  code: string;
}

const CountrySelector: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(
    CountryCode[0],
  );
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSelect = (item: Country) => {
    setSelectedCountry(item);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.phoneContainer}>
        <TouchableOpacity
          style={styles.dialCodeInput}
          onPress={() => setModalVisible(true)}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{selectedCountry.emoji}</Text>
            <Text>{selectedCountry.dial_code}</Text>
          </View>
        </TouchableOpacity>

        <TextInput
          style={styles.phoneInput}
          placeholder="Enter phone number"
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Modal to select country */}
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={CountryCode}
            keyExtractor={item => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.countryItem}
                onPress={() => handleSelect(item)}
              >
                <Text>{`${item.emoji} ${item.name} (${item.dial_code})`}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ color: 'red' }}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default CountrySelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dialCodeInput: {
    width: '30%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
  },
  phoneInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#dedede',
    padding: 12,
    borderRadius: 8,
  },
  countryItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  closeBtn: {
    backgroundColor: '#3E24CF',
    padding: 16,
    alignItems: 'center',
  },
});
