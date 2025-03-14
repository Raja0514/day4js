/*
🚀 What Happens If throw Returns Inside a try Block?

If you use throw inside a try block, it stops execution of the try block immediately and 

transfers control to the catch block. The code after throw will not run inside the try block.


*/

//✅ Example: throw inside try block

try {
    console.log("Start of try block");
    
    throw new Error("Something went wrong!"); // Execution stops here
    
    console.log("This line will never execute"); // ❌ Ignored
  } 
  catch (error) {
    console.log("Caught error:", error.message);
  }

  
  /*
output:
Start of try block
Caught error: Something went wrong!

📌 Explanation:

"Start of try block" is printed ✅
throw stops execution ⛔
"This line will never execute" is ignored ❌
catch handles the error and prints "Caught error: Something went wrong!" ✅


*/

/*
🔥 What If We Use return Inside try?

Using return inside a try block stops execution of the block and returns a value, 

but the finally block (if present) will still execute.

*/

//✅ Example: return inside try block

function test() {
    try {
      console.log("Inside try block");
      return "Returning from try"; // Stops execution and returns this value
    } 
    catch (error) {
      console.log("Inside catch block");
    } 
    finally {
      console.log("Finally block always runs");
    }
  }
  
  console.log(test());

  /*
output:

Inside try block
Finally block always runs
Returning from try

Explanation:

📌 Explanation:

"Inside try block" is printed ✅
return "Returning from try" stops further execution inside try ⛔
finally always runs before returning the value ✅
"Returning from try" is printed ✅

*/