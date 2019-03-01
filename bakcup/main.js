const catagoryFilterList = document.querySelectorAll(".image-btn");
const contentFilterList = document.querySelectorAll(".content-btn");
const allButtonSelectors = document.querySelectorAll(".select-btn");
const thumbnailClasses = document.querySelectorAll(".thumbnail");
let currentMainDisplay = document.getElementById("image-housing");
let activeButton;
let startArray = [];
let endArray = [];

// Filter img by Catagory buttons
catagoryFilterList.forEach(button => {
  button.addEventListener("click", () => {
    let startArray = [];
    let endArray = [];
    thumbnailClasses.forEach(img => {
      startArray.push(img.getBoundingClientRect());
    });
    let selectFilter = button.id.split("-")[0];
    thumbnailClasses.forEach(img => {
      let imgStyle = img.style;
      if (!img.classList.contains(selectFilter)) {
        imgStyle.display="none"
      
      } else {
        imgStyle.display="block"
      }
   
    });



  });
});

// Filter Main display by button push
allButtonSelectors.forEach(function(button) {
  button.addEventListener("click", () => {
    let requestedDisplay = document.getElementById(
      button.classList[1].split("-")[0] + "-housing"
    );
    if (requestedDisplay !== currentMainDisplay) {
      if (
        !requestedDisplay.classList.contains("to-front") ||
        !requestedDisplay.classList.contains("to-back")
      ) {
        requestedDisplay.classList.add("to-front");
      }
      currentMainDisplay.classList.replace("to-front", "to-back");
      requestedDisplay.classList.replace("to-back", "to-front");
      currentMainDisplay = requestedDisplay;
    }
  });
  // Adds background to active fitler button
  button.addEventListener("click", () => {
    activeButton = button;
    allButtonSelectors.forEach(button => {
      if (button != activeButton) {
        button.classList.remove("active-btn");
      } else {
        button.classList.add("active-btn");
      }
    });
  });
});
