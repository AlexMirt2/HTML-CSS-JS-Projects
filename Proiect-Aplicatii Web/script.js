let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function randomValues() {
    anime({
      targets: '.square, .circle, .triangle',
      translateX: function() {
        return anime.random(-500, 500);
      },
          translateY: function() {
        return anime.random(-300, 300);
      },
          rotate: function() {
              return anime.random(0, 360);
          },
          scale: function() {
              return anime.random(.2, 2);
          },
      duration: 3000,
          easing: 'easeInOutQuad',
      complete: randomValues,
      });
  }
  
  randomValues();


  const submitButton = document.getElementById('submit');
const userList = document.getElementById('user-list');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    if (name && email && age){
    const userInfo = document.createElement('li');
    userInfo.textContent = `Name: ${name}, Email: ${email}, Age: ${age}`;
    userList.appendChild(userInfo);

    // Clear input fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    }else {
        alert('Please fill in all fields before submitting');
    }
});
