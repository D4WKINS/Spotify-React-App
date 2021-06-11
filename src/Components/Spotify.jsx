import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
/** <Navigation> */
import TopBar from './TopBar'
import SideBar from './SideBar'
/** </Navigation> */ 
import BottomBar from './BottomBar'
import { Row, Col } from 'react-bootstrap' 

/** <Pages> */
import Home from './Home'
import Artist from './Artist'
import Album from './Album'
import { useState} from 'react';
/** </Pages> */


const Spotify = () => {
    const [query,updateQuery] = useState("")

    const handleNewQuery = (query)=>{
        console.log(query)
        updateQuery(query)
    }
    return ( 
        <>
        <div>
        <Row>

            <Col md={2} className="p-0">
                <SideBar getQuery={(newQuery) => handleNewQuery(newQuery)}/>
            </Col>
            <Col md={10} style={{height:"100vh"}} className="homePageBody">
                <Home newQuery={query}/>
            </Col>

        </Row>
        <Row md={12}>
            <BottomBar/>
        </Row>
        </div>
        </>
     );
}
 
export default Spotify ;