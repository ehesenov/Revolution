let data=[]

const paltarReducer=(state=data,action)=>{
    console.log(action)
        switch(action.type){
            case "API_DATA":
             return action.payload

         default:
                   return state
        }
}

export default paltarReducer