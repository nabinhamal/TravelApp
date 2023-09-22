import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCartContainer = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#fff',
        width: 182,
        marginTop: 2,
      }}
    >
      <Image
        source={{ uri: imageSrc }}
        style={{ width: '100%', height: 160, borderRadius: 8 }}
      />

      {title && (
        <>
          <Text style={{ color: '#428288', fontSize: 18, fontWeight: 'bold' }}>
            {title.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            <Text style={{ color: '#428288', fontSize: 14, fontWeight: 'bold' }}>
              {location.length > 18 ? `${location.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ItemCartContainer;
