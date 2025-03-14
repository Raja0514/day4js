/*
⚡ Why Use try?

1️⃣ Prevents the program from crashing

2️⃣ Allows execution to continue even if an error occurs

3️⃣ Provides meaningful error messages for debugging

4️⃣ Improves user experience by handling errors gracefully

*/

/*
✅ How try...catch Works

1️⃣ Without try...catch (Uncaught Error)

If an error occurs in JavaScript and is not handled, the script execution stops immediately.


*/

console.log("Start");

//let result = 10 / testVar;  // uncaught ReferenceError :testVar is not defined

//console.log("End")   // this line never execute

//🔴 Issue: The program stops execution after the error.


/*
2️⃣ With try...catch (Error Handled)

Using try...catch, we catch the error and allow the program to continue running.

*/

//console.log("Start");

try {

  let result = 10 / testVar; // ❌ ReferenceError occurs here
}

catch (e) {

  console.log("Error caught:", e.message); // ✅ Logs error instead of crashing
}

finally{
  console.log("done")
}

console.log("End"); // ✅ This now runs!

//🟢 Fix: Even though an error occurs, execution continues after catch, and "End" is printed.


//🔹 Structure of try...catch

try {

    // Code that may cause an error

  }
  
  catch (error) {

    // Code that runs when an error occurs

  } 
  
  finally {

    // (Optional) Code that always runs, whether an error occurred or not

  }
  