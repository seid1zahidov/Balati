import "./Products.scss"
import { useParams } from "react-router-dom"
import data from "../../../data/data.json"
const SingleProduct = () => {


  const productId: any = useParams();

  const product = data.cardData.card.find(product => product.id == productId.id)

  return (
    <section id="ProductsDetails">
      <div className="container">
        <h3>Name: {product?.name}</h3>
        <h3>Details: {product?.details}</h3>
        <h3>Price: {product?.money}</h3>
        <h3>Category: {product?.category}</h3>
        <img src={product?.picture} alt='someImage' />
      </div>
    </section>
  )
}

export default SingleProduct