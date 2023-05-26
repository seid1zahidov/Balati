import "./Products.scss"
import { useParams } from "react-router-dom"
import data from "../../../data/data.json"
import text from "./text.json"
const SingleProduct = () => {

  const productId: any = useParams();

  const product = data.cardData.card.find(product => product.id == productId.id)

  return (
    <section id="ProductsDetails">
      <div className="container">
        <div className="row">
          <div className="left">
            <div className="left-container">
              <ul>
                <li className="category">{product?.category}</li>
                <li className="name">{product?.name.toUpperCase()}</li>
                <li className="details">{product?.details}</li>
                {/* <li className="money">{product?.money}</li> */}
              </ul>
            </div>

          </div>
          <div className="right">
            <div className="containers">
              <div className="text">
                <img src={text["right-line"]} alt="" />
                <span>Məhsullara geri qayıt</span>
              </div>
              <div className="image">
                <img src={product?.picture} alt={product?.picture} />
              </div>
              <div className="product">
                <div className="containerr">
                  <div className="price">
                    <p>Qiymət:  <b>{product?.money}man</b></p>
                  </div>
                </div>
              </div>
              <div className="descirption">
                {product?.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct