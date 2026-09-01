import { useEffect } from 'react';

type ChatRoomProps = {
  roomId: string;
};

function ChatRoom({ roomId }: ChatRoomProps) {
  useEffect(
    function () {
      console.log('Masuk ke dalam room : ', roomId);
      const intervalId = setInterval(() => {
        console.log('Tick ');
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    },
    [roomId]
  );

  return (
    <article style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
      <h2>Room : {roomId}</h2>
      <p>Buka console untuk melihat proses useEffect</p>
    </article>
  );
}

export default ChatRoom;
