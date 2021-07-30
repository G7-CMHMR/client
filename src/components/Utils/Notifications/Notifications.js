import React from 'react';
import io from 'socket.io-client';
import api from '../../../config/url';

const Notifications = () => {
    console.log(io)
    const socket = io(api.urlDevelop)
    socket.on('connect', () => {
        console.log('You connected with id:' + socket.id)
    })
    /* console.log(api)

    console.log(io(api.urlDevelop), (algo) => {
         console.log(algo)         
    }) */
    return ( <div></div> );
}
export default Notifications;