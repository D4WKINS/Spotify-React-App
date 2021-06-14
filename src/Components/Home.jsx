import {Component} from 'react'
import TopBar from './TopBar'
import Covers from './Covers'

 class Home extends Component {
     handleId=(id)=>{
         console.log(id)
        this.props.getId(id)
     }
     render() { 
         return ( 
            <>
            <Covers query={this.props.newQuery} getId={(albumId)=>this.handleId(albumId)}/>
            {/* <h2 className="text-white">Le Original Bad Ass :)</h2> */}
         
            </>
          );
     }
 }
  
 export default Home;
