
class Covers extends Component {
    state = { 
        covers:[],
        query:"eminem"
     }

    
showCovers(){
    let getData = this.state.covers
    console.log(getData)
}
     componentDidMount= async () =>{
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.state.query}`)
        let data = await response.json()
        this.setState({covers:data})
    }



    componentDidUpdate = async() =>{


    }
    
    render() { 
        return ( 
            <div class="row mb-3 text-center">
        {/**Covers Go here */}
                </div>
         );
    }
}
 
export default Covers;