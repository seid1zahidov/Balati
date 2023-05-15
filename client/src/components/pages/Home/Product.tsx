import Cart from "./Cart"
import "./home.scss"
import text from "./text.json"
const Product = () => {
    return (
        <section id="Product">
            <div className="container">
                <div className="center">
                    <b>Məhsullar</b>
                    <hr />
                    <p>Müxtəlif çeşidli məhsullar. Çörəklər qədim daş kürədə <b>Qaz və Odun</b> atəşi ilə bişirilirlər. - Balatı çörəyi, Azərbaycanlı tərəfindən, Azərbaycan <b>Mehsullarından</b> və Azərbaycanda bişən əsil Azərbaycanlıdır!</p>
                </div>
                <div className="">
                    <Cart />
                </div>
            </div>
        </section>
    )
}

export default Product