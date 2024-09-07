import { cardItem } from "../constants";
import Card from "./Card";
import CardItemCategory from "./CardItemCategory";

const CardNavigate = () => {
  return(
   <Card styles={`grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-10`}>
      {
        cardItem.map((card) => (
          <CardItemCategory key={card.id} card={card} />
        ))
      }
   </Card>
  )
}

export default CardNavigate;
