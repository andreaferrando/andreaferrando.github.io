import React, { useState, useEffect }  from 'react'
import './Music.scss'
import musicData from '../../data/music'
// import YouTube from 'react-youtube';
import { images } from '../../constants';
import ReactAudioPlayer from 'react-audio-player';
import ReactGA from 'react-ga4';

const Project = () => {

  const [isOver, setIsOver] = useState('');
  const { music, otherMusic } = musicData
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
   }, [])

  const log = (song, platform) => {
    ReactGA.event({
      category: song,
      action: platform
    });
    ReactGA.event({
      category: platform,
      action: song
    });
    ReactGA.event({
      category: 'song',
      action: `${song} - ${platform}`
    });
  }

  const logPreview = (song) => {
    ReactGA.event({
      category: 'preview-song',
      action: song
    });
  }


  return (
    <>
      {/* <div id="background">
        <img src={images.background2} title="" alt=""  class="img-background"/>
      </div> */}
     
      <section id="music" className="music">
        <div className="container">
          <h2 className="section__heading">SINGLES</h2>
          <div className="music__display">
            <div className="row">
              {music.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12 py-3">
                    <div className="music__item comp">
                        <div className="music__item-img">
                        {/* {item.youtubeId ? 
                            (click === item.name ? renderVideo(item) : renderPreview(item))
                     
                        : <img className="img-fluid" src={item.img} alt={item.name} />} */}
                        <img className="img-fluid" src={item.img} alt={item.name}  />
                        </div>
                       {item.music_preview &&
                        <div className="container-audio-player">
                          <ReactAudioPlayer
                            src={item.music_preview}
                            controls
                            onPlay={(() => {logPreview(item.name)})} 
                            className = 'audio-player'
                          />
                        </div>
                        }
                        
                          {item.live ? (
                            <div className="streaming-component">
                            <div className='row '>
                              {item.spotify &&
                                <div className="streaming-wrapper bg-darkgray">
                                <a href={item.spotify} onClick={() => {log(item.name,"spotify")}} target="_blank" rel="noreferrer" style={{"textDecoration":"none"}}>
                                    <img className='streaming-img' src={images.spotify} alt={"spotify"}/>
                                </a>
                              </div>
                            }
                            {item.applemusic &&
                              <div className="streaming-wrapper bg-red">
                              <a href={item.applemusic} onClick={() => {log(item.name,"applemusic")}} target="_blank" rel="noreferrer" style={{"textDecoration":"none"}}>
                                  <img className='streaming-img' src={images.applemusic} alt={"applemusic"}/>
                              </a>
                            </div>
                            }  
                            {item.youtube &&
                              <div className="streaming-wrapper bg-offwhite">
                              <a href={item.youtube} onClick={() => {log(item.name,"youtube")}} target="_blank" rel="noreferrer" style={{"textDecoration":"none"}}>
                                  <img className='streaming-img' src={images.youtube} alt={"youtube"}/>
                              </a>
                            </div>
                            } 
                            {item.itunes &&
                              <div className="streaming-wrapper bg-darkgray">
                              <a href={item.itunes} onClick={() => {log(item.name,"itunes")}} target="_blank" rel="noreferrer" style={{"textDecoration":"none"}}>
                                  <img className='streaming-img' src={images.itunes} alt={"itunes"}/>
                              </a>
                            </div>
                            } 
                            {item.amazon &&
                              <div className="streaming-wrapper bg-offwhite">
                              <a href={item.amazon} onClick={() => {log(item.name,"amazon")}} target="_blank" rel="noreferrer" style={{"textDecoration":"none"}}>
                                  <img className='streaming-img' src={images.amazon} alt={"amazon"}/>
                              </a>
                            </div>
                            } 
                            {item.pandora &&
                              <div className="streaming-wrapper bg-offwhite">
                              <a href={item.pandora} onClick={() => {log(item.name,"pandora")}} target="_blank" rel="noreferrer" style={{"textDecoration":"none"}}>
                                  <img className='streaming-img' src={images.pandora} alt={"pandora"}/>
                              </a>
                            </div>
                            } 
                            {item.deezer &&
                              <div className="streaming-wrapper bg-offwhite">
                              <a href={item.deezer} onClick={() => {log(item.name,"deezer")}} target="_blank" rel="noreferrer" style={{"textDecoration":"none"}}>
                                  <img className='streaming-img' src={images.deezer} alt={"deezer"}/>
                              </a>
                            </div>
                            } 
                          </div> 
                          </div> 
                          )
                          : (
                            <div className="release-soon-component">
                              <div className="comingsoon-wrapper">
                                <img src={images.coming_soon} alt={"coming soon"}/>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                )
              })}
            </div>
            
          </div>
          <>{otherMusic.length > 0 && (
          <><h2 className="section__heading">COVERS</h2>
          <div className="cover__display">
            {
              React.Children.toArray(
                otherMusic.map((item) => {
                  return (
                    <div class="aacontainer">
                      <a
                          href={item.youtube}
                          onMouseOver={() => {
                            setIsOver(item.name);
                          }}
                          onMouseOut={() => {
                            setIsOver('');
                          }}
                        >
                      <img className="aabox" src={item.img} alt={item.name} />
                      {isOver === item.name && 
                        <div className='hov-ww'>
                          <div class="aabox aastack-top" />
                          <img className="playBtn" src={images.playbtn} alt={'play'} />
                        </div>
                      }
                      </a>
                    </div>
                  )
                })
              )
            }
              
          </div>
          </>)
          }
          </>
        </div>
      </section>
    </>
  )
}

export default Project

