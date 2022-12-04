const fetchData = async (url, option) => {
  const response = await fetch(url, option);

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default fetchData;
