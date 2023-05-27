import './index.scss'
import text from "../text.json"
import { Link } from 'react-router-dom'
import { routes } from '../../../routes'
const Navbar = () => {
  return (
    <header id="Header">
      <div className="container">
        <div className="row">
          <div className="search">
            <img src={text.search} alt={text.Logo} />
          </div>
          <div className="center">
            <ul>
              <li>HAQQIMIZDA</li>
              <li>MAĞAZA</li>
              <li><Link to={routes.home.path}><img src={text.Logo} alt={text.Logo} /></Link></li>
              <Link className='Mehsullar' to={routes.Product.path}>
                <li>MƏHSULLAR</li>
              </Link >
              <li>ƏLAQƏ</li>
            </ul>
          </div>
          <Link to={"/card-details"}>
            <div className="basket">
              <img src={text.BasketLogo} alt={text.BasketLogo} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar