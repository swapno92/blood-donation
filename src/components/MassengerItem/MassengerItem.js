"use client"
import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const MassengerItem = () => {
  return (
    <div>
      <FacebookProvider appId="1464077697760617" chatSupport>
        <CustomChat pageId="114004617994330" />
      </FacebookProvider>
    </div>
  );
};

export default MassengerItem;