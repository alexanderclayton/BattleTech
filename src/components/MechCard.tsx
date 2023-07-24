import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MechCardProps {
  image: string;
  name: string;
  id: string;
}

function MechCard({ image, name, id }: MechCardProps) {
  const navigate = useNavigate();

  return (
    <div className='mech-card' onClick={() => navigate('/mechs/' + id)}>
      <div style={{ backgroundImage: `url(${image})` }} className='background-image' />
      <h2>{name}</h2>
    </div>
  );
}

export default MechCard;
