import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
/** <Navigation> */
import TopBar from './TopBar'
import SideBar from './SideBar'
/** </Navigation> */ 
import BottomBar from './BottomBar'
import { Container, Row, Col } from 'react-bootstrap' 

/** <Pages> */
import Home from './Home'
import Artist from './Artist'
import Album from './Album'
import { useState} from 'react';
/** </Pages> */


const Spotify = (props) => {
    const [query,updateQuery] = useState("")
    const [albumId, setAlbumId] = useState("")

    const handleNewQuery = (query)=>{
            updateQuery(query)
            console.log(query)
    }
    const handleAlbumId = (id) =>{
            console.log(id)
            setAlbumId(id)
    }
    return ( 
        <Router>
        <>
        <Row>
       
            <Col md={2} className="p-0">
                <SideBar getQuery={(newQuery) => handleNewQuery(newQuery)}/>
            </Col>
            <Col md={10}  className="homePageBody">
            <TopBar/>
            <Switch>{/** routerprops sends the match property that contains props history, location, params etc*/}
                <Route path="/" exact render={(routerProps) => <Home {...routerProps} newQuery={query} getId={(albumId) =>handleAlbumId(albumId) } />}/>
            
                <Route path="/album"  exact render={(routerProps) => <Album {...routerProps} id={albumId}/>}/>
            </Switch>
            </Col>
        </Row>

        <Row md={12}>
            <BottomBar/>
        </Row>
    
        </>
        </Router>
     );
}
 
export default Spotify ;