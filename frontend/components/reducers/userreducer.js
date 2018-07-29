export default function(state=0,actions={}){
   switch (actions.type) {
       case "Username":
       return{
           Username:actions.payload,
           class:state.class,
           rollno:state.rollno,
       }
           break;
       case "rollno":
       return{
           Username:state.username,
           class:state.class,
           rollno:actions.payload,
       }
           break;
       case "class":
       return{
           Username:state.username,
           class:actions.payload,
           rollno:state.rollno,
       }
           break;

       default:{
           return{
               Username:null,
               class:null,
               rollno:null
           }
       }

   }

}
