const food = [
  {
    foodName: "Pique Macho",
    type: "lunch",
    like: 0,
    imageUrl:
    "https://trips-southamerica.com/webold/wp-content/uploads/pique-macho.jpg"
  },
  {
    foodName: "Majadito",
    type: "lunch",
    like: 0,
    imageUrl:
    "https://trips-southamerica.com/webold/wp-content/uploads/majadito-1024x555.jpg"
  },
  {
    foodName: "chancho a la cruz",
    type: "lunch",
    like: 0,
    imageUrl:
    "https://trips-southamerica.com/webold/wp-content/uploads/chancho-en-cruz-960x720.jpg"
  },
  {
    foodName: "sajta",
    type: "lunch",
    like: 0,
    imageUrl:
    "https://pagestudio.s3.theshoppad.net/bolivianita-de/b542b9847ad42312091ff20293110d7a.jpg"
  
  },
  {
    foodName: "Plato Paceño",
    type: "lunch",
    like: 0,
    imageUrl:
    "https://pagestudio.s3.theshoppad.net/bolivianita-de/b4dbf31ac4b5305b6317e3b0d384d869.jpg"
  
  },
  {
    foodName: "Fricase",
    type: "lunch",
    like: 0,
    imageUrl:
    "https://pagestudio.s3.theshoppad.net/bolivianita-de/cee9e1dd0a94039e21eb706a663a6583.png"
  
  },
  {
    foodName: "Silpancho",
    type: "lunch",
    like: 0,
    imageUrl:
    "https://trips-southamerica.com/webold/wp-content/uploads/silpancho-boliviano-1024x555.jpg"
  
  },


];

function createfoodCard(foodItem) {
  return `
    <article class="food-card">
      <h3>${foodItem.foodName}</h3>
      <p class="food-type">${foodItem.type}</p>
      <img src="${foodItem.imageUrl}" alt="${foodItem.foodName}" loading="lazy">
      <button class="like-button" data-food="${foodItem.foodName}">
        Like (${foodItem.like})
      </button>
    </article>
  `;
}

function displayFood(foodList) {
  const foodContainer = document.getElementById('food-container');
  foodContainer.innerHTML = foodList.map(createfoodCard).join('');
  

  document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', handleLike);
  });
}

function handleLike(event) {
  const foodName = event.target.dataset.food;
  const foodItem = food.find(item => item.foodName === foodName);
  
  if (foodItem) {
    foodItem.like++;
    event.target.textContent = `Like (${foodItem.like})`;
  }
}

function filterFood(type) {
  if (type === 'all') {
    displayFood(food);
  } else {
    const filtered = food.filter(item => item.type === type);
    displayFood(filtered);
  }
  

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}





document.addEventListener('DOMContentLoaded', () => {

  const main = document.querySelector('main');
  const filterDiv = document.createElement('div');
  filterDiv.className = 'filter-container';
  filterDiv.innerHTML = `
    <button class="filter-btn active" onclick="filterFood('all')">All</button>
    <button class="filter-btn" onclick="filterFood('lunch')">Lunch</button>
    <button class="filter-btn" onclick="filterFood('dessert')">Dessert</button>
  `;
  main.insertBefore(filterDiv, main.firstChild);
  

  displayFood(food);
});