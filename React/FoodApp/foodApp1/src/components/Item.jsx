import styles from"./Item.module.css"
let Item = ( {foodItem , handleBuyButton , bought}) => {
    
    return (

    <li className={`list-group-item ${styles.item} ${bought && "active"}`}>
        <span>{foodItem}</span>
        <button className={`${styles.bttn} btn btn-info`}
        onClick={handleBuyButton}>
            Buy
        </button>
    </li>

   
    );
}

export default Item