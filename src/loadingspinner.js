
import React , {Component} from 'react';
import Loader from 'react-loader-spinner'

const Hoc = ( WrappedComponent ) => {
   return class Hoc extends Component {
      render (){
            return this.props.loading ? <Loader type="Grid" color="#ffc107" height={80} width={80} /> : <WrappedComponent {...this.props} />
         }       
   }
}

 
export default Hoc;