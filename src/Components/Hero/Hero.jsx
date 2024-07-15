import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

export const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
          <p>Digital Advertisement Services</p>
          <img src={arrow_btn} alt="arrow button"/>
        </div>
        <div className="hero-dot-play">
          <ul className="hero-dots">
            <li className={heroCount===0 ? 'hero-dot orange' : 'hero-dot'} onClick={()=>setHeroCount(0)}></li>
            <li className={heroCount===1 ? 'hero-dot orange' : 'hero-dot'} onClick={()=>setHeroCount(1)}></li>
            <li className={heroCount===2 ? 'hero-dot orange' : 'hero-dot'} onClick={()=>setHeroCount(2)}></li>
          </ul>
          <div className="hero-play">
            <img src={playStatus ? pause_icon : play_icon} alt="play button" onClick={()=>setPlayStatus(!playStatus)}/>
            <p>See the video</p>
          </div>
        </div>
    </div>
  )
}
