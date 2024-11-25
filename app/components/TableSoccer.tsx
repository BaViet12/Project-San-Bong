'use client'
import { log } from 'console';
import React, { useEffect, useState } from 'react';
import { BsPencil } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";



interface San {
    id: number;
    Ten: string;
    MoTa: string;
    TrangThai: string;
    Sale: number;
    Gia: number;
    Tongtien: number;
    HinhDaiDien:string;
    idDanhMuc:number;
    TongDanhGia: number;
    TongSao: number;
    DanhMuc?: {
        Ten: string;
        MoTa:string;
    };
}

interface DanhMuc {
    id: number;
    Ten: string;
}

const TableSoccer = () => {
    const [isSanTable, setSanTable] = useState<San[]>([]);
    const [isDanhMucTable, setDanhMucTable] = useState<DanhMuc[]>([]);
    
    useEffect(()=>{
        fetch('/api/soccer')
        .then((response) =>{
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          return response.json();
        })
        .then((data)=>{
            console.log("hhh",data.Soccer);
            setSanTable(data.Soccer);
        })
        .catch((error)=>{{
            console.error('Error:', error);
        }})
    },[setSanTable])

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
    
    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`/api/soccer/${id}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete soccer');
            }
    
            // Cập nhật lại danh sách sân sau khi xóa
            setSanTable((prev) => prev.filter((soccer) => soccer.id !== id));
            console.log('Deleted successfully');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div className="overflow-x-auto flex justify-center mt-10">
            <table className="table w-[1300px]">
                <thead>
                    <tr className='bg-green-800 text-white'>
                        <th>Mã sân</th>
                        <th>Tên sân</th>              
                        <th>Mô tả</th>
                        <th>Trạng thái sân</th>
                        <th>Sale</th>
                        <th>Giá</th>
                        <th>Tổng tiền</th>
                        <th>Hình ảnh</th>
                        <th>Loại sân</th>
                        <th>Tổng đánh giá</th>
                        <th>Tổng sao</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                
                <tbody>
                    {isSanTable.map((soccer) => (
                        <tr>
                            <th>{soccer.id}</th>
                            <td>{soccer.Ten}</td>
                            <td>{soccer.MoTa}</td>
                            <td>{soccer.TrangThai}</td>
                            <td>{soccer.Sale}</td>
                            <td>{soccer.Gia}</td>
                            <td>{soccer.Tongtien}</td>
                            <td>{soccer.HinhDaiDien}</td>
                            <td>{getDanhMuc(soccer.idDanhMuc)}</td>
                            <td>{soccer.TongDanhGia}</td>
                            <td>{soccer.TongSao}</td>
                            <td className='flex gap-5 text-2xl text-center'>
                                <BsPencil className='hover:text-green-800'/>
                                <MdOutlineDeleteOutline className='hover:text-green-800' onClick={() => handleDelete(soccer.id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSoccer;
