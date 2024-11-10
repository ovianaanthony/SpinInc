import React from "react";
import Img1 from "../../assets/top/tent.png";
import Img2 from "../../assets/top/furadeira.png";
import Img3 from "../../assets/top/mala.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Barraca para 2 pessoas",
    description:
      "R$10/dia",
  },
  {
    id: 2,
    img: Img2,
    title: "Furadeira",
    description:
      "R$15/dia",
  },
  {
    id: 3,
    img: Img3,
    title: "Mala de viagem grande",
    description:
      "R$50/semana",
  },
];
const TopProducts = ({ handleLoginPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-24">
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Melhores Produtos
          </h1>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-dark_purple dark:hover:bg-green_soft hover:text-white relative shadow-xl duration-300 group max-w-[300px] w-[270px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[170px] min-w-[120px] block mx-auto my-10 transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-green_soft hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-dark_green"
                  onClick={handleLoginPopup}
                >
                  Alugar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
