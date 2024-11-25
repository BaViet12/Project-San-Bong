"use client";
import React, { useEffect, useState } from 'react'

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

const BookSan:React.FC = () => {
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
        <div className='p-20 flex flex-col gap-10'>
            <h1 className='text-3xl '>Danh sách các sân bóng</h1>

            <div>
                {soccers.length > 0 ? (
                soccers.map((soccer) => (
                <div
                    key={soccer.id}
                    className="flex  p-6 w-full rounded-box shadow-md h-auto gap-16"
                >
                    <div>
                        <img src={soccer.HinhDaiDien} alt={soccer.Ten} className="w-full h-96 object-cover m-auto "/>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-5xl'>{soccer.Ten}</h1>
                        <p className='text-xl text-gray-600'>Thể loại: {getDanhMuc(soccer.idDanhMuc)}</p>
                        <p>Mô tả: {soccer.MoTa}</p>

                    </div>
                </div>
                ))
            ) : (
                <p>Không có dữ liệu để hiển thị</p>
            )}
            </div>
        </div>
    )
}

export default BookSan