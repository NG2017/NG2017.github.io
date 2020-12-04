

//function burgerMenuClick() {
 // console.log("burgermenu test");
 // document.querySelector("burgerMenu").classList.toggle("change");
//}






function navBar() {

  console.log("működik a navBar");

  let navBarDiv = document.getElementById("navBar");
  navBarDiv.innerHTML = "";

  let dropdown = document.createElement("div");
  dropdown.className = "dropdown";
  navBarDiv.appendChild(dropdown);

  let dropbutton = document.createElement("label");
  dropbutton.className = "dropbutton";
  dropdown.appendChild(dropbutton);

  let burgerMenu = document.createElement("div");
  burgerMenu.className = "burgerMenu";
  burgerMenu.id = "ccc";
  dropbutton.appendChild(burgerMenu);

  let bar1 = document.createElement("div");
  bar1.className = "bar1";

  let bar2 = document.createElement("div");
  bar2.className = "bar2";

  let bar3 = document.createElement("div");
  bar3.className = "bar3";

  burgerMenu.appendChild(bar1);
  burgerMenu.appendChild(bar2);
  burgerMenu.appendChild(bar3);

  let dropCont = document.createElement("div");
  dropCont.id = "dropCont";
  dropdown.appendChild(dropCont);

  let link1 = document.createElement("a");
  link1.className = "homeLink1";
  dropCont.appendChild(link1);
  link1.setAttribute('href', '#kriszta');
  link1.innerHTML = "Home";

  let link2 = document.createElement("a");
  link2.className = "aboutLink2";
  dropCont.appendChild(link2);
  link2.setAttribute('href', '#wrapper');
  link2.innerHTML = "About";

  let link3 = document.createElement("a");
  link3.className = "locationLink3";
  dropCont.appendChild(link3);
  link3.setAttribute('href', '#wrapper');
  link3.innerHTML = "Location";

  let link4 = document.createElement("a");
  link4.className = "menuLink4";
  dropCont.appendChild(link4);
  link4.innerHTML = "Menu";
  link4.setAttribute('href', '#gabor-d');

  let link5 = document.createElement("a");
  link5.className = "bookingLink5";
  dropCont.appendChild(link5);
  link5.innerHTML = "Book a Table";
  link5.setAttribute('href', '#gabor-n');



  //burger menu X animation

  


  function myFunction() {

  let menuicon = document.getElementById("ccc");
  let showDrop = document.getElementById("dropCont");

   

   menuicon.classList.toggle("change");

   showDrop.classList.toggle("change");
  }
  document.getElementById("ccc").addEventListener("click", myFunction);

  //burger menu X animation



}


console.log("működik kriszta szkripje");

function kriszta(){

  let krisztaDiv = document.getElementById("kriszta");
  krisztaDiv.innerHTML = "";

  // picture+text div
  let landingDiv = document.createElement("div");
  landingDiv.className = "landingDiv";

  let landingText = document.createElement("div");
  landingText.className = "landingText";

  let krisztaHead = document.createElement("h1");
  krisztaHead.innerHTML = "Ristorante Pizzeria";
  krisztaHead.className = "textCenterh1";
  let krisztaSubHead = document.createElement("h2");
  krisztaSubHead.innerHTML = "Giovanni";
  krisztaSubHead.className ="textCenterh2";

  landingDiv.appendChild(landingText);
  landingText.appendChild(krisztaHead);
  landingText.appendChild(krisztaSubHead);
  krisztaDiv.appendChild(landingDiv);



 // divider line div

 let divider1 = document.createElement('div');
 divider1.className = "divDivider1";
 krisztaDiv.appendChild(divider1);
 //krisztaDiv.insertAdjacentElement("afterend", divider1);

 //krisztaDiv.nextSibling(divider1);
 //3th div introduction

  let wrapper = document.createElement("div");
  wrapper.id = "wrapper";
  wrapper.className ="wrapper";
  krisztaDiv.appendChild(wrapper);

  let textDiv = document.createElement("div");
  textDiv.className ="textDiv";
  wrapper.appendChild(textDiv);

  let ourStory = document.createElement("div");
  ourStory.className = "ourStory";
  ourStory.innerHTML = "<h3>Our Story...</h3>";
  textDiv.appendChild(ourStory);

  let aboutUs = document.createElement("div");
  aboutUs.className = "aboutUs";
  aboutUs.innerHTML = "<article>Since 1981, Ristorante Pizza Giovanni</span> has provided our cherished customers in the Hudson Valley with the most delicious food in a family environment. However, our story really begins way back in 1970, when Leo Maniscalchi, a native of Sicily, Italy who arrived to the Hudson Valley by way of Ridgewood Queens with his wife, Josephine, opened Roma Imperial - his first restaurant in the Newburgh-area. On Memorial Day in ‘81, he opened Ristorante Pizza Giovanni</span> in Cornwall, an establishment that would become a local fine-dining institution was born. Three decades later, we also have upscale locations in Newburgh in Wappingers.</article><article>The family opened the Newburgh restaurant in 2003 and the Wappingers location three years later. Maniscalchi attributes his growth to great food, great service, great customers and, of course, a wonderful family. We give our loyal customers what they want, provide them great food and unmatched customer service, and they will keep coming back.</article> <article>There is full selection of <span>Giovanni’s famous pizzas,</span> including regular, Sicilian, and personal size, with all the toppings, are also available. We feature a variety expertly chef-prepared dishes and premium wines from around the world. Leo’s diverse menu features pasta, chicken, veal and seafood, highlighting a variety of delicious Italian specialties – all made with the freshest ingredients. Giovanni’s offers daily specials and a friendly, comfortable family dining experience. Our family is proud to carry on the traditions Giovanni started 31 years ago. That’s what makes a <span>real family restaurant</span> – a real family.</article>";
  textDiv.appendChild(aboutUs);


  //loaction div

  let locationDiv = document.createElement('div');
  locationDiv.className = "locationDiv";
  wrapper.appendChild(locationDiv);

  let svgDividerLeft = document.createElement('div');
  svgDividerLeft.className = "svgDividerLeft";
  locationDiv.appendChild(svgDividerLeft);

  let info = document.createElement('div');
  info.className = "info";
  locationDiv.appendChild(info);

  let svgDividerRight = document.createElement('div');
  svgDividerRight.className = "svgDividerRight";
  locationDiv.appendChild(svgDividerRight);

  let infoLocation = document.createElement('div');
  infoLocation.className = "infoLocation";
  info.appendChild(infoLocation);
  infoLocation.innerHTML = "<h6>Address</h6>";
  infoLocation.innerHTML += "<p>Via degli Olmi, 22. Sesto Fiorentino <br> 50019</p>";


  let openhours = document.createElement('div');
  openhours.className = "openhours";
  info.appendChild(openhours);
  openhours.innerHTML = "<h6>Hours</h6>";
  openhours.innerHTML += "<p>Monday-Friday</p>";
  openhours.innerHTML += "<p>12:00 - 23:00</p>";

  let bookButton = document.createElement('button');
  bookButton.className = "bookButton";
  info.appendChild(bookButton);
  bookButton.innerHTML = '<a href="index.html#gabor-n">Book a Table</a>';
  //bookButton.setAttribute('href', '../bookatable.html');
  //bookButton.setAttribute('target', '__blank');

//loaction div end


 let divider2 = document.createElement('div');
 divider2.className = "divDivider2";
 krisztaDiv.appendChild(divider2);


}



window.addEventListener("load", navBar);
//window.addEventListener("load", burgerMenuClick);
window.addEventListener("load", kriszta);


