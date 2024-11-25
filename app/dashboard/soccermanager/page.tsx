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
    HinhDaiDien : string;
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
    HinhDaiDien:'',
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
  const [editSoccer, setEditSoccer] = useState<FormData | null>(null); // Dữ liệu sân cần chỉnh sửa
  // Sửa
  const handleEdit = (soccer: FormData) => {
    setEditSoccer(soccer);
  };
  

  
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

  const handleDelete = async (id:number) =>{
    
  }

  return (
    <div className="p-2 w-full h-full ml-7" data-theme="light">
        <div className='flex w-full justify-between p-5 items-center'>
            <h1 className='text-3xl font-bold'>Quản lý Sân Bóng</h1>
              <button className="btn bg-green-800 text-white mr-16" onClick={()=>document.getElementById('my_modal_3').showModal()}>Thêm sân</button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Thêm sân bóng</h3>
                    <form method="dialog" onSubmit={handleSubmit}>  
                    {error && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}
                    {success && (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                        {success}
                      </div>
                    )}                           
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div className="mb-4">
                          <label className="block text-gray-700">Tên Sân</label>
                          <input
                            type="text"
                            name="Ten"
                            value={formData.Ten}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700">Mô Tả</label>
                          <textarea
                            name="MoTa"
                            value={formData.MoTa}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700">Trạng Thái</label>
                          <input
                            type="text"
                            name="TrangThai"
                            value={formData.TrangThai}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700">Sale (%)</label>
                          <input
                            type="number"
                            name="Sale"
                            value={formData.Sale}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            min="0"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700">Giá</label>
                          <input
                            type="number"
                            name="Gia"
                            value={formData.Gia}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            min="0"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700">Tổng Tiền</label>
                          <input
                            type="number"
                            name="Tongtien"
                            value={formData.Tongtien}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            min="0"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700">Link hình ảnh</label>
                          <input
                            type="text"
                            name="HinhDaiDien"
                            value={formData.HinhDaiDien}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700">Danh Mục Sân</label>
                          <select
                            name="idDanhMuc"
                            value={formData.idDanhMuc}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                          >
                            <option value="">Chọn Danh Mục</option>
                            {danhMucOptions.map((danhmuc) => (
                              <option key={danhmuc.id} value={danhmuc.id}>
                                {danhmuc.Ten}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700">Tổng Đánh Giá</label>
                          <input
                            type="number"
                            name="TongDanhGia"
                            value={formData.TongDanhGia}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            min="0"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700">Tổng Sao</label>
                          <input
                            type="number"
                            name="TongSao"
                            value={formData.TongSao}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            min="0"
                            max="5"
                          />
                        </div>

                        <button type="submit"
                          className="w-full py-2 mt-4 text-white bg-green-800 rounded hover:bg-blue-600"
                        >
                          Thêm Sân Bóng
                        </button>
                    </form>
                  </div>
                </dialog>
        </div>
        <div className='flex justify-center ml-20'>
            <TableSoccer></TableSoccer>
        </div>
    </div>
  )
}

export default Soccermanager