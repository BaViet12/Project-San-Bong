import React from 'react';

interface PlayerCardProps {
    imageSrc: string;
    position: string;
    description: string;
  }
  
const PlayerCard: React.FC<PlayerCardProps> = ({ imageSrc, position, description }) => {
    return (
      <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
        <img src={imageSrc} alt={position} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-center">{position}</h2>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </div>
    );
};

const Content2 = () => {
  const players = [
    {
      imageSrc: 'https://theme.hstatic.net/1000061481/1001035882/14/position_banner_1.jpg?v=2019',
      position: 'Hậu Vệ',
      description: 'Phòng Ngự, Chắc Chắn',
    },
    {
      imageSrc: 'https://theme.hstatic.net/1000061481/1001035882/14/position_banner_2.jpg?v=2019',
      position: 'Tiền Vệ Trung Tâm',
      description: 'Kiểm Soát, Chuyền Bóng',
    },
    {
      imageSrc: 'https://theme.hstatic.net/1000061481/1001035882/14/position_banner_3.jpg?v=2019',
      position: 'Tiền Vệ Cánh',
      description: 'Tốc Độ, Đột Phá',
    },
    {
      imageSrc: 'https://theme.hstatic.net/1000061481/1001035882/14/position_banner_4.jpg?v=2019', // Replace with the actual image link
      position: 'Tiền Đạo',
      description: 'Dứt Điểm, Chính Xác',
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-8 mb-6">Chọn Giày Theo Vị Trí</h1>
      <div className="flex gap-32">
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            imageSrc={player.imageSrc}
            position={player.position}
            description={player.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Content2;
