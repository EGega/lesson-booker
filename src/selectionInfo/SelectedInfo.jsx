import { useSelector } from "react-redux"
import { selectCart } from "../store"
const SelectedInfo = () => {
    const cart = useSelector(selectCart)
    console.log(cart);
return (
    <div>
      
    </div>
)
}

export default SelectedInfo