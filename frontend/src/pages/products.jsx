import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Products = () => {
 const products =  useSelector((state)=> state.productReducer.products);
//  console.log(products);

 const renderproduct = products.map((product) => {
    return ( <div key={product.id} className="w-[19%]  p-2 border shadow ">
      <img src={product.image} alt="" className="w-full h-[25vh] object-cover"/>
      <h1 className="font-thin">{product.title}</h1>
      {/* <small>{product.desc}..</small> */}
      <div className="flex justify-between mt-2 mb-2">
         <p className="text-gray-400 font-black">{product.price} $</p>
         <button className="px-2 py-1 bg-gray-300 rounded">Add to cart</button>
      </div>
      <Link className="text-blue-400" to={`/product/${product.id}`}>More Info..</Link>
    </div>
    );
 })

  return products.length > 0 ?

    <div className=" overflow-auto flex flex-wrap gap-3 mx-10 my-10 ">
    {renderproduct}
    </div> 

    : "lodding...";
}

export default Products
