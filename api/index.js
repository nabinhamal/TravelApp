import axios from "axios"

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
            bl_latitude: bl_lat ? bl_lat : "85.4278",
            tr_latitude: tr_lat ? tr_lat : "27.7172",
            bl_longitude: bl_lng ? bl_lng : "85.3240",
            tr_longitude: tr_lng ? tr_lng : "27.6710",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": "6916dd7019mshc66b018052cf872p121693jsn8b91272d4e94",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
