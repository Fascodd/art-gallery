const catagoryFilterList = document.querySelectorAll(".image-btn");
const contentFilterList = document.querySelectorAll(".content-btn");
const allButtonSelectors = document.querySelectorAll(".select-btn");
const thumbnailClasses = document.querySelectorAll(".thumbnail");
let currentMainDisplay = document.getElementById("image-housing");
let showcase = document.getElementById("showcase-housing");
let showcaseImg = document.getElementById("showcase-img");
let headerSection = document.getElementById("header-section");
let containter = document.getElementById("container");
let activeButton;
let startArray = [];
let endArray = [];

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

// Set Display Image to front
thumbnailClasses.forEach((img)=>{
  img.addEventListener("click",()=>{
    let imageName = img.src.split("/")[img.src.split("/").length-1];
    let largePicSource = "../img/display/" + imageName;
  showcase.style.zIndex="1";
  containter.style.zIndex="-1";
  headerSection.style.zIndex="-1";
  showcaseImg.src = largePicSource;
  })
})
//Return to Main Display
showcaseImg.addEventListener("click",returnToMain);
showcase.addEventListener("click",returnToMain);

function returnToMain(){
  showcase.style.zIndex="-1";
  containter.style.zIndex="1";
  headerSection.style.zIndex="1";
  showcaseImg.src = "";
}