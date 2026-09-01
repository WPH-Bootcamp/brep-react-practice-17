import ChatRoom from './1-ChatRoom';
import { useState } from 'react';

function Dashboard() {
  const [roomId, setRoomId] = useState('general');
  const [showRoom, setShowRoom] = useState(true);
  return (
    <section>
      <div>
        <button onClick={() => setRoomId('general')}>General Room</button>
        <button onClick={() => setRoomId('react')}>React Room</button>
        <button onClick={() => setRoomId('typescript')}>Typescript Room</button>
      </div>
      <button onClick={() => setShowRoom((room) => !room)}>
        {showRoom ? 'Keluar Room' : 'Masuk Room'}
      </button>
      {showRoom && <ChatRoom roomId={roomId} />}
    </section>
  );
}

export default Dashboard;
