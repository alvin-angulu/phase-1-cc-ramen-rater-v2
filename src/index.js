// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  const detailImage = document.querySelector('.detail-image');
  const name = document.querySelector('.name');
  const restaurant = document.querySelector('.restaurant');
  const ratingDisplay = document.getElementById('rating-display');
  const commentDisplay = document.getElementById('comment-display');

  detailImage.src = ramen.image;
  detailImage.alt = `Image of ${ramen.name}`;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = `${ramen.rating} / 10`;
  commentDisplay.textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newRamen = {
      name: document.getElementById('new-name').value,
      restaurant: document.getElementById('new-restaurant').value,
      image: document.getElementById('new-image').value,
      rating: parseInt(document.getElementById('new-rating').value, 10),
      comment: document.getElementById('new-comment').value
    };

    // Add new ramen to the menu
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = `Image of ${newRamen.name}`;
    img.style.cursor = 'pointer';
    img.onclick = () => handleClick(newRamen);
    document.getElementById('ramen-menu').appendChild(img);

    form.reset(); // Reset form fields after submission
  });
}

const displayRamens = () => {
  // Add code
  const menu = d.ocument.getElementById('ramen-menu');
  fetch("http://localhost:3000/ramens") 
    .then(response => response.json())
    .then(data => {
      menu.innerHTML = ''; // Clear existing entries
      data.ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = `Image of ${ramen.name}`;
        img.style.cursor = 'pointer'; // Adds a pointer cursor on hover
        img.onclick = () => handleClick(ramen);
        menu.appendChild(img);
      });
    });

};

const main = () => {
  // Invoke displayRamens here
  displayRamens();
  // Invoke addSubmitListener here
  addSubmitListener();
}

main()



// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
