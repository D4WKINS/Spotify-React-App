const SingleCover = (props) => {

            return props.data.map((song) =>
                <div key={song.id} class="col col-12 col-sm-6 col-md-4 col-lg-2 p-2">
                <img
                    src={song.album.cover}
                    class="img-fluid mb-1 homePageImage"
                    alt=""
                />
                <p class="mt-2 font-weight-bold">{song.album.title}</p>
                </div>
        )
}
 
export default SingleCover;