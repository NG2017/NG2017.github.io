console.log("generate.js is working");


function generateTheTags(){

  // Navbar
  let navBar = document.createElement('div');
  navBar.id = "navBar";
  navBar.innerHTML = "Placeholder div for the navbar";

  // Kriszta 
  let krisztaDiv = document.createElement('div');
  krisztaDiv.id = "kriszta";
  krisztaDiv.innerHTML = "Placeholder for Kriszta's div";

  // Gábor D
  let gabor_dDiv = document.createElement('div');
  gabor_dDiv.className = "gabor-d";
  gabor_dDiv.setAttribute("id", "gabor-d");
  gabor_dDiv.innerHTML = "Placeholder for Gabor's div";


  // Gábor N
  let gabor_nDiv = document.createElement('div');
  gabor_nDiv.id = "gabor-n";
  gabor_nDiv.innerHTML = "Placeholder for Gabor-N's div";
  
  
  document.body.appendChild(navBar);
  document.body.appendChild(krisztaDiv);
  document.body.appendChild(gabor_dDiv);
  document.body.appendChild(gabor_nDiv);
  
}


window.addEventListener("load", generateTheTags);
