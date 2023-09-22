import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
  } from "react-native";
  const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 4, paddingVertical: 6 }}>
        <View style={{ position: "relative", backgroundColor: "white", shadowColor: "black", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 }}>
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
            }}
            style={{ width: "100%", height: "90%", objectFit: "cover", borderRadius: 20 }}
          />

          <View style={{ position: "absolute", flexDirection: "row", left: 0, right: 0, top: 5, justifyContent: "space-between", paddingHorizontal: 6 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              style={{ width: 40, height: 40, borderRadius: "50%", alignItems: "center", justifyContent: "center", backgroundColor: "white" }}
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: "50%", alignItems: "center", justifyContent: "center", backgroundColor: "#06B2BE" }}>
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={{ position: "absolute", flexDirection: "row", left: 0, right: 0, bottom: 5, justifyContent: "space-between", paddingHorizontal: 16,paddingVertical:25 }}>
            <View style={{ flexDirection: "row", alignItems: "center", spaceBetween: 2 }}>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#100" }}>
                {data?.price_level}
              </Text>
              <Text style={{ fontSize: 32, fontWeight: "bold", color: "#100" }}>
                {data?.price}
              </Text>
            </View>

            <View style={{ paddingHorizontal: 2, paddingVertical: 8, borderRadius: 4, backgroundColor: "#06B2BE" }}>
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 6 }}>
          <Text style={{ color: "#428288", fontSize: 24, fontWeight: "bold" }}>
            {data?.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text style={{ color: "#8C9EA6", fontSize: 20, fontWeight: "bold" }}>
              {data?.location_string}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          {data?.rating && (
            <View style={{ display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 4, // Add some left margin to create space between elements
          }} >
        
        
        
        
        
       
              <View style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center',borderRadius: 24, backgroundColor: "#FCC" }}>
                <FontAwesome name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text style={{ color: "#515151" }}>{data?.rating}</Text>
                <Text style={{ color: "#515151" }}>Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View style={{ flexDirection: "row", alignItems: "center", spaceBetween: 2 }}>
              <View style={{  width: 48, height: 48, alignItems: 'center', justifyContent: 'center',borderRadius: 24, backgroundColor: "#FCC", }}>
                <MaterialIcons name="attach-money" size={24} color="black" />
              </View>
              <View>
                <Text style={{ color: "#515151" }}>{data?.price_level}</Text>
                <Text style={{ color: "#515151" }}>Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View style={{ flexDirection: "row", alignItems: "center", spaceBetween: 2 }}>
              <View style={{  width: 48, height: 48, alignItems: 'center', justifyContent: 'center',borderRadius: 24, backgroundColor: "#FCC" }}>
                <FontAwesome5 name="map-signs" size={24} color="black" />
              </View>
              <View>
                <Text style={{ color: "#515151", textTransform: "capitalize" }}>
                  {data?.bearing}
                </Text>
                <Text style={{ color: "#515151" }}>Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text style={{ marginTop: 4, letterSpacing: 1, fontSize: 16, fontWeight: "bold", color: "#97A6AF" }}>
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View style={{ flexDirection: "row", gap: 2, alignItems: "center", justifyContent: "flex-start", flexWrap: "wrap", marginTop: 4 }}>
            {data?.cuisine.map(n => (
              <TouchableOpacity
                key={n.key}
                style={{ paddingHorizontal: 2, paddingVertical: 1, borderRadius: 4, backgroundColor: "#0C8" }}
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={{ marginTop: 4, backgroundColor: "#CCC", borderRadius: 20, padding: 10 }}>
          {data?.phone && (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "left" }}>
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text style={{ fontSize: 16 }}>{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View style={{ flexDirection: "row", alignItems: "center",justifyContent: "left" }}>
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text style={{ fontSize: 16 }}>{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text style={{ fontSize: 16 }}>{data?.address}</Text>
            </View>
          )}

          <View style={{ marginTop: 4, borderRadius: 10, backgroundColor: "#06B2BE", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", textTransform: "uppercase", color: "#FFF" }}>
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
