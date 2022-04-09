import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAsiVr7n7Zk8pZxl63adZst4UozSqVRIis',
  authDomain: 'react-chat-dabc1.firebaseapp.com',
  projectId: 'react-chat-dabc1',
  storageBucket: 'react-chat-dabc1.appspot.com',
  messagingSenderId: '48320097077',
  appId: '1:48320097077:web:945a457ac2ab67dda17a7c',
  measurementId: 'G-CEM5E82EE8',
};

const app = initializeApp(firebaseConfig);

export { app };
