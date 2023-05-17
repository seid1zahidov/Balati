import "./Products.scss"
import { useParams } from "react-router-dom"
import data from "../../../data/data.json"
const SingleProduct = () => {


  const productId: any = useParams();

  const product = data.cardData.card.find(product => product.id == productId.id)

  return (
    <section id="ProductsDetails">
      <div className="container">
        <div className="row">
          <div className="left">
            <ul>
              <li className="category">{product?.category}</li>
              <li className="name">{product?.name.toUpperCase()}</li>
              <li className="details">{product?.details}</li>
              {/* <li className="money">{product?.money}</li> */}
            </ul>
          </div>
          <div className="right">
          Məhsullara geri qayıt
          <img src={product?.picture} alt={product?.picture} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct