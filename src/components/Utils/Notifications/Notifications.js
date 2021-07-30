import React from 'react';
import io from 'socket.io-client';
import clientAxios from '../../../config/axios';

const Notifications = () => {
     console.log(io('http://localhost:3001'), (socket) => {
        console.log(socket)
        //io.emit('disconnect')
    }) 
    return ( <div></div> );
}
export default Notifications;