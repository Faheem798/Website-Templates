// URL of the API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data on the page
async function renderData() {
    const dataContainer = document.getElementById('data-container');
    const data = await fetchData();

    if (data) {
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post-container');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr>
            `;
            dataContainer.appendChild(postElement);
        });
    }
}

// Call the renderData function when the page loads
window.onload = renderData;
