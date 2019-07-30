import React, { Component } from 'react';
import MenuKontak from "./page/MenuKontak";
import MenuUtama from "./page/MenuUtama.js";
import MenuProduct from "./page/MenuProduct";
import MenuTentangKami from "./page/MenuTentangKami";

const Header = () => {
  return (
    <div>
      <h2>Ini Halaman untuk Header</h2>
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      <h2>Ini Halaman untuk Footer</h2>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    )

  }
}

export default App;
