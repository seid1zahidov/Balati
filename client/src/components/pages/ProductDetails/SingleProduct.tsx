import "./Products.scss"
import {Link , useParams} from "react-router-dom"
import data from "../../../data/data.json"
const SingleProduct = () => {
  // const {productId} = useParams();

  // const product = data.cardData.card.find((pro):any => pro.id && productId);
  // const {name}: any = product
  return (
    <section id="ProductsDetails">
      <div className="container">
          {/* {name} */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, culpa incidunt sapiente laboriosam, minus eaque perferendis ipsam, consequuntur commodi optio ducimus. Quo quas molestiae exercitationem sint vitae, voluptates numquam enim!
      </div>
    </section>
  )
}

export default SingleProduct