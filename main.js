/*      This calculator is working as inteded, 
        However the code is sloppy and unnecessarily repetitive at times.

        I will work more on refactoring it. */


// getting a js referece for buttons
var jsOne = document.getElementById("btn-one");
var jsTwo = document.getElementById("btn-two");
var jsThree = document.getElementById("btn-three");
var jsFour = document.getElementById("btn-four");
var jsFive = document.getElementById("btn-five");
var jsSix = document.getElementById("btn-six");
var jsSeven = document.getElementById("btn-seven");
var jsEight = document.getElementById("btn-eight");
var jsNine = document.getElementById("btn-nine");
var jsZero = document.getElementById("btn-zero");
var jsDot = document.getElementById("btn-dot");

//getting js references for operation buttons
var jsPlus = document.getElementById("btn-plus");
var jsMinus = document.getElementById("btn-minus");
var jsMultiply = document.getElementById("btn-multiply");
var jsDivide = document.getElementById("btn-divide");

//getting js reference for equals button
var jsEqual = document.getElementById("btn-equal");

// getting a js reference for all num bts at once
var jsNumButtons = document.getElementsByClassName("num-button");

//getting a js reference for the display value
var jsDisplayValue = document.getElementById("display-val");

//getting reference to clear button
var jsClearBtn = document.getElementById("clear-btn");

//getting reference to cancel button
var jsCancelBtn = document.getElementById("cancel-btn");



/*  COULDN'T GET THIS TO WORK WITHOUT LOOKING UP ONLINE

// adding a click event listener to all the num buttons at once 
for (let i = 0 ; i < jsNumButtons.length; i++)
    {
        jsNumButtons[i].addEventListener("click",updateDisplayValue(), false);
    }   

    // add the button you clicked, to the display
    function updateDisplayValue() {
        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML = jsNumButtons[i].innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML = jsDisplayValue.innerHTML + jsNumButtons[i].innerHTML;
        }
    }       */


    // Updating the display with the num buttons    (no time to figure it out properly now....need to refactor later)

    // 1
    jsOne.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsOne.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  +=  jsOne.innerHTML;
        }
    }

    // 2
    jsTwo.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsTwo.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  +=  jsTwo.innerHTML;
        }
    }

      // 3
      jsThree.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsThree.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  +=  jsThree.innerHTML;
        }
    }

     // 4
     jsFour.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsFour.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  +=  jsFour.innerHTML;
        }
    }

       // 5
       jsFive.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsFive.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  += jsFive.innerHTML;
        }
    }

      // 6
      jsSix.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsSix.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  += jsSix.innerHTML;
        }
    }

    
      // 7
      jsSeven.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsSeven.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  += jsSeven.innerHTML;
        }
    }

    
      // 8
      jsEight.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsEight.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  += jsEight.innerHTML;
        }
    }

    
      // 9
      jsNine.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsNine.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  += jsNine.innerHTML;
        }
    }

    
      // 0
      jsZero.onclick = () => {

        if (jsDisplayValue.innerHTML == 0) 
        {
            jsDisplayValue.innerHTML  = jsZero.innerHTML;
        }
        else 
        {
            jsDisplayValue.innerHTML  +=  jsZero.innerHTML;
        }
    }

    // the . button
    jsDot.onclick = () => {

        // this variable is so I can use includes() without error.
        var jsDpVl = jsDisplayValue.innerHTML;

        if (!jsDpVl.includes(".")) 
        {
            jsDisplayValue.innerHTML  += jsDot.innerHTML;
        }
            

        
    }

    // working out the clear button
    jsClearBtn.onclick = () => {
        jsDisplayValue.innerHTML = 0;
        hiddenValue = undefined;
    }

    // cancel button
    jsCancelBtn.onclick = () => {
        
        jsDisplayValue.innerHTML = jsDisplayValue.innerHTML.slice(0 , jsDisplayValue.innerHTML.length - 1);
        
        if (jsDisplayValue.innerHTML.length == "")
        {
            jsDisplayValue.innerHTML = "0";
        }
    }

    // this is the value that will be remembered from before clicking an operation button
    var hiddenValue;

    // this is the value that will be used later in regards to remembering which operation was selected
    var operationType;

    // Addition Button 
    jsPlus.onclick = () => {
        operationType = 1;
        hiddenValue = jsDisplayValue.innerHTML;
        jsDisplayValue.innerHTML = 0;
    }

     // Minus Button 
     jsMinus.onclick = () => {
        operationType = 2;
        hiddenValue = jsDisplayValue.innerHTML;
        jsDisplayValue.innerHTML = 0;
    }

     // Multiply Button 
     jsMultiply.onclick = () => {
        operationType = 3;
        hiddenValue = jsDisplayValue.innerHTML;
        jsDisplayValue.innerHTML = 0;
    }

      // Divide Button 
      jsDivide.onclick = () => {
        operationType = 4;
        hiddenValue = jsDisplayValue.innerHTML;
        jsDisplayValue.innerHTML = 0;
    }

     // Equal Button and performing the operation
     jsEqual.onclick = () => {
        
        if (operationType == 1)
        {
            jsDisplayValue.innerHTML = parseInt(hiddenValue,10) + parseInt(jsDisplayValue.innerHTML,10);
        }

        else if (operationType == 2)
        {
            jsDisplayValue.innerHTML = hiddenValue - jsDisplayValue.innerHTML;
        }

        else if (operationType == 3)
        {
            jsDisplayValue.innerHTML *= hiddenValue;
        }

        else if (operationType == 4)
        {
            jsDisplayValue.innerHTML = hiddenValue / jsDisplayValue.innerHTML;
        }
        else
        {
            jsDisplayValue.innerHTML = "0";
        }
    }