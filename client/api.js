import apiKey from '../apiKey'

export const fetchData = async () => {
  try {
    const response = await fetch(apiKey);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};