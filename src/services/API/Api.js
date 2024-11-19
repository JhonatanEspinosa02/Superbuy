export const ApiCustom = async () => {
  try {
    const url = "https://api.escuelajs.co/api/v1/products";
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
    console.log("There are here an error");
  }
};
