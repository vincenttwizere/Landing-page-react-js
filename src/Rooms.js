import React from 'react';
import room1 from './Assets/single room.jpg'
import room2 from './Assets/Double room.jpg'
import room3 from './Assets/Suits.jpg'
function Rooms() {
  return (
    <section id="menu" className="rooms">
      <h2>Our Rooms</h2>
      <div className="room-grid">
        <div className="room">
        <img src={room1} alt="Room 1" />
          <h3>Single Room</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>$100/night</p>
        </div>
        <div className="room">
          <img src={room2} className='' alt="Room 2" />
          <h3>Double Room</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>$150/night</p>
        </div>
        <div className="room">
          <img src={room3} className='' alt="Room 3" />
          <h3>Suite</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>$250/night</p>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
