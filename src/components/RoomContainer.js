import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// const RoomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         console.log(value);
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             Rooms container here
//             <RoomsFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomsContainer;
