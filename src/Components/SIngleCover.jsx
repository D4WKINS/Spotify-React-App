import { Link} from 'react-router-dom'
const SingleCover = (props) => {

            return props.data.map((song) =>
         
                <div key={song.id} className="col col-12 col-sm-6 col-md-4 col-lg-2 p-2  ">
                <Link to="/album" onClick={()=> props.getId(song.id)} >
                    <img
                        src={song.album.cover}
                        className="img-fluid mb-1 homePageImage shadow"
                        alt=""
                    />
                </Link>
                <p className="mt-2 text-white font-weight-bold">{song.album.title}</p>
               
                </div>
             
        )
}
 
export default SingleCover;