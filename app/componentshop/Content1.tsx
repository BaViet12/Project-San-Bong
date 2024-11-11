import React from 'react'

const Content1 = () => {
  return (
    <div className='bg-white py-8 mx-40'>
        <h2 className='text-center text-3xl font-bold text-slate-800'>Bạn đang tìm gì</h2>
        <div className='flex justify-around mx-auto'>
            <div className='border border-gray-200 p-4 rounded-lg shadow-md grid grid-cols-1'>
                <img className='w-[350px]' src="https://theme.hstatic.net/1000061481/1001035882/14/index_banner_1.jpg?v=2019" alt="giay nhantao" />
                <h2 className="font-bold ">GIÀY CỎ NHÂN TẠO (Đế TF)</h2>
                <p>Giày bóng đá cho mặt sân nhân tạo 5-7 người</p>
            </div>
            <div className='border border-gray-200 p-4 rounded-lg shadow-md grid grid-cols-1'>
                <img className='w-[350px]' src="https://theme.hstatic.net/1000061481/1001035882/14/index_banner_2.jpg?v=2019" />
                <h2 className="font-bold ">GIÀY CỎ TỰ NHIÊN (Đế FG,AG,SG)</h2>
                <p>Giày bóng đá cho mặt sân cỏ tự nhiên 11 người</p>
            </div>
            <div className='border border-gray-200 p-4 rounded-lg shadow-md grid grid-cols-1'>
                <img className='w-[350px]' src="https://theme.hstatic.net/1000061481/1001035882/14/index_banner_3.jpg?v=2019" alt="giay nhantao" />
                <h2 className="font-bold">GIÀY FUTSAL(Đế IC)</h2>
                <p>Giày bóng đá cho mặt sân xi măng và trong nhà</p>
            </div>
            <div className='border border-gray-200 p-4 rounded-lg shadow-md grid grid-cols-1'>
                <img className='w-[350px]' src="https://theme.hstatic.net/1000061481/1001035882/14/index_banner_4.jpg?v=2019" alt="giay nhantao" />
                <h2 className="font-bold">GIÀY BÓNG ĐÁ SIÊU RẺ</h2>
                <p>Giày bóng đá phân khúc dưới 1 triệu</p>
            </div>
        </div>
    </div>
  )
}

export default Content1