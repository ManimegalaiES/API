// Selecting DOM elements
const viewUserButton = document.getElementById('viewUser');
const userDetails = document.getElementById('userDetails');
const dogSection = document.getElementById('dogSection');
const yesDogButton = document.getElementById('yesDog');
const dogImage = document.getElementById('dogImage');
const getAdviceButton = document.getElementById('getAdvice');
const adviceText = document.getElementById('adviceText');

// Fetch Random User Data
async function fetchRandomUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    userDetails.innerHTML = `
      <h2>User Details</h2>
      <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    `;
    dogSection.style.display = 'block';
  } catch (error) {
    alert('Error fetching user data. Please try again later.');
  }
}

// Fetch Random Dog Image
async function fetchRandomDog() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    dogImage.src = data.message;
    dogImage.style.display = 'block';
    getAdviceButton.style.display = 'inline-block';
  } catch (error) {
    alert('Error fetching dog image. Please try again later.');
  }
}

// Fetch Random Advice
async function fetchRandomAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    adviceText.innerText = data.slip.advice;
    adviceText.style.display = 'block';
  } catch (error) {
    alert('Error fetching advice. Please try again later.');
  }
}

// Event Listeners
viewUserButton.addEventListener('click', fetchRandomUser);
yesDogButton.addEventListener('click', fetchRandomDog);
getAdviceButton.addEventListener('click', fetchRandomAdvice);
