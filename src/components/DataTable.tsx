import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTable: React.FC = () => {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    tenDichVu: '',
    moTaDV: '',
    donGia: 0,
    donVi: '',
    ghiChu: '',
    isDisable: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/HD/rest/dichvu');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddData = async () => {
    try {
      await axios.post('http://localhost:8081/HD/rest/dichvu', newData);
      // Reset the form and refetch data
      setNewData({
        tenDichVu: '',
        moTaDV: '',
        donGia: 0,
        donVi: '',
        ghiChu: '',
        isDisable: false,

      });
      fetchData();
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>MaDichVu</th>
            <th>TenDichVu</th>
            <th>MoTaDV</th>
            <th>DonGia</th>
            <th>DonVi</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.maDichVu}>
              <td>{item.maDichVu}</td>
              <td>{item.tenDichVu}</td>
              <td>{item.moTaDV}</td>
              <td>{item.donGia}</td>
              <td>{item.donVi}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>

<div>
<div>
      <div className='p-5 flex justify-center items-center font-bold bg-amber-100'>
        <h2>ADD DATA NEW</h2>
        </div>
        <div className='p-5 my-10 border border-black mx-7' >
        <div>
          <label>TenDichVu:</label>
          <input  className=' mx-7 border border-black ' placeholder='NameDichVu' type="text" name="tenDichVu" value={newData.tenDichVu} onChange={handleInputChange} />
        </div>
        <div>
          <label>MoTaDV:</label>
          <textarea className='mx-11 border border-black w-1/5 ' name="moTaDV" placeholder='moTaDV' value={newData.moTaDV} onChange={handleInputChange} />
        </div>
        <div>
          <label>DonGia:</label>
          <input className=' mx-12 border border-black' type="number" placeholder='donGia' name="donGia" value={newData.donGia} onChange={handleInputChange} />
        </div>
        <div>
          <label>Đơn Vị:</label>
          <input className='mx-12 border border-black' type="text" placeholder='donVi' name="donVi" value={newData.donVi} onChange={handleInputChange} />
        </div>
        <div>
          <label>GhiChu:</label>
          <input className='mx-12 border border-black' type="text" placeholder='ghiChu' name="ghiChu" value={newData.ghiChu} onChange={handleInputChange} />
        </div>
        </div>
        <button onClick={handleAddData}>Add Data</button>
      </div>
    </div>
    </div>
  );
};

export default DataTable;
