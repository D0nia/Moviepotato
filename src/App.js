import React, { Component } from 'react';
import Search from './components/search-filter';
import Cardinfo from './components/cardinfo';
import RatingF from './components/rating-filter';
import './App.css';
import { Container } from 'react-bootstrap';
// import uuid from 'uuid'

// const cards =[ 
//   {   id:uuid(),
//       title:"Spirited Away",
//       releaseDate:"2001",
//       rating:"5",
//       img:require('../src/movie-imgs/spiritedAway.jpg')
//   },
//   {   id:uuid(),
//       title:"Colorful",
//       releaseDate:"2013",
//       rating:"3",
//       img:require('../src/movie-imgs/colorful.jpg')
//   },
//   {   id:uuid(),
//       title:"The Beast and The Boy",
//       releaseDate:"2015",
//       rating:"5",
//       img:require('../src/movie-imgs/beastAndBoy.jpg')
//   },
//   {   id:uuid(),
//       title:"Kimi No Na Wa",
//       releaseDate:"2016",
//       rating:"4",
//       img:require('../src/movie-imgs/kimiNoNawa.jpg')
//   }
  
//   ]


class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       minRatingFilter: 3,
//       titleFilter : '',
//       // x:cards,
//       isloading:true
//     }
// }
// addNewMovie(newMovie) {
//   this.setState({
//     x: this.state.x.push(newMovie)
//   })
// }
// componentDidMount=()=>{
//   setTimeout(() => { this.setState({isloading:!this.state.isloading})
    
//   }, 3000);
// }

  render() { 
    return ( <div className="App">
        {/* <Search  />value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
              this.setState({
                titleFilter: newTitleFilter
              })
            }}  */}
         <RatingF/>
         <Container>
            <Cardinfo />
             {/* x={cards.filter(el => 
              el.rating >= this.state.minRatingFilter &&
              el.title.toLowerCase().includes (this.state.titleFilter.toLocaleLowerCase())
               )}
               onAddMovie={(newMovie) => this.addNewMovie(newMovie)}
             isloading={this.state.isloading}  */}
          </Container>
         </div> );
  }
}
 
export default App ;

