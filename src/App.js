import React, { useState, createContext, useContext, useEffect } from 'react';
import './style.css';

// Import Custom Components
import SmartPhone from './components/SmartPhone.js';
import Content from './components/Content.js';
import Container from './components/Container.js';

const contactsArray = createContext([
  {
    id: 1,
    name: 'Carlos Nah',
    img_url: 'https://api.multiavatar.com/CN.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 2,
    name: 'Paul Rome',
    img_url: 'https://api.multiavatar.com/PR.png',
    address: 'Congo Town',
    msisdns: ['0776778977', '0555678934'],
  },
  {
    id: 3,
    name: 'Jacob Brown',
    img_url: 'https://api.multiavatar.com/JB.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 4,
    name: 'Flomo Kortu',
    img_url: 'https://api.multiavatar.com/FK.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 5,
    name: 'Abraham Kortu',
    img_url: 'https://api.multiavatar.com/FK.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 6,
    name: 'Flomo Kortu',
    img_url: 'https://api.multiavatar.com/FK.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 7,
    name: 'Abraham Kortu',
    img_url: 'https://api.multiavatar.com/FK.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
]);

export default function App() {
  console.log('Here: ', process.env);
  return (
    <div>
      <SmartPhone>
        <Content>
          <Container />
        </Content>
      </SmartPhone>
    </div>
  );
}

