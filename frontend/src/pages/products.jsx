import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/UserAction";
import { Suspense, useEffect, useState } from "react";
import axios from "../api/axiosconfig";
import InfiniteScroll from 'react-infinite-scroll-component';

const Products = () => {
   const dispatch = useDispatch();
   const users = useSelector((state) => state.userReducer.users);
   // const products =  useSelector((state)=> state.productReducer.products);

   const [products, setproducts] = useState([]);
   const [hasMore ,sethasMore] = useState([true]);

   const fetchproducts = async () => {
      try {
         const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`)
         if(data.length == 0){
            sethasMore(false);
         }else{
            sethasMore(true);
            setproducts([...products, ...data]);
         }
      } catch (error) {
         console.log(error + "products lodding please wait!.");
      }
   }

   useEffect(() => {
      fetchproducts();
   }, [])

   const addtocarthandler = (product) => {
      const copyuser = { ...users, cart: [...(users.cart || [])] };
      const x = copyuser.cart.findIndex((c) => c?.product?.id === product.id);

      if (x === -1) {
         copyuser.cart.push({ product, quantity: 1 });
      } else {
         copyuser.cart[x] = {
            product,
            quantity: copyuser.cart[x].quantity + 1
         };
      }

      dispatch(asyncupdateuser(copyuser.id, copyuser));
   }

   const renderproduct = products.map((product) => {
      return (<div key={product.id} className="w-[19%]  p-2 border shadow ">
         <img src={product.image} alt="" className="w-full h-[25vh] object-cover" />
         <h1 className="font-thin">{product.title}</h1>
         {/* <small>{product.desc}..</small> */}
         <div className="flex justify-between mt-2 mb-2">
            <p className="text-gray-400 font-black">{product.price} $</p>
            <button
               onClick={() => addtocarthandler(product)}
               className="px-2 py-1 bg-gray-300 rounded hover:bg-black hover:text-white">Add to cart</button>

         </div>
         <Link className="text-blue-400" to={`/product/${product.id}`}>More Info..</Link>
      </div>
      );
   })

   return <InfiniteScroll
            dataLength={products.length}
            next={fetchproducts}
            hasMore={hasMore}
            // loader={<h4>Loading...</h4>}
            endMessage={
               <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
               </p>
            }
         >
            <div   className=" overflow-auto flex flex-wrap gap-3 mx-10 my-10 ">
               <Suspense fallback={
                  <h1 className="text-center text-5xl text-red-500 font-black">
                     Lodding....
                  </h1>
               }>
                 {renderproduct}
               </Suspense>
            </div>

         </InfiniteScroll>

      
}

export default Products
