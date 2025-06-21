// import { useDispatch, useSelector } from "react-redux";

// const Cart = () => {
//     const dispatch = useDispatch();
// // const {
// //    userReducer:{users},
// //    productReducer:{products},
// // } =  useSelector((state)=> state);
// const users =  useSelector((state)=> state.userReducer.users);
// const products =  useSelector((state)=> state.productReducer.products);

// const cartItems = users.cart.map((c)=>{
 
//   return ( 
//      <li key={c.product.id || Math.random()} className="p-5 flex justify-between">
//         <img className="w-[10vmax] h-[10vmax] rounded-full" src={c.product.image} alt="" />
//         <span>{c.product.title}</span>
//         <span>{c.product.price}</span>
//         <p>
//             <span>-</span>
//             <span>{c.quantity}</span>
//             <span>+</span>
//         </p>
//     </li>
//     );
// })

//   return <ul>{cartItems}</ul>
// }

// export default Cart


import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/UserAction";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  // const products = useSelector((state) => state.productReducer.products);

  const IncreaseQuantityHandler = (index) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const DecreaseQuantityHandler = (index) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if (users.cart[index].quantity > 0) {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1,
      };
    } else {
      copyuser.cart.splice(index, 1);
    }
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const cartItems =
    users && Array.isArray(users.cart)
      ? users.cart.map((c, index) => {
          return (
            <li
              className="flex items-center justify-between mb-10 bg-gray-700 p-2 rounded"
              key={c.product?.id || index}
            >
              <img
                className="mr-10 w-[7vmax] h-[7vmax] object-cover"
                src={c.product?.image || ""}
                alt=""
              />
              <span>{c.product?.title || "No Title"}</span>
              <span>{c.product?.price || "No Price"}</span>
              <p>
                <button
                  onClick={() => DecreaseQuantityHandler(index)}
                  className="text-xl"
                >
                  -
                </button>
                <span className="mx-3 p-1 rounded bg-gray-700"></span>
                <span className="mx-3 p-1 rounded bg-gray-700">
                  {c.quantity}
                </span>
                <button
                  onClick={() => IncreaseQuantityHandler(index)}
                  className="text-lg"
                >
                  +
                </button>
              </p>
            </li>
          );
        })
      : <li className="text-white">No items in cart.</li>;

  return <ul>{cartItems}</ul>;
};

export default Cart;