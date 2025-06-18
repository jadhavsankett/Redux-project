import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncreateproduct } from "../../store/actions/ProductAction";

const CreateProduct = () => {
   const {register , handleSubmit ,reset} = useForm()
   const dispatch = useDispatch();
   const navigate = useNavigate()
  
    const Createhandler = (product) => {
       product.id = nanoid();
      dispatch(asyncreateproduct(product));
      // console.log(product);
      navigate("/products");
    }

  return (
    <div className="w-screen h-screen px-10 mt-2">
       <div className="w-[100%] h-[80%] flex rounded-xl bg-[url('https://images.unsplash.com/photo-1619462729211-c8fd019ceae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center p-5">
         
          <div className="w-1/2 flex flex-col gap-5 justify-center items-center p-5">
          <h1 className=" text-white text-5xl font-black border-b-2 pb-4">Create The Product!</h1>
          <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus officiis non necessitatibus, asperiores repellat animi commodi error hic.</p>
          </div>

          <div className="w-1/2 px-5  h-screen flex justify-center ">
          <form 
          onSubmit={handleSubmit(Createhandler)}
          className=" w-[70%] h-[72%] bg-gray-100/50 rounded-2xl p-5">

            <h1 className="font-black text-3xl text-center text-amber-700">Create Product</h1>
          
            <input 
            {...register("image")}
            className="mx-3 mt-5 bg-amber-100/70 py-2 px-5 outline-0 rounded-xl w-[90%]"
            type="url" placeholder="Enter image Url.."/>
             
            <input 
            {...register("title")}
            className="mx-3 mt-3 bg-amber-100/70 py-2 px-5 outline-0 rounded-xl w-[90%]"
            type="text" placeholder="Enter Title.."/>

            <input 
            {...register("price")}
            className="mx-3 mt-3 bg-amber-100/70 py-2 px-5 outline-0 rounded-2xl w-[90%]"
            type="number" placeholder="0.00$"/>


            <textarea
            {...register("desc")}
            className="mx-3 mt-3 bg-amber-100/70 py-2 px-5 outline-0 rounded-2xl w-[90%]"
             placeholder="Enter the description here..."></textarea>

            <input 
            {...register("catg")}
            className="mx-3 mt-3 bg-amber-100/70 py-2 px-5 outline-0 rounded-2xl w-[90%]"
            type="text" placeholder="Category"/>

            <button className="mx-3 mt-3 px-5 py-2  bg-amber-100 text-amber-700 rounded-xl font-black text-center hover:scale-102 duration-30">Create-Product</button>
            
          </form>
          </div>
       </div>
    </div>
  )
}

export default CreateProduct
