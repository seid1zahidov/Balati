import { Link } from "react-router-dom"
import { routes } from "../../../routes"
//salam
const Fermentasiya = () => {
  return (
    <div>Salam



      Link secont page <Link to={routes.secont.path} >
        salam
      </Link>
    </div>
  )
}

export default Fermentasiya