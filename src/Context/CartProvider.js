import CartContext from "./CartContext";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";
const cartReducer = (prevState, action) => {
  if (action.type === "ADD_ITEM") {
    let CartItem ;
    const CartItemIndex=prevState.items.findIndex((item)=>{return item.id==action.item.id});
    let selectedItem=prevState.items[CartItemIndex];
    if(selectedItem)
    {
        
         const updatedItem={...selectedItem,quantity:parseInt(selectedItem.quantity)+parseInt(action.item.quantity)}
         
         CartItem= [...prevState.items];
         CartItem[CartItemIndex]=updatedItem;
    }
    else
    {
      CartItem= prevState.items.concat(action.item);
    }

    const totalValue =
      prevState.totalAmount +
      parseInt(action.item.quantity) * parseInt(action.item.price);

    return { items: CartItem, totalAmount: totalValue };
  }
  if (action.type === "REMOVE_ITEM") {
     
     const itemIndex=prevState.items.findIndex((item)=>{return item.id==action.id});

     const selectedItem=prevState.items[itemIndex];
     let updatedItems=[];
     let updatedprice=0;
     if(selectedItem.quantity==1)
     {
        updatedItems=[...prevState.items];
        updatedItems.splice(itemIndex,1); 
        
 
     }
     else
     {
         const updatedItem={...selectedItem,quantity:selectedItem.quantity-1};
         
        updatedItems=[...prevState.items];
        updatedItems[itemIndex]=updatedItem;

     }
     updatedprice=prevState.totalAmount-selectedItem.price;
     return { items: updatedItems, totalAmount: updatedprice };
  }
};
const IntialValue = {
  items: [],
  totalAmount: 0,
};
const CartProvider = (props) => {
  const AddItemHandler = (item) => {
    
    cartDispatcher({ type: "ADD_ITEM", item: item });
  };
  const RemoveItemHandler = (id) => {
    cartDispatcher({ type: "REMOVE_ITEM", id: id });
    
  };
  const [cartState, cartDispatcher] = useReducer(cartReducer, IntialValue);
  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: AddItemHandler,
        removeItem: RemoveItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
