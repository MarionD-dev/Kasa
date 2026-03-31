import imgbanner from '../../assets/imgbanner.png'
import './banner.css'

function Banner({ text }) {
  return (
    <div className="banner">
      <img src={imgbanner} alt="Banner Image" />
      {text && <p>{text}</p>}
    </div>
  )
}

export default Banner