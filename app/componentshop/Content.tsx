'use client'
import React, { useState, useEffect } from "react";

const KeoNgon = () => {
  // Giả lập dữ liệu sản phẩm
  const products = [
    {
      id: 1,
      name: "Giày đá bóng Mizuno Morelia Sala Elite TF",
      oldPrice: "3,399,000đ",
      newPrice: "2,850,000đ",
      discount: "-16%",
      img: "https://product.hstatic.net/1000061481/product/3-02-02-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01_9c48f6b8924843a79e998a3aa4c50aa8_1024x1024.jpg", // Bạn thay bằng link hình ảnh
      description: "Safety Yellow/Fiery Coral",
      installmentPrice: "1.425.000đ",
    },
    {
      id: 2,
      name: "Giày đá bóng Adidas X Crazyfast",
      oldPrice: "3,500,000đ",
      newPrice: "2,490,000đ",
      discount: "-29%",
      img: "https://product.hstatic.net/1000061481/product/3-02-02-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-03-03-02_983f6fd771904d41b08a096ca3649815_medium.jpg",
      description: "Energy Citrus - Solar Red",
      installmentPrice: "1.245.000đ",
    },
    {
      id: 3,
      name: "Giày đá bóng Adidas Predator Elite TF",
      oldPrice: "3,500,000đ",
      newPrice: "2,490,000đ",
      discount: "-29%",
      img: "https://product.hstatic.net/1000061481/product/3-02-02-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-01-03-03-01_a773fcaaa2fb479ba419ca3485519f94_medium.jpg",
      description: "Solar Yellow/Core Black",
      installmentPrice: "1.245.000đ",
    },
    {
      id: 4,
      name: "Giày đá bóng Mizuno Morelia Neo IV",
      oldPrice: "3,099,000đ",
      newPrice: "2,400,000đ",
      discount: "-23%",
      img: "https://product.hstatic.net/1000061481/product/anh_sp_add-01-01-01-04-03-1_ecb382fe55b241918ecbd8f3fdd6a18b_medium.jpg",
      description: "Safety Yellow/Fiery Coral",
      installmentPrice: "1.200.000đ",
    },
    {
      id: 5,
      name: "Giày đá bóng Mizuno Morelia Neo IV",
      oldPrice: "3,099,000đ",
      newPrice: "2,400,000đ",
      discount: "-23%",
      img: "https://product.hstatic.net/1000061481/product/anh_sp_add-01-01-01-04-03-1_ecb382fe55b241918ecbd8f3fdd6a18b_medium.jpg",
      description: "Safety Yellow/Fiery Coral",
      installmentPrice: "1.200.000đ",
    },
    {
      id: 6,
      name: "Giày đá bóng Mizuno Morelia Neo IV",
      oldPrice: "3,099,000đ",
      newPrice: "2,400,000đ",
      discount: "-23%",
      img: "https://product.hstatic.net/1000061481/product/anh_sp_add-01-01-01-04-03-1_ecb382fe55b241918ecbd8f3fdd6a18b_medium.jpg",
      description: "Safety Yellow/Fiery Coral",
      installmentPrice: "1.200.000đ",
    },
    {
      id: 7,
      name: "Giày đá bóng Mizuno Morelia Neo IV",
      oldPrice: "3,099,000đ",
      newPrice: "2,400,000đ",
      discount: "-23%",
      img: "https://product.hstatic.net/1000061481/product/anh_sp_add-01-01-01-04-03-1_ecb382fe55b241918ecbd8f3fdd6a18b_medium.jpg",
      description: "Safety Yellow/Fiery Coral",
      installmentPrice: "1.200.000đ",
    },
    {
      id: 8,
      name: "Giày đá bóng Mizuno Morelia Neo IV",
      oldPrice: "3,099,000đ",
      newPrice: "2,400,000đ",
      discount: "-23%",
      img: "https://product.hstatic.net/1000061481/product/anh_sp_add-01-01-01-04-03-1_ecb382fe55b241918ecbd8f3fdd6a18b_medium.jpg",
      description: "Safety Yellow/Fiery Coral",
      installmentPrice: "1.200.000đ",
    },
    
  ];


  // State cho bộ đếm thời gian
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 9,
    minutes: 20,
    seconds: 33,
  });

  const [visibleProducts, setVisibleProducts] = useState(4);
  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = { ...prevTime };

        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-8 w-full">
      <h2 className="text-center text-3xl font-bold text-red-600 mb-4">S A L E</h2>


      {/* Bộ đếm thời gian */}
      <div className="text-center text-red-600 text-xl mb-8">
        <span className="bg-red-200 px-4 py-2 rounded-lg">{timeLeft.days} Ngày</span>
        <span className="bg-red-200 px-4 py-2 mx-2 rounded-lg">{timeLeft.hours} Giờ</span>
        <span className="bg-red-200 px-4 py-2 mx-2 rounded-lg">{timeLeft.minutes} Phút</span>
        <span className="bg-red-200 px-4 py-2 mx-2 rounded-lg">{timeLeft.seconds} Giây</span>
      </div>


      {/* Danh sách sản phẩm container gap-10 mx-auto flex */}
      <div className="flex container flex-row flex-wrap items-center mx-auto justify-center gap-5">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="border border-gray-200 p-4 rounded-lg shadow-md">
            <img src={product.img} alt={product.name} className="w-full h-48 object-cover m-auto" />
            <div className="flex justify-between items-center mb-2">
              <span className="bg-red-600 text-white px-2 py-1 rounded-md text-sm">KÈO NGON</span>
              <span className="text-white bg-red-600 px-2 py-1 rounded-md">{product.discount}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.description}</p>
            <p className="text-gray-400 line-through">{product.oldPrice}</p>
            <p className="text-red-600 text-xl font-bold">{product.newPrice}</p>
            <p className="text-sm text-gray-500">Trả sau {product.installmentPrice} x2 kỳ</p>
          </div>
        ))}
      </div>
      

      <div className="text-center mt-8">
          <button onClick={handleShowMore} className="bg-red-600 text-white px-6 py-2 rounded-md">
            XEM THÊM
          </button>
      </div>
    </div>  
  );
};

export default KeoNgon;
