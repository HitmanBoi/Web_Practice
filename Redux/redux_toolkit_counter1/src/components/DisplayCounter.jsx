import { useSelector } from "react-redux"

const DisplayCounter = () => {
 
    const {counterVal} = useSelector(store => store.counter)

    // const counterVal = useSelector(store => store.counter)
    // const counterValue = counterVal.counterVal

    return (
        <p className="lead mb-4">
            Counter Current Value : {counterVal}
        </p>
    )
}

export default DisplayCounter