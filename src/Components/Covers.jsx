import SingleCover from './SingleCover'
import {Component} from 'react'

class Covers extends Component {
    state = { 
        covers:[],
        query:this.props.query
     }


 fetchMusic = async() =>{
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.query}`)
    let data = await response.json()
    this.setState({covers:data.data})
    console.log(this.state.covers)
}
     componentDidMount= async () =>{
        fetchMusic()
         
    
    }
    componentDidUpdate = async () =>{
        fetchMusic()
    }


    
    render() { 
        return ( 
            <div class="row mb-3 text-center">
                    {this.state.covers && <SingleCover data={this.state.covers}/>}
            </div>
         );
    }
}
 
export default Covers;