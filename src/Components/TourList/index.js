import React,{Component} from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import {tourData} from '../../tourData';

export default class TourList extends Component{
state={
  tours:tourData
};

removeTour = id =>{
  const {tours} = this.state;
const sortTours = tours.filter(toure =>toure.id !== id);
this.setState({
  tours:sortTours
});
};

  render(){
 const {tours} = this.state;
    return(
      <section className='tourList'>
      {
        tours.map(tour=>(<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />))
      }

      </section> );
  }
}
