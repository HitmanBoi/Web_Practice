import { Link } from "react-router-dom";

const Explore = () => {
    return(
        <>
        <center>
        <h4>Nothing in Cart</h4>
        <Link to={'/'}>
        <button className="btn btn-warning">Explore Products</button>
        </Link>
        </center>
        </>
    )
}

export default Explore;