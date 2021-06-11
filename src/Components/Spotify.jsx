import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
/** <Navigation> */
import TopBar from './Components/TopBar'
import SideBar from './Components/SideBar'
/** </Navigation> */ 
import BottomBar from './Components/BotttomBar'

/** <Pages> */
import Index from './Components/TopBar'
import Artist from './Components/Artist'
import Album from './Components/Album'
/** </Pages> */

const Spotify = () => {
    return ( 
        <>
        <div>
            <TopBar/>
            

        </div>
        </>

     );
}
 
export default Spotify ;