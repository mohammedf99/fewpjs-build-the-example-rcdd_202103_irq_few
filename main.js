// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hideErrorMsg = () => {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");
}

hideErrorMsg();

const like = node => {
  mimicServerCall().then(() => {
    node.innerText = FULL_HEART;
    node.classList.add("activated-heart").catch(err => {
      hideErrorMsg();
      window.setTimeout(hideErrorMsg, 3000);
    });
  })
}

window.addEventListener("click", e => {
  if(e.target.textContent === EMPTY_HEART) like(e.target);
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
