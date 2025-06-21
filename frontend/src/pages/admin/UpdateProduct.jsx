import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {asyndeleteproduct, asynupdateproduct } from "../../store/actions/ProductAction";


const Productdetail = () => {
  const {id} = useParams()
  // const {
  //        productReducer:{products} , 
  //        userReducer:{users}
  //       } 
  //       =  useSelector((state)=> state);
  const users =  useSelector((state)=> state.userReducer.users);
const products =  useSelector((state)=> state.productReducer.products);

       const product = products.find(product => product.id == id);
      //  console.log(product ,users)

   const {register , handleSubmit ,reset} = useForm({
    defaultValues:{
        image:product?.image,
        title:product?.title,
        price:product?.price,
        desc:product?.desc,
        catg:product?.catg
    }
   })

   const dispatch = useDispatch();
   const navigate = useNavigate()
  
    const delatehandler = (product) => {
      dispatch(asynupdateproduct(id,product));
    }

    const removehandler =()=>{
      dispatch(asyndeleteproduct(id));
      navigate("/products")
    }

  return product?(
    <div id="back" className="mx-5 my-7 w-full">
      
      <div className="w-full flex">
        <div className="w-1/2">
        <img className="w-full px-5 h-[90vh] object-cover"  src={product.image} alt="" />
        </div>
        <div className="w-1/2 px-5">
            <a href="#move" className="ml-[40vw]"><i className="ri-edit-box-line text-2xl"></i></a>
            <h4 className="font-thin">Primeum Product</h4>
            <h1 className="font-black text-5xl mt-2">{product.title}</h1>
            <h2 className="font-black text-gray-400 mt-2">- {product.price} $</h2>
            <h3 className="mt-1">⭐8/10 .15<span className="font-black text-gray-400"> Review</span></h3>
            <p className="font-thin mt-2 w-[80%]">{product.desc}</p>
            <h2 className="font-black uppercase mt-4">{product.catg}</h2>
            <div className="flex gap-2 mt-3">
              <button className="w-10 h-10 border uppercase shadow rounded-full font-black text-gray-400 hover:text-gray-700">s</button>
              <button className="w-10 h-10 border uppercase shadow rounded-full font-black text-gray-400 hover:text-gray-700">m</button>
              <button className="w-10 h-10 border uppercase shadow rounded-full font-black text-gray-400 hover:text-gray-700">xl</button>
              <button className="w-10 h-10 border uppercase shadow rounded-full font-black text-gray-400 hover:text-gray-700">xxl</button>
              <button className="w-10 h-10 border uppercase shadow rounded-full font-black text-gray-400 hover:text-gray-700">3xl</button>
              
            </div>
            <div className="flex my-5 gap-3">
              <button className="px-5 py-2 border uppercase shadow rounded">Add to Card</button>
              <button className="px-5 py-3 bg-black text-white uppercase shadow rounded">buy now</button>
            </div>
        </div>
      </div>

         {users && users?.isAdmin && 
          <div className="w-screen flex justify-center items-center" id="move">    
          <form 
          onSubmit={handleSubmit(delatehandler)}
          className=" w-[80%] h-[72%] p-5 mt-5">
            <h1 className="font-black text-3xl text-center text-gray-500">Update/delete-Products </h1>
          
            <input 
            {...register("image")}
            className="mx-3 mt-5 border py-3 px-5 outline-0 rounded w-[90%]"
            type="url" placeholder="Enter image Url.."/>
             
            <input 
            {...register("title")}
            className="mx-3 mt-4 border py-3 px-5 outline-0 rounded w-[90%]"
            type="text" placeholder="Enter Title.."/>

            <input 
            {...register("price")}
            className="mx-3 mt-4 border py-3 px-5 outline-0 rounded w-[90%]"
            type="number" placeholder="0.00$"/>


            <textarea
            {...register("desc")}
            className="mx-3 mt-4 border py-5 px-5 outline-0 rounded w-[90%]"
             placeholder="Enter the description here..."></textarea>

            <input 
            {...register("catg")}
            className="mx-3 mt-4 border py-3 px-5 outline-0 rounded w-[90%]"
            type="text" placeholder="Category"/>

            <button className="mx-3 mt-4 px-5 py-3 border text-black rounded font-black text-center hover:scale-102 duration-30 shadow">Update-Product</button>
            <button 
            onClick={removehandler} 
            className="mt-3 px-5 py-3  bg-black text-white rounded font-black text-center hover:scale-102 duration-30 shadow">Delete-Product</button>            
            <br />
           <a href="#back"><i className="ri-arrow-up-wide-line text-6xl ml-[40vw] text-gray-500"></i></a> 
          </form>  
          </div>
         }  

    </div>
  ):"Lodding..."
}

export default Productdetail
