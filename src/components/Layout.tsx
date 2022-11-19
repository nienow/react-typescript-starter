import React, {ReactNode} from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";

type Props = {
  children?: ReactNode
}


const Layout = ({children}: Props) => {
  return <div>
    <Header></Header>
    {children}
    <Footer></Footer>
    <div id="dialog-container"></div>
  </div>
}

export default Layout
