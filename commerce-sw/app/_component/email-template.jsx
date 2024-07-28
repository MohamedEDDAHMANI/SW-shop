import * as React from 'react';
import Index from '../email/index';


export const EmailTemplate = ({
  
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <Index/>
  </div>
);
