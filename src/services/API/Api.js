export const ApiCustom = async () => {
  try {
    const url = "https://api.escuelajs.co/api/v1/products";
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
