import imgbanner from '../../assets/imgbanner.png'
import './banner.css'

function Banner({ text, overlay = 0.6 }) {
  return (
    <div className="banner">
      <img src={imgbanner} alt="Banner Image" />
      <div className="banner__overlay" style={{ backgroundColor: `rgba(0, 0, 0, ${overlay})` }}></div>
      {text && <p>{text}</p>}
    </div>
  )
}

export default Banner