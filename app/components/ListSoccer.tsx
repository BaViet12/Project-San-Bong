"use client";
import React, { useEffect, useState } from 'react';

interface Soccer {
  id: number;
  Ten: string;
  MoTa: string;
  TrangThai: string;
  Sale: string;
  Gia: string;
  Tongtien: string;
  HinhDaiDien: string;
  idDanhMuc:number;
  TongDanhGia: string;
  TongSao: string;
  DanhMuc?: {
    Ten: string;
    MoTa:string;
};
}
interface DanhMuc {
  id: number;
  Ten: string;
}

const ListSoccer: React.FC = () => {
  const [soccers, setSoccers] = useState<Soccer[]>([]);
  const [isDanhMucTable, setDanhMucTable] = useState<DanhMuc[]>([]);

  useEffect(() => {
    const fetchSoccers = async () => {
      try {
        const res = await fetch('/api/soccer');
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        const data = await res.json();
        console.log("hhhh", data);
  
        // Kiểm tra nếu dữ liệu không phải mảng
        if (Array.isArray(data.Soccer)) {
          setSoccers(data.Soccer);
        } else if (data && typeof data === 'object') {
          // Nếu dữ liệu là object, chuyển thành mảng
          setSoccers([data.Soccer]);
        } else {
          console.error('Dữ liệu không hợp lệ:', data);
        }
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    };
  
    fetchSoccers();
  }, []);
  useEffect(() => {
    fetch('/api/danhmuc')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })

        .then((data) => {
            console.log(data);
            setDanhMucTable(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}, [setDanhMucTable]);
  const getDanhMuc = (idDanhMuc: number) => {
    const danhMuc = isDanhMucTable.find((loai) => loai.id === idDanhMuc);
    return danhMuc ? danhMuc.Ten : 'N/A';
  };

  return (
      <div className='p-10'>
        <h1 className='ml-28 font-bold text-5xl py-10'>Danh sách sân bóng</h1>
        <div className="flex flex-wrap justify-start gap-10 px-48">
          {soccers.length > 0 ? (
            soccers.map((soccer) => (
              <div
                key={soccer.id}
                className="flex flex-col border-4 border-gray-400 p-6 w-80 rounded-box shadow-md h-auto"
              >
                  <div className='gap-4 flex '>
                    <h2 className="font-bold text-3xl text-green-800">{soccer.Ten}</h2>
                    
                  </div>
                  <div className='mt-10 gap-3 flex flex-col '>
                    <img src={soccer.HinhDaiDien} alt={soccer.Ten} className="w-full h-48 object-cover m-auto rounded-xl"/>
                    <p className='text-2xl font-bold'>{getDanhMuc(soccer.idDanhMuc)}</p>
                    <h2 className='hover:animate-bounce rounded-lg text-red-500 text-4xl'>{soccer.Gia}.000đ/h</h2>
                    <p className='text-gray-600'>{soccer.TrangThai}</p>
                  </div>
                  <div className='flex justify-center mt-5'>
                    <button className='bg-white rounded-full py-3 border-2 w-32 border-yellow-300 hover:bg-red-500'>Đặt sân</button>
                  </div>
              </div>
            ))
          ) : (
            <p>Không có dữ liệu để hiển thị</p>
          )}
        </div>
      </div>
  );
};

export default ListSoccer;
