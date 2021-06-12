import SingleCover from './SingleCover'
import {Component} from 'react'

class Covers extends Component {
    state = { 
        covers:[]
     }

//  fetchMusic = async() =>{
//     let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.query}`)
//     let data = await response.json()
//     this.setState({covers:data.data})
//     console.log(this.state.covers)
//     }

    async fetchData(){
        try{
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.props.query}`)
        let data = await response.json()
        this.setState({covers:data.data})
        console.log(this.state.covers)
        }
        catch(err){
            console.log("Oh shit",err)
        }
    }

     componentDidMount = async() =>{
                this.fetchData()
        }
    componentDidUpdate = (prevProps,prevState)=>{
        if(prevProps.query !== this.props.query && this.props.query.length > 4){
            this.fetchData()
        console.log(prevProps)
        console.log(this.props.query)
        }
    }
  
  
    
    render() { 
        return ( 
            <div className="row mb-3 text-center">
                    {this.state.covers && <SingleCover data={this.state.covers}/>}
            </div>
         );
    }
}
 
export default Covers;