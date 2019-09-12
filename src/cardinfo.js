import React, { Component } from 'react';
import MovieCard from './movie-card'
import Hoc from './loadingspinner'
import {Card} from 'react-bootstrap';


const Cardinfo = ({x = [], onAddMovie = () => {}}) => {
  return ( <div className="infocard">
          {  x.map((el)=> <MovieCard  key={el.id} cards={el}/>)} 
          <Card  style={{ width: '19rem' }}
            onClick={() => {
                onAddMovie({
                    id: Math.random(),
                    title: prompt('movie title: '),
                    rating: Number(prompt('movie rating: ')),
                    releaseDate: Number(prompt('movie year: ')),
                    img : prompt('movie img: ')
                })
            }} >
           <img  className="plusbutton" src="https://www.iconsdb.com/icons/preview/black/plus-5-xxl.png" width="250px"/>
        </Card>
        </div>
        
  );
}

 
export default Hoc(Cardinfo);