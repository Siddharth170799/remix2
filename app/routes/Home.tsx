// import { useState } from "react";
// import { redirect, useBlocker } from "@remix-run/react";

// function MyComponent() {
//     const [isFormDirty, setIsFormDirty] = useState(false);
  
//     useBlocker((info) => {
 
//       if (isFormDirty) {
//         alert("Are you sure you want to leave this page? Your changes may be lost.");
//         return "Are you sure you want to leave this page? Your changes may be lost.";
//       }
//       else{
//         return redirect("/Home")
//       }
//        }, [isFormDirty]); 
  
//     function submit(e) {
//       e.preventDefault(); 
      
//       setIsFormDirty(true);
//     }
  
   
//     return (
//       <div>
//         <h1>My Component</h1>
//         <form >
//          <button onClick={submit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// export default MyComponent  
import { useState } from "react";
import { Redirect } from "@remix-run/react";

function MyComponent() {
    const [isFormDirty, setIsFormDirty] = useState(false);
  
    function submit(e) {
        e.preventDefault(); 
        setIsFormDirty(true);
    }
  
    // If the form is not dirty, redirect to "/Home"
    if (!isFormDirty) {
        return <Redirect to="/Home" />;
    }

    return (
        <div>
            <h1>My Component</h1>
            <form>
                <button onClick={submit}>Submit</button>
            </form>
        </div>
    );
}

export default MyComponent;

