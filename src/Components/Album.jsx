import { useEffect } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
const Album = (props) => {

  useEffect(()=>{
      console.log(props.id)
      console.log(props.match.location)
  },[])



    return ( 
        <>
        <Container>
        <Row>
          <Col xs={12} md={6}>
            <div id="albumSection" class="col-sm-12 col-md-6 Album text-center">
            <div class="Album-Image mt-5 mt-sm-4 mt-md-0">
                <img
                  class="img-fluid"
                  src="https://i.scdn.co/image/ab67616d00001e02d92f69c3b3adb389afdde64f"
                  alt="Queen II (Deluxe Edition 2011 Remaster)"
                />
              </div>
              <div class="Album-Title text-white text-center mt-2">
                Queen II (Deluxe Edition 2011 Remaster)
              </div>
              <div class="Artists text-center">Queen</div>
              <div class="play-btn-place text-center">
                <button type="button" class="btn btn-play">PLAY</button>
              </div>
              <div class="Album-Year-Num-Songs mt-3">
                <span class="Album-Year">1974</span>
                <span class="dot">•</span>
                <span class="Album-Num-Songs">16 SONGS</span>
              </div>
              <div class="Icons text-white mb-4">
                <span class="Save-to-Your-Library-Icon text-white text-center">
                  <button
                    type="button"
                    role="switch"
                    aria-checked="false"
                    aria-label="Save to Your Library"
                    class="btn"
                    title="Save to Your Library"
                  >
                    <svg
                      role="img"
                      height="32"
                      width="32"
                      viewBox="0 0 32 32"
                      class=""
                    >
                      <path
                        d="M27.672 5.573a7.904 7.904 0 00-10.697-.489c-.004.003-.425.35-.975.35-.564 0-.965-.341-.979-.354a7.904 7.904 0 00-10.693.493A7.896 7.896 0 002 11.192c0 2.123.827 4.118 2.301 5.59l9.266 10.848a3.196 3.196 0 004.866 0l9.239-10.819A7.892 7.892 0 0030 11.192a7.896 7.896 0 00-2.328-5.619zm-.734 10.56l-9.266 10.848c-.837.979-2.508.979-3.346 0L5.035 16.104A6.9 6.9 0 013 11.192 6.9 6.9 0 015.035 6.28a6.935 6.935 0 014.913-2.048 6.89 6.89 0 014.419 1.605A2.58 2.58 0 0016 6.434c.914 0 1.555-.53 1.619-.585a6.908 6.908 0 019.346.431C28.277 7.593 29 9.337 29 11.192s-.723 3.6-2.062 4.941z"
                      ></path>
                    </svg>
                  </button>
                </span>
                <span class="Three-Dot-Icon text-white text-center">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-label="More"
                    class="btn"
                    title="More"
                  >
                    <svg
                      role="img"
                      height="32"
                      width="32"
                      viewBox="0 0 32 32"
                      class=""
                    >
                      <path
                        d="M5.998 13.999A2 2 0 105.999 18 2 2 0 005.998 14zm10.001 0A2 2 0 1016 18 2 2 0 0016 14zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z"
                      ></path>
                    </svg>
                  </button>
                </span>
              </div>
              </div>
          </Col>
          <Col xs={12} md={6}>
          <div class="col-sm-12 col-md-6">
            <div id="colOfSongs" class="song col-12 text-white">
               <div class="row">                         
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                Procession - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">1:13</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                Father To Son - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">6:13</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                White Queen (As It Began) - Remastered 2011 - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">4:33</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                Some Day One Day - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">4:22</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                The Loser In The End - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">4:01</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                Ogre Battle - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">4:08</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                The Fairy Feller's Master-Stroke - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">2:40</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                Nevermore - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">1:18</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                The March Of The Black Queen - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">6:32</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                Funny How Love Is - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">2:49</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                Seven Seas Of Rhye - Remastered 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">2:48</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                See What A Fool I've Been - Live BBC Session, London / July 1973
                / 2011 Remix
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">4:22</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                White Queen (As It Began) - Live At Hammersmith Odeon, London /
                December 1975
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">5:32</div>
            </div>
            <div class="row">
              <div class="song-icon col-1">
                <ion-icon name="musical-note-outline"></ion-icon>
              </div>
              <div class="song-title col-10">
                Seven Seas Of Rhye - Instrumental Mix 2011
                <div class="song-artists">Queen</div>
              </div>
              <div class="song-length col-1">3:00</div>
            </div> 
            </div>
            </Col>
            </Row>
            </Container>
            </>
        
     
     );
}
 
export default Album;