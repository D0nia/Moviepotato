import React from 'react';
import MovieCard from './movie-card'
import Hoc from './loadingspinner'
import {Card} from 'react-bootstrap';


const Cardinfo = ({cards, onAddMovie = () => {}}) => {
  return ( <div className="infocard">
          {  cards.map((el)=> <MovieCard  key={el.id} cards={el}/>)} 
          <Card  style={{ width: '19rem' }} >
           <img  className="plusbutton" src="https://www.iconsdb.com/icons/preview/black/plus-5-xxl.png" alt="plus-btn" width="250px"/>
        </Card>
        </div>
        
  );
}


export default Hoc(Cardinfo);