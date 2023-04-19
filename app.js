let j = 0;

let time = 3000; /* seconds */
const img = document.getElementById("image1");
const gallery = document.querySelectorAll(".gallery .image");

let previewBox = document.querySelector(".preview-box");
let previewImg = previewBox.querySelector("img");
let closeIcon = previewBox.querySelector(".close");
let currentImg = previewBox.querySelector(".curren-img");
let totalImg = previewBox.querySelector(".total-img");

let gallerContainer = document.querySelector(".gallery-container");
let bodyStopScroll = document.querySelector("body");
let galleryIMG = document.querySelectorAll(".image");

let button = document.querySelectorAll(".button-gallery button");



/*  img.src = "./images/family1.png";*/

let loop = [
  "./images/family2.png",
  "./images/family3.png",
  "./images/family4.png",
];

let galleryLoop = [];

//read directory files








//access image folders and add them to html imgage gallery div images
function galleryPush() {


  for (let i = 0; i < 40; i++) {
    
    let alert = galleryLoop.push("./images/gallery/gallery" + i + ".png");
    console.log("Alert" + alert);
    console.log("gallery img:" + galleryLoop[i]);

    // ./images/gallery/gallery0.png
  }
}
//galleryLoop[j + index]
//load picture gallery from folder
function galleryAdd(index) {
  for (let j = 0; j < galleryIMG.length; j++) {
    let number = index + j;

    //console.log("i: " + j);
    //console.log("index:" + index);
   // console.log("gallery loop:" + galleryLoop[j + index]);
   // console.log("gallery img:" + galleryloop[j].src);
   
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

   // document.getElementById("create-comment").innerHTML = localStorage.getItem("c1");  
 
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

/* 

//Comments
function comments(){

  var node= [{ //node comment object to contain name and message input
    name: document.getElementById("comment-name").value,
    message: document.getElementById("comment").value,
  }];
  const chartBox = document.getElementById("create-comment");//get id of div to be template
 
 

  const divider = document.createElement("div");//create div with custom configurations
  //divider.style.width = "100%";
  //divider.style.height = "100%";//help for dynamic expansion 
  divider.style.border = "1px solid grey";
  divider.style.marginTop = "15px";
  divider.style.marginBottom = "15px";
  divider.style.textAlign= "left";//align text to the left


  
  

  node.forEach((node, index) => {//for loop to access node values
    let itemP = document.createElement('h5');//created two of each to display node values in seperate lines
    let itemP2 = document.createElement('h5');
    let itemPText = document.createTextNode(`Name: ${node.name}`);//access node values
    let itemPText2 = document.createTextNode(`Message: ${node.message}`);
    itemP.style.marginBottom = "10px";
    itemP2.style.margin = "0";
   
  
    
    itemP.appendChild(itemPText);//Appned input to created h4
    itemP2.appendChild(itemPText2);
  
   
    let item1 = [{
      name: chartBox.appendChild(divider).appendChild(itemP),//append h4 and input info to a created div
     message:  chartBox.appendChild(divider).appendChild(itemP2),

    }]
    
   
    localStorage.setItem("c1",JSON.stringify(item1));
   
 
   
  });



}


*/



//Contacts
function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,

  };
  const serviceID = "service_yof9mqm";
const templateID = "template_6wb7jct";

emailjs.send(serviceID, templateID,params)
.then(
  res => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log("res " +res);
    alert("your message sent successfully")
  })
  .catch((err) => console.log(err));
}


function myFunction() {
 
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else if(x.style.display === "none"){
    x.style.display = "block";
  }else{  
    x.style.display = "none";
  }
}


galleryPush();

loopimg();
  
myFunction();