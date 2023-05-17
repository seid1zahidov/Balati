import "./Products.scss"
import { useEffect, useState } from "react";
import data from "../../../data/data.json"
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
export interface Card {
  data: {
    id: number;
    name: string;
    picture: string;
    money: number;
    category: string;
    details: string;
  }
}
const Products = () => {
  const [datas, setData] = useState<any>([]);
  const [collection, setCollection] = useState<any>([]);

  useEffect(() => {
    setData(data.cardData.card);
    setCollection(Array.from(new Set(data.cardData.card.map((item) => item.category))));

  }, [])

  const gallery_filter = (category: string) => {
    const filterData = data.cardData.card.filter((item) => item.category === category);
    setData(filterData);
  };
  return (
    <section id="ProductPage">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={() => setData(data.cardData.card)}>HAMISI</button></li>
            {
              collection.map((item: string) => <li><button onClick={() => { gallery_filter(item) }}>{item}</button></li>)
            }
          </ul>
          <hr />
          <div className="text">
            <span>Balatı çörəyi, Azərbaycanlı tərəfindən, Azərbaycan  mehsullarından və Azərbaycanda bişən əsil Azərbaycanlıdır!</span>
          </div>
        </div>
        <div className="all">
          <div className="galleryContainer">
            {
              datas.map((item: any) => <div style={{ width: "31%" }}>
                <Link className="decaration" to={`./${item.id}`}>
                  <div key={item.id} className="galleryItem">
                    <img src={item.picture} alt={item.picture} />
                    <div className="container">
                      <p>{item.category}</p>
                      <span>{item.name}</span>
                    </div>
                  </div>
                </Link>
              </div>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products