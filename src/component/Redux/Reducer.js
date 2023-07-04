const initial ={
    ApiData:[],
    SigleApiData:[]
}

const MyReducer =(State=initial,Action)=>{
    switch(Action.type){
        case 'ApiData':
            State={
               ...State,
               ApiData:Action.payload
            }
            break;
            case 'sigleApi':
            State={
               ...State,
               SigleApiData:Action.payload
            }
            break;
    }
   return State
}
export default MyReducer