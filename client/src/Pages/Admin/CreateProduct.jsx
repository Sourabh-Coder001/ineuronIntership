import React,{useState,useEffect} from 'react'
import Layout from '../../Components/Layout/Layout';
import AdminMenu from '../../Components/Layout/AdminMenu';
import  toast  from 'react-hot-toast';
import axios from 'axios';
import { Select } from 'antd';
import {useNavigate} from 'react-router-dom';
import Footer from '../../Components/Layout/Footer';


const {Option}=Select;
const CreateProduct=()=> {
  const navigate=useNavigate();
  const [categories,setCategories]=useState([])
  const [name,setName]=useState("")
  const [description,setDescription]=useState("")
  const [category,setCategory]=useState("")
  const [price,setPrice]=useState("")
  const[quantity,setQuantity]=useState("")
  const[shipping,setShipping]=useState("")
  const[photo,setPhoto]=useState("")

// get all Categories
const getAllCategory = async () => {
  try {
    const { data } = await axios.get(`http://localhost:8080/api/getcategorys`);
    if (data?.success) {
      setCategories(data?.category);
    }
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong in getting category');
  }
};

useEffect(() => {
  getAllCategory();
}, []);

//craete product function
const handleCreate=async(e)=>{
  e.preventDefault()
  try{
    const productData=new FormData()
    productData.append("name",name)
    productData.append("description",description)
    productData.append("price",price)
    productData.append("quantity",quantity)
    productData.append("photo",photo)
    productData.append("category",category)
    

    const {data}=axios.post(`http://localhost:8080/api/createproduct`,productData)
    if(data?.success){
    toast.error(data?.message)
    }
    else{
      
      toast.success('Product Created Successfully')
      navigate('/dashboard/admin/products')

    }
  }
  catch(error){
    console.log(error)
    toast.error('SomeThing went Wrong')
  }
};
const ManageCat = {
  color: 'white',
  fontWeight: 'bold', 
  textAlign:'center',
  fontSize: '40px' // Increase font size (adjust as needed)
};

  return (
    <Layout title={"Dashboard-All Products"}>
          <div className="container-fluid m-1   p-5" >
    <div className="row">
        <div className="col-md-3">
            <AdminMenu/>
        </div>
        <div className="col-md-9">
        <h1 className='createProduct'>Create Products</h1>
        <div className="m-1 w-75">
          <Select bordered={false} placeholder="Select Category" size="large" showSearch className='form-select mb-3' onChange={(value)=>{setCategory(value);}}>
             {categories.map((c)=>(
              <Option key={c._id} value={c._id}>{c.name}</Option>
             ))}
          </Select>

          <div className="mb-3">
            <label  className='btn btn-outline-secondary col-md-12'>
               {photo ? photo.name : "Upload Photo"}
              <input type="file" name="photo" accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])} hidden  />
            </label>
          </div>
          <div className="mb-3">
            {photo && (
              <div className="text-center">
                <img src={URL.createObjectURL(photo)} alt="product_photo"  height={'200px '} className='img img-responsive'/>
              </div>
            ) }
          </div>
          <div className="mb-3">
            <input type="text" 
            value={name}
            placeholder='Enter a name'
            className='form-control'
            onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input type="text" 
            value={description}
            placeholder='Enter a Description'
            className='form-control'
            onChange={(e)=>setDescription(e.target.value)}
            />
          </div>

          

          <div className="mb-3">
            <input type="number" 
            value={price}
            placeholder='Enter a Price'
            className='form-control'
            onChange={(e)=>setPrice(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input type="number" 
            value={quantity}
            placeholder='Enter a quantity'
            className='form-control'
            onChange={(e)=>setQuantity(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Select bordered={false}
            placeholder="Select Shipping"
            size='laege'
            showSearch
            className='form-select mb-3'
            onChange={(value)=>{setShipping(value);}}
            >
              <Option value='0'>No</Option>
              <Option value='1'>Yes</Option>
            </Select>
            
          </div>
          <div className="mb-3">
            <button className='btn btn-primary' onClick={handleCreate}>Create Product</button>
          </div>
        </div>

        </div>
    </div>
    </div>
    
</Layout>
  )
}

export default CreateProduct;