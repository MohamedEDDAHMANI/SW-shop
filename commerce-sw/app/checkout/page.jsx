import React, { Suspense } from 'react';
import Checkout from './checkout'; // Adjust the path as needed

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Checkout />
    </Suspense>
  );
};

export default Page;
