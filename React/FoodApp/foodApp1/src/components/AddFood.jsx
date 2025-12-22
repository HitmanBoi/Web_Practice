let AddFood = ({inputChangeHandler}) => {
    return(
        <>
        <input type="text" placeholder="Enter the food item"
        onKeyDown={inputChangeHandler}></input>
        </>
    );
}

export default AddFood;