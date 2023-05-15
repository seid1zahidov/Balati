import "./Footer.scss"
import text from "./text.json"
const Footer = () => {
  return (
    <section id="Footer">
      <div className="container">
        <div className="row">
          <div className="left">
            <ul>
              <li>Ana səhifə</li>
              <li>Haqqımızda</li>
              <li>Mağaza</li>
              <li>Azərbaycan</li>
            </ul>
          </div>
          <div className="center">
            <img src={text.logo} alt={text.logo} />
            <h1>BALATI ÇÖRƏYİ</h1>
            <p>©2020 BREAD Artisan Bakery</p>
          </div>
          <div className="right">
            <ul>
              <li><h1>Əlaqə</h1></li>
              <li>info@balatıçörəyi.com</li>
              <li>Bakı, Azərbaycan CA 92705</li>
              <li>+99455 855-28-23</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer