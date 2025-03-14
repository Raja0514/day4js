//-------------------------------------throw new Error--------------------------------

//what happen without throw ?

/*

By default, JavaScript only throws built-in errors (like TypeError, ReferenceError).

But sometimes, we need custom error messages based on specific conditions.

*/

function divide(a,b){

    return a/b;

}

//console.log(divide(10,10));

//console.log(divide(10,0));

// 🔴 Problem: JavaScript does not automatically throw an error when dividing by zero.

function divide1(a,b){

    if(b===0){

        throw new Error("Division by zero is not allowed!"); //custom error
    }

    return a/b;
    
}

// try{
//     console.log(divide1(10,0)) //
// }

// catch(error){

//  console.log("Error caught:",error.message);

// }

// console.log("Program continues...")


// ✔ Fix: Instead of returning infinity , the program throws error and catch handles it.

/*

🔥 Key Differences: throw vs catch

Feature	                       throw                                       	catch
--------------------------------------------------------------------------------------------
Purpose	                   Generates (throws) errors	               Handles errors
When It Runs	             Inside try block	                           After an error is thrown
Effect on Execution	       Stops execution unless handled	           Prevents script from crashing

*/

/*

🌟 When Should You Use throw?

✔ Custom validation errors (e.g., invalid user input)

✔ When JavaScript does not throw an error by default

✔ To stop execution if something is critically wrong

*/

// here is the  Example  stop execution if something is critically wrong

// ❌ Without Stopping Execution

function authenticateUser(username, password) {

    if (username === "admin" && password === "password123") {

      console.log("User authenticated");
      
      // Perform sensitive actions

      console.log("Access granted!");

    } 
    
    else {
      console.log("Invalid credentials");
    }
  }
  
  //authenticateUser("admin", "1234566"); // Logs "Invalid credentials"

  //authenticateUser("admin", "password123"); // Logs "User authenticated" and "Access granted!"
  
//✅ With throw to Stop Execution

function authenticateUser(username, password) {

    if (username !== "admin" || password !== "password123") {

      throw new Error("Critical Error: Invalid credentials. Authentication failed!"); // 🔥 Throws an error to stop execution

    }
    
    console.log("User authenticated");

    // Perform sensitive actions

    console.log("Access granted!");
  }
  
  try {

    authenticateUser("admin", "w122222"); // ❌ Error will be thrown and execution will stop

  } 
  catch (error) {
    
    console.log(error); // Logs: "Critical Error: Invalid credentials. Authentication failed!"
  }
  
  console.log("Execution stopped after error."); // ✅ This will run because `catch` handled the error
  


  