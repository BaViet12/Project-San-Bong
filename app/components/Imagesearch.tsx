'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Imagesearch = () => {
  const [sports, setSports] = useState([]);
  const [selectedSport, setSelectedSport] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [areaInput, setAreaInput] = useState("");

  // Đổ dữ liệu vào dropdown
  useEffect(() => {
    // Giả lập dữ liệu các môn thể thao
    const sportsData = [
      "Sân 5",
      "Sân 7",
    ];
    setSports(sportsData);
  }, []);

  // Hàm xử lý khi bấm tìm kiếm
  const handleSearch = () => {
    alert(
      `Bạn đã chọn: ${selectedSport}, tìm kiếm sân: ${searchInput}, khu vực: ${areaInput}`
    );
  };
  return (
    <div className=''>
       <div className="carousel w-full relative opacity-55">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-[550px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-[550px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.pexels.com/photos/19282292/pexels-photo-19282292/free-photo-of-dan-ong-th-thao-tro-ch-i-mon-ch-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-full h-[550px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/474079QAo/hinh-nen-manchester-city-dep-nhat-cho-dien-thoai-may-tinh_041211380.jpg"
              className="w-full h-[550px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="absolute top-[190px] left-[350px]  w-[1100px] h-10 text-4xl font-bold text-green-800" >HỆ THỐNG ĐẶT SÂN ONLINE SÂN BÓNG ĐÌNH LÀNG HÒA MỸ</h1>
          <p className="absolute top-[260px] left-[550px]  w-[1100px] h-10 text-xl  text-white">DỮ LIỆU ĐƯỢC CẬP NHẬT LIÊN TỤC, CHÍNH XÁC, HỖ TRỢ NHANH CHÓNG</p>
        </div>
        <div className='absolute top-[320px] left-[530px] opacity-65'>
          <div className="max-w-5xl mx-auto bg-green-700 rounded-lg p-4 mt-6">
            <div className="flex space-x-2">
              {/* Dropdown cho lọc loại sân */}
                <select
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="block w-1/4 py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="" disabled hidden>
                    Loại sân
                  </option>
                  {sports.map((sport, index) => (
                    <option key={index} value={sport}>
                      {sport}
                    </option>
                  ))}
                </select>

              {/* Input cho tên sân hoặc địa chỉ */}
                <input
                  type="text"
                  placeholder="Nhập tên sân hoặc địa chỉ..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="block w-1/2 py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

              {/* Input cho khu vực */}
                <input
                  type="text"
                  placeholder="Nhập khu vực..."
                  value={areaInput}
                  onChange={(e) => setAreaInput(e.target.value)}
                  className="block w-1/4 py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

              {/* Button Tìm kiếm */}
                <button
                  onClick={handleSearch}
                  className=" w-[150px] bg-red-800 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                >
                  Tìm kiếm
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Imagesearch

{/* <div className="mb-4 ">
        <label
          htmlFor="sport"
          className="block text-sm font-medium text-gray-700"
        >
          Chọn môn thể thao:
        </label>
        <select
          id="sport"
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled hidden>
            -- Chọn một môn thể thao --
          </option>
          {sports.map((sport, index) => (
            <option key={index} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Nhập tên sân hoặc địa chỉ..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Nhập khu vực..."
          value={areaInput}
          onChange={(e) => setAreaInput(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
      >
        Tìm kiếm
      </button>
    </div> */}