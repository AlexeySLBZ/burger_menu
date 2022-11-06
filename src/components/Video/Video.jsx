import './Video.css'

export default function Video({myVids}){
  const videoEl = document.getElementsByTagName('video')[0],
    videoEl2 = document.getElementsByTagName('video')[1],
    playBtn = document.getElementById('playBtn'),
    vidControls = document.getElementById('controls'),
    volumeControl = document.getElementById('volume'),
    timePicker = document.getElementById('timer');

  const play =()=>{
    if (videoEl.paused&&videoEl2.paused) {
      videoEl.play();videoEl2.play();
    } else {
      videoEl.pause();videoEl2.pause();
    }
  }

    return (
      <div className="vrapper-video">
        <div id="controls" className="hidden">
          <span
            id="playBtn"
            onClick={()=>{play()}}>Play</span>
          <span id="timer">00:00</span>
          <input type="range" step="0.1" min="0" max="1" value="0" id="volume"/>
        </div>
        {myVids.map((item, index)=>
          <video
            src={item}
            key={index}
            controls
            playsinline
            muted
            crossorigin
          />
        )};
      </div>
    )

  }
