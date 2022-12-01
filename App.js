import React from 'react';
import Cart from './product';

function App() {
  return (
    <div>
      <Cart name='iPhone12' storage={128} price={1200} brand='Apple' />
      <Cart name='S22' storage={256} price={1400} brand='Samsung' />
      <Cart name='Pixel' storage={128} price={1000} brand='Google' />
      <Cart name='OnePlusPro' storage={512} price={1400} brand='One' />
    </div>
  );
}

export default App;
