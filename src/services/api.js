const getAPI = async () => {
  const endPoint = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(`${endPoint}`);
  const responseJson = await response.json();
  return responseJson;
};

export default getAPI;
