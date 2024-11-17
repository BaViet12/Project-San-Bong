"use client";
import TableSoccer from '@/app/components/TableSoccer';
import React, { useEffect, useState } from 'react'

interface FormData {
    Ten: string;
    MoTa: string;
    TrangThai: string;
    Sale: string;
    Gia: string;
    Tongtien: string;
    idDanhMuc: string;
    TongDanhGia: string;
    TongSao: string;
  }
  interface DanhMuc {
    id:number;
    Ten: string;
}

const Soccermanager = () => {
  const initialFormData: FormData = {
    Ten: '',
    MoTa: '',
    TrangThai: 'HOATDONG',
    Sale:'',
    Gia:'',
    Tongtien:'',
    idDanhMuc:'',
    TongDanhGia:'',
    TongSao:'',
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [message, setMessage] = useState<string>('');
  const [danhMucOptions, setDanhMucOptions] = useState<DanhMuc[]>([]);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  useEffect(() => {
    fetch('/api/danhmuc')
    .then((response)=>{
       if (!response.ok) {
      throw new Error('Failed to fetch danh muc data');
    }
    return response.json();
    })
    .then((data) => {
    console.log("Loai xe data:", data);
    setDanhMucOptions(data);
  })
  .catch((err) => {
    setError('Failed to fetch danh muc data');
    console.error("Failed to fetch danh muc", err);
  })

  }, []);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    console.log("Form data:", formData);
    try {
      const response = await fetch('/api/soccer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create product');
      }

      const data = await response.json();
      setSuccess(data.message || 'Product created successfully');
      setFormData(initialFormData);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error creating product');
      console.error('Error creating San:', err);
    }
  };
  const handleDelete = async (e:any) =>{
  }

  return (
    <div className="p-2 w-[1300px] h-full ml-7" data-theme="light">
        <div className='flex w-[1300px] justify-between p-5 items-center'>
            <h1 className='text-3xl font-bold'>Quản lý Sân Bóng</h1>
            <button className='rounded-box bg-green-600 px-3 py-2 text-white hover:bg-orange-600'>
                Thêm mới
            </button>
        </div>
        <div className='flex w-[1300px] justify-center'>
            <TableSoccer></TableSoccer>
        </div>
    </div>
  )
}


export default Soccermanager