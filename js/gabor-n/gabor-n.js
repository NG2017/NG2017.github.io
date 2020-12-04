// Gabor N JS
console.log("Gabor N js");

function _load(){
  
    
    let gaborNagyDiv = document.getElementById("gabor-n");
    gaborNagyDiv.innerHTML = "";

    gaborNagyDiv.insertAdjacentHTML("beforeend", `
    
    <div id="bookigInfo">
    <p>Thank you for choosing Ristorante Pizzeria Giovanni<br><br>
    We’re accepting bookings for a maximum of 8 people.<br>
    You can't book a table one hour before the actual time.<br/>
    All input fileds are reuired.</p>

    </div>
    <div id="buttondiv">
        <button id="showForm">Booking a table</button>
    </div>
    <div id="formDiv">
        <div id="formContainer" class="formHidden">
            <form id="bookingForm">
                <span>Name*</span>
                <input type="text" id="name" name="name">
                <div id="name-message"></div>
                
                <span>E-mail*</span>
                <input type="email" id="email" name="email">
                <div id="email-message"></div>
                
                <span>Date*</span>
                <input type="date" id="date" name="date" value="Válasszon!" min="2020-11-01" max="2021-12-31">
                <div id="date-message"></div>
                
                <span>Time*</span>
                <fieldset id="addedTime">
                <select id="time-hour" name="time-hour">
                    <option value="--">--</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                </select>
                <span> : </span> 
                <select id="time-minute" name="minute">
                    <option value="--">--</option>
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                </select>
                </fieldset>
                <div id="time-message"></div>
                <div id="latetime-message"></div>

                <span>Person(s)*</span>
                <fieldset>
                    <select id="person" name="person">
                        <option value="--">--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>   
                </fieldset>
                <div id="person-message"></div>

                <button type="button" id="submitBtn">Book the table</button>
                <div id="error-info"></div>
            </form>
        </div>
    </div>
<div>


<footer>
<span>© 2020 Ristorante Pizzeria Giovanni |</span> <span>Terms and Conditions</span>
</footer>

  `);










    
    function showForm() {
        document.getElementById("formContainer").classList.add("formVisible");
        document.getElementById("formContainer").classList.remove("formHidden");
        document.getElementById("showForm").classList.add("showButtonhidden");

        
/*         setTimeout(function() { 
        document.getElementById("buttondiv").innerHTML = "";
        }, 800);
         */
        


    }   
    document.getElementById("showForm").onclick = function() {showForm()};

  
    function validateForm() {
        let addedName = document.getElementById("name").value;
        if (addedName == "") {
           document.getElementById("name").classList.add("error");
           document.getElementById("name-message").classList.add("errorInfo");
           document.getElementById("name-message").innerHTML = "Missing Name";
        }
        else {
            document.getElementById("name").classList.remove("error");
            document.getElementById("name-message").classList.remove("errorInfo");
            document.getElementById("name-message").innerHTML = "";    
        }
        
        
        let emailInput = document.getElementById("email");
        let addedEmail = emailInput.value;
        let emailMessageDiv = document.getElementById("email-message")
       
        if (addedEmail == "") {
            emailInput.classList.add("error");
            emailMessageDiv.classList.add("errorInfo");
            emailMessageDiv.innerHTML = "Missing E-mail"; 
        } else {
            emailInput.classList.remove("error");
            emailMessageDiv.classList.remove("errorInfo");
            emailMessageDiv.innerHTML = ""; 
        }

        //email validator
        const complexEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validcheckCompl = complexEmailRegex.test(addedEmail);
 
        if (addedEmail !== "") {
            if (validcheckCompl == false) {   
                emailInput.classList.add("error");
                emailMessageDiv.classList.add("errorInfo", "attention");
                emailMessageDiv.classList.add("attention");
                emailMessageDiv.innerHTML = "Wrong email format!"; 
            } else {
                emailInput.classList.remove("error");
                emailMessageDiv.classList.remove("errorInfo", "attention");
                emailMessageDiv.innerHTML = ""; 
            }
        }
        

        let addedDate = document.getElementById("date").value;
        if (addedDate == "") {
            document.getElementById("date").classList.add("error");
            document.getElementById("date-message").classList.add("errorInfo");
            document.getElementById("date-message").innerHTML = "Choose (another) date"; 
        } else {
            document.getElementById("date").classList.remove("error");
            document.getElementById("date-message").classList.remove("errorInfo");
            document.getElementById("date-message").innerHTML = ""; 
        }

        let today = new Date();
        let currentDate = today.getFullYear()+ "-" +(today.getMonth()+1)+ "-" +("0" + today.getDate()).slice(-2);
        
        let addedHour = document.getElementById("time-hour").value;
        String(addedHour);
        if (addedHour == "--") {
            document.getElementById("time-hour").classList.add("error");
        }
        else {
            document.getElementById("time-hour").classList.remove("error");
        }





        let addedMinute = document.getElementById("time-minute").value;
        String(addedMinute);
        if (addedMinute == "--") {
            document.getElementById("time-minute").classList.add("error");
        }
        else {
            document.getElementById("time-minute").classList.remove("error");
        }
    
        if (addedMinute == "--" || addedHour == "--") {
            document.getElementById("time-message").classList.add("errorInfo");
            document.getElementById("time-message").innerHTML = "Invalid hour / minute"; 
        } else {
            document.getElementById("time-message").innerHTML = ""; 
            document.getElementById("time-message").classList.remove("errorInfo");

        }

        let totalTime = addedHour + addedMinute;
        let addedTime = addedHour + ":" + addedMinute;
     
        // fent mar megvan
        // let today = new Date();

        let timeInForm = String(("0" + today.getHours()).slice(-2)) + ":" + String(("0" + today.getMinutes()).slice(-2));
        let actualtime = String(("0" + today.getHours()).slice(-2)) + String(("0" + today.getMinutes()).slice(-2));
        
        let backtoNumberActual = Number(actualtime) + 100;
        let backtoNumberTotal = Number(totalTime);

        if (currentDate >= addedDate) {
            if (backtoNumberActual > backtoNumberTotal) {
                document.getElementById("addedTime").classList.add("error_late");
                document.getElementById("latetime-message").classList.add("errorInfo");
                document.getElementById("latetime-message").innerHTML = "You can't book a table one hour before the actual time [<span style='background:#9bcefd'>" + timeInForm + "</span>]!";
            } else {
                document.getElementById("addedTime").classList.remove("error_late");
                document.getElementById("latetime-message").classList.remove("errorInfo");
                document.getElementById("latetime-message").innerHTML = "";
            }
        } else {
            document.getElementById("addedTime").classList.remove("error_late");
            document.getElementById("latetime-message").classList.remove("errorInfo");
            document.getElementById("latetime-message").innerHTML = "";
        }


        let addedPerson = document.getElementById("person").value;
        if (addedPerson == "--") {
            document.getElementById("person").classList.add("error");
            document.getElementById("person-message").classList.add("errorInfo");
            document.getElementById("person-message").innerHTML = "Invalid number"; 
        } else {
            document.getElementById("person").classList.remove("error");
            document.getElementById("person-message").classList.remove("errorInfo");
            document.getElementById("person-message").innerHTML = ""; 
        }



        let errorNumber = document.getElementsByClassName("errorInfo").length;
        if (errorNumber > 0) {
        document.getElementById("error-info").innerHTML = "<b>" + errorNumber + "</b> invalid input field(s)"; 
        document.getElementById("error-info").classList.add("error-info-style");
        } else {
        document.getElementById("error-info").innerHTML = ""; 
        document.getElementById("error-info").classList.remove("error-info-style");
        }

        if (errorNumber == 0) {
        document.getElementById("formContainer").innerHTML = "<br>Thank you!<br><br>We confirmed the reservation with the following details:<br><br>";
        document.getElementById("formContainer").innerHTML += addedName + "<br>";
        document.getElementById("formContainer").innerHTML += addedEmail + "<br><br>";
        document.getElementById("formContainer").innerHTML += addedDate + "<br>";
        document.getElementById("formContainer").innerHTML += "<b>" + addedTime + "</b><br>";
        document.getElementById("formContainer").innerHTML += addedPerson + " person(s)<br><br>";
        }


        console.log("Name: " + addedName);
        console.log("E-mail: " + addedEmail);
        console.log("Date: " + addedDate);
        console.log("Time: " + addedTime);
        console.log("Persons(s): " + addedPerson);
        console.log("Invalid input: " + errorNumber);



    }

    document.getElementById("submitBtn").addEventListener("click", validateForm); 



    let today = new Date();
    //hulyebiztossa teszi a datumvalasztot
    let dateStupid = today.getFullYear()+'-'+("0" + (today.getMonth() + 1)).slice(-2)+'-'+("0" + today.getDate()).slice(-2);
    document.getElementById("date").min = dateStupid;



}


window.addEventListener("load", _load);