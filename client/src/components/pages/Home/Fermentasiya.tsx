import { Link } from "react-router-dom"
import { routes } from "../../../routes"
import './home.scss'
import text from "./text.json"
const Fermentasiya = () => {
  return (
    <section id="Fermentasiya"> 
      <div className="container">
        <div className="text">
            <p>{text.su}</p>
            <hr />
            <span>Təbii üsullarla <b>fermentasiya</b> olunmuş xəmirdən çörəklər və un məmulatları.</span>
        </div>
        <div className="row">
          <div className="image">
              <img src={text.left} alt={text.left} />
          </div>
          <div className="text-image">
            <p>{text.about}</p>
            <img src={text.right} alt={text.right} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fermentasiya