let j = 0;

let time = 3000; /* seconds */
const img = document.getElementById("image1");
const gallery = document.querySelectorAll(".gallery .image");

let previewBox = document.querySelector(".preview-box");
let previewImg = previewBox.querySelector("img");
let closeIcon = previewBox.querySelector(".icon");
let currentImg = previewBox.querySelector(".curren-imgt");
let totalImg = previewBox.querySelector(".total-img");

let gallerContainer = document.querySelector(".gallery-container");
let bodyStopScroll = document.querySelector("body");
let galleryIMG = document.querySelectorAll(".image");

let button = document.querySelectorAll(".button button");

const form = document.querySelector("form");
statusTxt = form.querySelector(".button-area span");

/*  img.src = "./images/family1.png";*/

let loop = [
  "./images/family2.png",
  "./images/family3.png",
  "./images/family4.png",
];

//access image folders and add them to html imgage gallery div images

let galleryLoop = [];

loop.push("./images/aroo.png");

function galleryPush() {


  for (let i = 0; i < 40; i++) {
    
    let alert = galleryLoop.push("./images/gallery/gallery" + i + ".png");
    console.log("Alert" + alert);

    // ./images/gallery/gallery0.png
  }
}
//galleryLoop[j + index]
//load picture gallery from folder
function galleryAdd(index) {
  for (let j = 0; j < galleryIMG.length; j++) {
    let number = index + j;

    console.log("i: " + j);
    console.log("index:" + index);
    console.log("gallery loop:" + galleryLoop[j + index]);
    console.log("gallery img:" + galleryIMG[j].src);
    galleryIMG[j].src = "./images/gallery/gallery" + number + ".png";
    console.log("gallery img after:" + galleryIMG[j].src);
  }
}

/*Picture loop function  */
function loopimg() {
  if (j < loop.length - 1) {
    j++;
  } else {
    j = 0;
  }
  console.log("loop:" + loop[j]);
  console.log("img.src" + img.src);
  img.src = loop[j];
  setTimeout(loopimg, time);
}

/*This function retrieves all gallery buttons from html. onclick detects button number using for loop. The i is then
used to designate every next 10 pictures to every button. for example 1- 10 then 10 to 21 etc.  */
window.onload = () => {
  //once windows is loaded
  let index = 0;

  galleryAdd(index); // preload picture gallery

  for (let i = 0; i < button.length; i++) {
    button[i].onclick = () => {
      console.log("button" + i);
      console.log("onclick: " + button[i]);
      if (i > 0) {
        index = 11 * i;
      } else {
        index = 0;
      }

      galleryAdd(index); //load pictures on click
    };
  }

  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length - 1; //display total images

    gallery[i].onclick = () => {
      let newIndex = i; //passing i value to newIndex variable
      //test

      console.log("index" + i);
      console.log("newindex outside: " + newIndex);
      console.log("index2" + i);

      function preview() {
        //Point preview window to sected image
        currentImg.textContent = newIndex + 1; //display number of current img

        let clickedUrl = gallery[newIndex].src; //get gallery img url and store it to clickedUrl
        previewImg.src = clickedUrl; //passing user clicked img url to previewImg source
      }
      //previous and next buttons
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");
      if (newIndex == 0) {
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        nextBtn.style.display = "none";
      }

      prevBtn.onclick = () => {
        console.log("newindex: " + newIndex);
        newIndex--; //decrement newIndex
        console.log("prevBtn" + prevBtn);
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview(); //calling again preview to update function
          nextBtn.style.display = "block";
        }
      };
      nextBtn.onclick = () => {
        console.log("newindex: " + newIndex);
        console.log("nextBtn" + nextBtn);
        newIndex++; //decrement newIndex
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview(); //calling again preview to update function
          prevBtn.style.display = "block";
        }
      };

      preview(); //call preview
      previewBox.classList.add("show");
      gallerContainer.classList.add("freeze"); //prevent img selection  response and blur background
      bodyStopScroll.classList.add("stop-scroll");

      closeIcon.onclick = () => {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        gallerContainer.classList.remove("freeze");
        bodyStopScroll.classList.remove("stop-scroll");
      };
    };
  }
};

//Contacts

form.onsubmit = (e) => {//The onsubmit attribute fires when a form is submitted.
  e.preventDefault(); //preventing form from submitting
  statusTxt.style.display = "block";
  console.log("onsubmit: ");
  let xhr = new XMLHttpRequest();//creating new xml object
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    console.log("onload: ");
    if(xhr.readyState == 4 && xhr.status == 200){//if ajax reponse status is 200 & ready status is 4 means there is no any error
      let response = xhr.response;//storing ajax response in a response variable
      console.log("response: "+response);
    }
  }
  let formData = new FormData(form); //creating new formData obj. this obj is used to send form data
  xhr.send(formData); //sending form data
}

galleryPush();

loopimg();
 