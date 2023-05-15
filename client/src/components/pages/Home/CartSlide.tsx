import "./home.scss"

export interface PropsTypes {
    data: {
        id: number;
        name: string;
        picture: string;
        money: number;
        category: string;
        details: string;
    }
}
const CartSlide = ({data}: PropsTypes) => {
    return (
        <div className="all">
            <img  src={data.picture} alt={data.picture} />
            <p>{data.category}</p>
            <span>{data.name}</span>
        </div>
    )
}

export default CartSlide