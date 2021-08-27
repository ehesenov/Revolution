let data=[]

const cardReducer=(state=data,action)=>{
    console.log(action)
        switch(action.type){
            case "CARD_DATA":
             return [...state,action.payload]

         default:
                   return state
        }
}

export default cardReducer