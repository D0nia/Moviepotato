
import React , {Component} from 'react';
import { Spinner } from 'reactstrap';


const Hoc = ( WrappedComponent ) => {
   return class Hoc extends Component {
      render (){
            return this.props.loading ?  <Spinner type="grow" color="danger" /> : <WrappedComponent {...this.props} />
         }       
   }
}

 
export default Hoc;