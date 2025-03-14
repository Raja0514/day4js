// function changeBackgroundColor(element, color) {

//   element.style.backgroundColor = color;
  
// }

// const data = document.getElementById("box");

// console.log(data);

// changeBackgroundColor(data, "blue");

// prompt("Enter your name");

function changeBackgroundColor1(element, color) {

  element.style.backgroundColor = color;

}

const data1 = document.getElementById("box");

try {

  changeBackgroundColor1(data1, "blue");

} 
catch (e) {

  console.log(e.message);
  console.log(e.name);

  console.dir(e);

  
} 

finally {

  console.log("Done..");

}

//prompt("Enter your name");

// prevents script from crashing

/*

🔍 How It Works

1️⃣ Error occurs inside try block → Caught by catch

2️⃣ catch handles the error → Logs it instead of stopping execution

3️⃣ JavaScript resumes execution → alert("End of the Code..") runs ✅

*/

/*

try {

  // Code that may cause an error

} 
  
catch (error) {

  // Code that runs when an error occurs

}

finally {

  // (Optional) Code that always runs, whether an error occurred or not

}

*/
