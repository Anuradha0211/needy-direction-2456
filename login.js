   // Get the modal
   var modal = document.getElementById('id01');

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }

   let heading=document.getElementById("display");
    function next() {

      //complete this function

      heading.innerText="Enter OTP";
    }

    let input = document.getElementById("otp")
    let acctualOT = 1234;
    let promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(acctualOT==input.value){
            resolve("OTP Matches")
        }
        else{
            reject("Check your Number Correctly");
        }
      },10000)  
    })
    promise.then((res)=>{
         alert(res); 
    })
     .catch((error)=>{
        alert(error)
     })