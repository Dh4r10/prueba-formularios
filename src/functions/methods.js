import axios from "axios";

export const postAxios = async (url, data, headers) => {
  try {
    const response = await axios.post(url, data, { headers });
    console.log("Proceso exitoso:", response.data);
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
  }
};

export const getAxios = async (url, setData, headers) => {
  try {
    const response = await axios.get(url, { headers });
    // console.log("Proceso exitoso:", response.data);
    setData(response.data);
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
  }
};

export const putAxios = async (url, data, headers) => {
  try {
    const response = await axios.put(url, data, { headers });
    console.log("Proceso exitoso:", response.data);
  } catch (error) {
    console.error("Error al hacer la solicitud:", error);
  }
};
