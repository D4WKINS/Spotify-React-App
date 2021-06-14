import SingleCover from './SingleCover'
import {Component} from 'react'

class Covers extends Component {
    state = { 
        covers:[]
     }

// searchArtist = (obj, query) => {
//     searchedArtists = []
//     const songsFound = obj.data
//     songsFound.forEach(
//         song => {
//             let songArtist = song.artist.name.toLowerCase()
//             if (songArtist.includes(query)) {
//                 searchedArtists.push(song.artist)
//             }
//         }
//     )
//     let idsArr = searchedArtists.map(a => a.id)
//     let uniqIds = [...new Set(idsArr)]
//     let uniqueArtists = uniqIds.map( unId => searchedArtists.find( a => a.id === unId))
//     return uniqueArtists
// }

// searchAlbum = (obj, query) => {
//     searchedAlbums = []
//     const songsFound = obj.data
//     songsFound.forEach(
//         song => {
//             let songAlbum = song.album.title.toLowerCase()
//             if (songAlbum.includes(query)) {
//                 searchedAlbums.push(song.album)
//             }
//         }
//     )
//     let idsArr = searchedAlbums.map(a => a.id)
//     let uniqIds = [...new Set(idsArr)]
//     let uniqueAlbums = uniqIds.map( unId => searchedAlbums.find( a => a.id === unId))
//     console.log(uniqueAlbums)
//     console.log(uniqueAlbums)
//     return uniqueAlbums
// }
    async fetchData(){
        try{
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.props.query}`)
        let data = await response.json()
        let albums = await data.data
        console.log(albums)

        
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
        if(prevProps.query !== this.props.query ){
            this.fetchData()
        console.log(prevProps)
        console.log(this.props.query)
        }
    }

    handleId(id){
        this.props.getId(id)
        console.log(id)
    }
  
  
    
    render() { 
        return ( 
            <div className="row text-center" style={{margin:"6rem auto"}}>
                    {this.state.covers && <SingleCover data={this.state.covers} getId={(albumId) => this.handleId(albumId)}/>}
            </div>
         );
    }
}
 
export default Covers;