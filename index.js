const container = document.getElementById("container"); //Getting the movie holder element from html

// JavaScript code to apply a GET request
async function fetchMovies() {
    const apiUrl = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches';
  
    try {
      const response = await fetch(apiUrl, {
        method: "GET", // Explicitly specifying the method
      });
  
      // Checking if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parsing the JSON response
      const data = await response.json();
  
      // Logging the result
      console.log("Product Data:", data.data.data);
      products = data.data.data;
      products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product_card');
        card.innerHTML = `
          <h2>Name: ${product.title}</h2>
          <p>Desc: ${product.description}</p>
          <p>Price :${product.price}</p>
        `;
        container.appendChild(card);
      });
    } catch (error) {
      // Handling errors
      console.error("Error fetching movies:", error.message);
    }
}
  
// Call the function
fetchMovies();