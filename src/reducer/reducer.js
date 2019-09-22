import { ADD_MOVIE } from '../actions/types'
import uuid from 'uuid'
 

const cards =[ 
    {   id:uuid(),
        title:"Spirited Away",
        releaseDate:"2001",
        rating:"5",
        img:require('../movie-imgs/spiritedAway.jpg')
    },
    {   id:uuid(),
        title:"Colorful",
        releaseDate:"2013",
        rating:"3",
        img:require('../movie-imgs/colorful.jpg')
    },
    {   id:uuid(),
        title:"The Beast and The Boy",
        releaseDate:"2015",
        rating:"5",
        img:require('../movie-imgs/beastAndBoy.jpg')
    },
    {   id:uuid(),
        title:"Kimi No Na Wa",
        releaseDate:"2016",
        rating:"4",
        img:require('../movie-imgs/kimiNoNawa.jpg')
    }
    
    ]


  const Reducer = (state = cards, action) =>{
      switch (action.type){
        case ADD_MOVIE:
            return state.push(action.newMovie)  
            
            
            
            
            
            
            
            
            
            default:
                return state
      }
      
  }
  

  export default Reducer;