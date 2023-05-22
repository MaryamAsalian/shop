export const Validation = (data , type) =>{

    const error = {};

   
   
    if(!data.email){
        error.email= "* Pflichtfeld"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        error.email= "* Pflichtfeld"
    }else{
        delete error.email
    }
    if(!data.password){
        error.password ="* Pflichtfeld"
    }else if (data.password.length<6) {
        error.password ="* Pflichtfeld"
    }else {
        delete error.password
    }


    
   
    if (type==="signup"){

        if(!data.name){
            error.name = "* Pflichtfeld"
         }else{
             delete error.name
         }
         if(!data.nachname){
             error.nachname = "* Pflichtfeld"
          }else{
              delete error.nachname
          }
          if(data.isAccept){
            delete error.isAccept
        }else{
            error.isAccept ="* Pflichtfeld"
        }

    }

    return error ;

}