import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
    </BrowserRouter>
  );
}
