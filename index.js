console.log("Hello Beautiful World")

const inputContainer = document.getElementById("inputs");
const numBtns = document.querySelectorAll(".btn");
const reset = document.querySelector(".reset");
let del = document.querySelector(".delete");
const equal =  document.querySelector(".equal");
let error = document.getElementById("error");
//inputContainer.value = 5200;
numBtns.forEach(btn => {
    const getValue = btn.getAttribute("value");

    btn.addEventListener("click",function() {
        console.log(typeof getValue)
      
        inputContainer.value += getValue;
       
        
    })
})

equal.addEventListener("click",function() {
    //let parsingStringToNumber = parseInt(inputContainer.value);
    if(inputContainer.value === "" ){
       error.style.display = "block";

    }else{
        const evaluate = eval(inputContainer.value);
        inputContainer.value = evaluate;
       error.style.display = "none";

    }
})

inputContainer.addEventListener("input",function(e){
    if(e.target.value === ""){
    error.style.display = "block";
    }else{
    error.style.display = "none";

    }
})

reset.addEventListener("click",function() {
     inputContainer.value = "";
})


del.addEventListener("click",function() {
    
    let text = inputContainer.value.substring(-1,inputContainer.value.length - 1);
   
    inputContainer.value = text;
   

})

const btnContainer = document.querySelector(".btn-containers")
const oneTheme = document.getElementById("one");
const twoTheme = document.getElementById("two");

const threeTheme = document.getElementById("three");

const toggle = document.querySelector(".toggle");

const themeNum  =document.querySelectorAll(".theme-num");
const getLocalItem = localStorage.getItem("theme-data");

let ids = "";
themeNum.forEach(nums => {
    nums.addEventListener("click",function() {
        let getId = nums.getAttribute("id");
        console.log(getId);
        if(getId === 'one'){
            // document.body.classList.add("first-theme");
            // localStorage.setItem("theme-data",'first-theme')
            modeone();
        }else{
            document.body.classList.remove("first-theme");
          //  localStorage.removeItem('first-theme')
        }
        if(getId === 'two'){
        
            toggle.classList.add("move-to-two");
            modetwo();
         // btnContainer.classList.add("second-theme");
 
            // document.body.classList.add("second-theme");
            // localStorage.setItem("theme-data",'second-theme')
        }else{
            toggle.classList.remove("move-to-two")
            document.body.classList.remove("second-theme");
        //  btnContainer.classList.remove("second-theme");

//             localStorage.removeItem('second-theme')

        }
        if(getId === 'three'){
          //addThird();
          //document.body.classList.add("third-theme");
          toggle.classList.add('move-to-three');
          modethree();
       //   btnContainer.classList.add("third-theme");

        //   localStorage.setItem("theme-data",'third-theme')
        //    toggle.classList.add("move-to-three");
        }else{
            toggle.classList.remove("move-to-three")
            document.body.classList.remove("third-theme");
         // btnContainer.classList.remove("third-theme");

            //localStorage.removeItem('third-theme')
            // modetwo();
        }
    });
//checkingLocal();

  ///  ids = nums;
});

console.log('getlocalitem',getLocalItem);
localStorage.setItem("theme-data","first-theme");
function modeone(){
    document.body.classList.add("first-theme");
    localStorage.setItem("theme-data",'first-theme');
    toggle.classList.add("move-to-one")
    btnContainer.classList.remove("second-theme");
    
}

 function modetwo(){

     document.body.classList.add("second-theme");
     localStorage.setItem("theme-data",'second-theme')
     toggle.classList.add("move-to-two");
     btnContainer.classList.add("second-theme");
     btnContainer.classList.remove("third-theme");

     //btnContainer.classList.toggle("second-theme");
 }
 //modetwo();
 function modethree(){
     document.body.classList.add("third-theme");
     localStorage.setItem("theme-data",'third-theme');
     toggle.classList.add("move-to-three");
     btnContainer.classList.remove("second-theme");

     btnContainer.classList.add("third-theme");

 }


if (getLocalItem === "first-theme") {
   //localStorage.setItem("theme-data",'first-theme')
   modeone();
}else if(getLocalItem === "second-theme"){ 
    modetwo();
    //localStorage.setItem("theme-data",'second-theme');
}else if(getLocalItem === "third-theme"){
    modethree();
    //localStorage.setItem("theme-data",'third-theme');
}else{
    localStorage.setItem("theme-data",'first-theme');
}


//modethree();