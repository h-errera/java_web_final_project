document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/flower')
    .then(response => response.json())
    .then(data => {
      const dataDisplay = document.getElementById('data-display');
      // Clear the existing content of the data-display element
      dataDisplay.innerHTML = '';

      // Loop through the retrieved data and create HTML elements to display it
      data.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item;
        dataDisplay.appendChild(itemElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

const form = document.getElementById('flower-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  const color = document.getElementById('color-input').value;
  const species = document.getElementById('species-input').value;

  const flowerData = {
    color: color,
    species: species
  };

  fetch('http://localhost:8080/flower', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(flowerData)
  })
    .then(response => response.json())
    .then(data => {
      // Code to handle the response from the backend
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// Attach event listener to the update button
document.getElementById("updateButton").addEventListener("click", async () => {
  // Retrieve the updated data from the input fields
  const updatedColor = document.getElementById("colorInput").value;
  const updatedSpecies = document.getElementById("speciesInput").value;

  // Create the object or JSON payload containing the updated data
  const updatedFlower = {
    color: updatedColor,
    species: updatedSpecies,
  };

  // POST request
  const form = document.getElementById('flower-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const color = document.getElementById('color-input').value;
    const species = document.getElementById('species-input').value;

    const flowerData = {
      color: color,
      species: species
    };

    fetch('http://localhost:8080/flower', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flowerData)
    })
      .then(response => response.json())
      .then(data => {
        // Code to handle the response from the backend
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });

  try {
    // Send PUT request to the backend
    const response = await fetch("/api/flowers/{flowerId}", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFlower),
    });

    // Handle the response from the backend
    if (response.ok) {
      // Update the displayed data on the webpage or show a success message
      console.log("Flower updated successfully!");
    } else {
      console.error("Failed to update flower");
    }
  } catch (error) {
    console.error("Error occurred during update:", error);
  }
});

// Attach event listener to the get button
document.getElementById("getButton").addEventListener("click", async () => {
  try {
    // Send GET request to the backend
    const response = await fetch("/api/flowers");

    // Handle the response from the backend
    if (response.ok) {
      const flowers = await response.json();

      // Process the retrieved data and update the webpage
      flowers.forEach((flower) => {
        const flowerElement = document.createElement("div");
        flowerElement.textContent = `Color: ${flower.color}, Species: ${flower.species}`;
        document.getElementById("flowersContainer").appendChild(flowerElement);
      });
    } else {
      console.error("Failed to retrieve flowers");
    }
  } catch (error) {
    console.error("Error occurred during get:", error);
  }
});
