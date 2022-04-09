import io from 'socket.io-client';
import axios from 'axios';

let socket;
const SOCKET_URL = 'https://bootchat-server.herokuapp.com/';

export const initiateSocket = (channel, nickname) => {
  socket = io(SOCKET_URL, {
    query: { channel, nickname },
  });

  console.log('Connecting to socket');

  if (socket && channel) {
    socket.emit('CHANNEL_JOIN', channel);
  }
};

export const switchChannel = (prevChannel, channel) => {
  if (socket) {
    socket.emit('CHANNEL_SWITCH', { prevChannel, channel });
  }
};

export const subscribeToMessages = (callback) => {
  if (!socket) {
    return;
  }

  socket.on('NEW_MESSAGE', (data) => {
    callback(null, data);
  });
};

export const sendMessage = (data) => {
  if (!socket) {
    return;
  }

  socket.emit('MESSAGE_SEND', data);
};

export const fetchChannels = async () => {
  const response = await axios.get(`${SOCKET_URL}/getChannels`);

  return response.data.channels;
};

export const fetchChannelMessages = async (channel) => {
  const response = await axios.get(
    `${SOCKET_URL}/channels/${channel}/messages`
  );

  return response.data.allMessages;
};
