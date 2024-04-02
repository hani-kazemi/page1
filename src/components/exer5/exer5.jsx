
import React from "react"
import { useEffect ,useState } from "react"
import axios from "axios"

export default function searchTest() {
  const [products , setProducts] = useState([]);
  const [search , setSearch] = useState('')
  console.log(search);
  const [category , setCategory] = useState([
    {}
  ])

  const [selectedCategory , setSelectedCategory] = useState('')


  const GetProducts = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
    setProducts(res.data)
    });

  }

  useEffect(() => {
    GetProducts()
  } , [])

  return (
    
    <div className="m-4">
      <input type="search" placeholder="جست وجو" onChange={(e) => setSearch(e.target.value)} className="border-2 border-red-400 rounded outline-red-500 p-4 my-2 " />
      <select className="border-2 border-green-400 p-4 outline-green-500 ml-6" onChange={(e) => setSelectedCategory(e.target.value)} >
          <option value="All">Filter by category</option>
          <option value="women's clothing">women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="electronics">electronics</option>
        </select>
        <div className="grid grid-cols-4 gap-4 w-full h-full">
        {products.filter((i  => {
          return i.title.toLowerCase().includes(search && search) 
        })).filter((i) => {
          return i.category.includes(selectedCategory)
        }).map((i) => (
          <div>
            <div className="">
              <div className="border border-gray-400 w-full p-4">
              <img className="w-28 h-28 p-4" src={i.image}/>
                <p>id : {i.id}</p>
                <h1>title : {i.title}</h1>
                <p>price: {i.price}</p>
                <p>category : {i.category}</p>
              </div>
            </div>
          </div>
        ))}

      </div>
      
    </div>
  )
}