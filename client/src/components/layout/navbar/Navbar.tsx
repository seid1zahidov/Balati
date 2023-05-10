import './index.scss'
import text from "../text.json"
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
                <li><img src={text.Logo} alt={text.Logo} /></li>
                <li>MƏHSULLAR</li>
                <li>ƏLAQƏ</li>
              </ul>
          </div>
          <div className="basket">
            <img src={text.BasketLogo} alt={text.BasketLogo} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar