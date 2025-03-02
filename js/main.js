let colorBtn = document.getElementById("colorChange");

if(colorBtn){
    colorBtn.addEventListener("click", function(){
        const randomCod = Math.floor(Math.random() * 16777215);
        const makeColor = "#" + randomCod.toString(16);
    
        document.body.style.backgroundColor = makeColor;
    });
}



let completBtn = document.querySelectorAll(".complet");

completBtn.forEach(function(button){
    button.addEventListener("click", function(){
        let increaseNumber = document.querySelector(".increaseNumber");
        let intIncreaseNum = parseInt(increaseNumber.innerText);
        let decreaseNumber = document.querySelector(".decreaseNumber");
        let intnumber = parseInt(decreaseNumber.innerText);
        let histroy = document.querySelector(".histroy");
        let title = this.closest(".parentdiv").querySelector(".title").innerText;
        const clearBtn = document.querySelector(".clearBtn");

        alert("Board update successfully")
        intnumber --;
        intIncreaseNum ++;
        increaseNumber.innerText = intIncreaseNum;
        decreaseNumber.innerText = intnumber;
        this.disabled = true;


        if (intnumber === 0) {
           alert("congratullation")
        }

        // history functionality start
        let makeP = document.createElement("p");
        makeP.innerText = `Completed: ${title} ${bdTime}`;
        makeP.classList.add("text-lg", "p-4", "bg-sky-50","shadow-ld", "rounded", "m-4");
        
        histroy.appendChild(makeP);
        


        clearBtn.addEventListener("click", function(){
            histroy.innerHTML = "";
        });
    


    })

   
});

  let discoverBtn = document.querySelector(".discoverbtn");
  if(discoverBtn){
    discoverBtn.addEventListener("click", function(){
        window.location.href= "./another.html" ;
    
    
      })
    
  }
  
const backToDesk = document.getElementById("backToDesk");
if (backToDesk) {
backToDesk.addEventListener("click", function () {
    window.location.href = "index.html";
});
   
}


// topDateSection

let topDate = document.querySelector(".topDate");
topDate.innerText = bdDate
topDate.classList.add("font-bold",) 