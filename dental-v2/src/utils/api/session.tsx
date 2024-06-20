const getAllUsers=  async () => {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
}

export { getAllUsers };