import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { lazy } from "react";

const LazyComponent = lazy(() => import("../lazyComponent/lazycomponent"));

export default function CardPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  const [category, setCategory] = useState([
    // {"men's clothing" , "jewelery" ,"electronics" ,"women's clothing"}
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showItem, setShowItem] = useState(9);

  const GetProducts = async () => {
    await axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  };

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "....";
    } else {
      return str;
    }
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <>
      {/* <lazyLoadingComponent /> */}
      <div className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-500">
        <div className="flex flex-col gap-4 mx-12">
          <div className="w-full flex flex-row gap-4 my-2 justify-end items-center">
            <input
              type="search"
              placeholder="search..."
              onChange={(e) => setSearch(e.target.value)}
              className="border-2 w-44 text-xs h-12 border-gray-400 outline-gray-400 rounded p-2 my-2 "
            />

            <select
              className="border-2 text-xs border-gray-400 h-12 w-44 rounded p-2 outline-gray-400"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">Filter by category</option>
              <option value="women's clothing">women's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="men's clothing">men's clothing</option>
              <option value="electronics">electronics</option>
            </select>
          </div>
          <Suspense
            fallback={
              <div className="font-bold text-2xl p-4 bg-red-400 rounded-lg ">
                {" "}
                LOADING..
              </div>
            }
          >
            <div className="grid grid-cols-4 gap-12 w-full h-full">
              {!products ? (
                <h1 className="text-white font-bold">LOADING</h1>
              ) : (
                products
                  .filter((i) => {
                    return i.title.toLowerCase().includes(search && search);
                  })
                  .filter((i) => {
                    return i.category.includes(selectedCategory);
                  })
                  .slice(0, showItem)
                  .map((i) => (
                    <div>
                      <div className="shadow-xl bg-white relative h-full rounded-lg p-4">
                        <div className="w-full ">
                          <img
                            className="w-full h-36 px-28 py-6 bg-white rounded-2xl"
                            src={i.image}
                          />
                          <div className="p-4">
                            <p className="bg-purple-500 w-6 h-6 absolute top-6 rounded-full text-white flex justify-center">
                              {" "}
                              {i.id}
                            </p>
                            <h1 className="font-bold">
                              {truncateString(i.title, 28)}
                            </h1>
                            <p> {i.category}</p>
                          </div>
                        </div>

                        <div className="flex flex-row justify-between items-center p-4 text-lg">
                          <div className="flex flex-row gap-1 justify-center items-center">
                            <p className="font-medium">color :</p>
                            <form className="flex flex-row gap-1">
                              <input
                                type="radio"
                                class="form-radio accent-red-500 w-4 h-4  "
                                name="radio-colors"
                                value="1"
                                checked
                              />
                              <input
                                type="radio"
                                class="form-radio accent-yellow-500 w-4 h-4"
                                name="radio-colors"
                                value="2"
                                checked
                              />
                              <input
                                type="radio"
                                class="form-radio accent-pink-500 w-4 h-4"
                                name="radio-colors"
                                value="1"
                                checked
                              />
                              <input
                                type="radio"
                                class="form-radio accent-green-500 w-4 h-4"
                                name="radio-colors"
                                value="1"
                                checked
                              />
                            </form>
                          </div>
                          <div>
                            <p className="font-bold">$ {i.price}</p>
                          </div>
                        </div>

                        <div className="flex flex-row justify-center items-center mt-2">
                          <button
                            type="submit"
                            class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300  font-medium rounded-3xl text-sm px-16 py-2 text-center mr-2 mb-2"
                          >
                            {" "}
                            add to basket
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
              )}
              <button
                class="border border-gray-400 font-bold w-32 h-16 rounded-md bg-gray-300 shadow-lg font-serif"
                onClick={() => setShowItem(showItem + 2)}
              >
                show more
              </button>
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}
