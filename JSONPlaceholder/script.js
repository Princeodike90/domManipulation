// Function to fetch data from an endpoint
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

//To dispaly data on the frontend
function displayData(data) {
  const app = document.getElementById('app');
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h2>${item.title || item.name}</h2>
      <p>${item.body || item.email}</p>
    `;
    app.appendChild(card);
  });
}

// Fetch data from three different endpoints and display it
async function fetchDataAndDisplay() {
  try {
    const posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    const users = await fetchData('https://jsonplaceholder.typicode.com/users');
    const comments = await fetchData('https://jsonplaceholder.typicode.com/comments');

    displayData(posts);
    displayData(users);
    displayData(comments);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// function to fetch data and display it
fetchDataAndDisplay();