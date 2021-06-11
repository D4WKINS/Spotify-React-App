import {Component} from 'react'
import TopBar from './TopBar'
import Covers from './Covers'

 class Home extends Component {
     render() { 
         return ( 
            <>
            <TopBar />
            <Covers sendQuery={this.props.newQuery}/>
            {/* <h2 className="text-white">Le Original Bad Ass :)</h2> */}
         
            </>
          );
     }
 }
  
 export default Home;
