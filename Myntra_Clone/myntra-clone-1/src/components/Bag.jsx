import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import Explore from "./Explore";

const Bag = () => {

  const bagItemsIds = useSelector(store => store.bag)
  const allItems = useSelector(store => store.items)
  const items = allItems.filter(item => {
    const itemIndex = bagItemsIds.indexOf(item.id)
    return itemIndex >= 0;
  })

  console.log(bagItemsIds.length)
    return (
    <main>
      {bagItemsIds.length != 0 ?
      <div className="bag-page">
        <div className="bag-items-container">
          {items.map((item)=> <BagItem key={item.id} item={item}/>)}
        </div>
        <div className="bag-summary">
            <BagSummary items={items}/>
        </div>
      </div>
      :
      <Explore/>
      }
    </main>
    )
}

export default Bag;