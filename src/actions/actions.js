import {ADD_MOVIE} from './types'
import uuid from 'uuid'

// addNewMovie(newMovie) {
//     this.setState({
//       x: this.state.x.push(newMovie)
//     })
//   }

export const addNewMovie = dispatch => {
    return {
        onAddMovie: () => {
             dispatch({
              type : ADD_MOVIE,
              newMovie: {
                id: Math.random(),
                title: prompt('movie title: '),
                rating: Number(prompt('movie rating: ')),
                releaseDate: Number(prompt('movie year: ')),
                img : prompt('movie img: ')
            }
        })
    }
        
    }   
}