import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity
      style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 8 ,marginTop: 10,marginLeft:10 }}
      onPress={handlePress}
    >
      <View
        style={{
          width: 80,
          height: 80,
          padding:0,
          shadowColor: '#000',
          shadowOffset: { width:0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 7,
          borderRadius: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '9px',
          backgroundColor: type === title.toLowerCase() ? '#E5E7EB' : ''
        }}
      > 
        <Image source={imageSrc} style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }} />
      </View>
      <Text style={{ color: '#00BCC9', fontSize: 20, fontWeight: '600' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
