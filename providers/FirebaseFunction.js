import { db } from "./FirebaseProvider";

getProfile=async(node)=>{
  try {
    const ref=await db.ref(node)
    await ref.once("value")
      .then(function(snapshot) {
        snapshot.forEach((childSnapshot) =>{
          return childSnapshot.val()

        } )
   })
  } catch (error) {
      console.log(error.message) ;
  }
      
      
  }

export default { getProfile } ;