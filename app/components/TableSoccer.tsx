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

    return (
        <div className="overflow-x-auto flex justify-center mt-10">
            <table className="table w-[1500px]">
                <thead>
                    <tr className='text-2xl'>
                        <th>Mã sân</th>
                        <th>Tên sân</th>              
                        <th>Mô tả</th>
                        <th>Trạng thái sân</th>
                        <th>Sale</th>
                        <th>Giá</th>
                        <th>Tổng tiền</th>
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
                            <td>{getDanhMuc(soccer.id)}</td>
                            <td>{soccer.TongDanhGia}</td>
                            <td>{soccer.TongSao}</td>
                            <td className='flex gap-5 text-2xl text-center'>
                                <BsPencil />
                                <MdOutlineDeleteOutline />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSoccer;
