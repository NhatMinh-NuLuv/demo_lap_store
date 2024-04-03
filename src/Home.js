
import React from 'react';
import './new.css';
import backgr from "./pic/pic.png"
import product2 from "./pic/lap2.jpg"
import product3 from "./pic/lap3.jpg"
import product4 from "./pic/lap4.jpg"
import product5 from "./pic/lap5.jpg"
import product6 from "./pic/lap6.jpg"
import brand1 from "./pic/brand1.jpg"
import brand2 from "./pic/brand2.jpg"
import brand3 from "./pic/brand3.jpg"
import brand4 from "./pic/brand4.jpg"
import brand5 from "./pic/brand5.jpg"
import brand6 from "./pic/brand6.jpg"
import brand7 from "./pic/brand7.jpg"
import brand8 from "./pic/brand8.jpg"
import banner from "./pic/banner.jpg"
import banner2 from "./pic/banner2.jpg"
import banner3 from "./pic/banner3.jpg"
import logo_store from "./pic/lap_store_fix.png"

function Home() {
  return (
<>
<div className="header">
      <div className="header_box">
      <div className="header_left">
              <a href=" " className="a">Chăm sóc khách hàng : </a>
              <a className="a" href="tel:+849888888888">09888888888</a>
          </div>
          <div className="header_right">
            <div className="login">
              <a className="a"  href="/signin" style={{textDecoration:"none", color:"rgb(0, 0, 0)"}}>Đăng Nhập</a>
            </div>
            <div className="singin">
              <a className="a"  href="/signup" style={{textDecoration:"none", color:"rgb(0, 0, 0)"}}>Đăng Ký</a>
            </div>
          </div>
  
      </div>
      <div className="under_header">
        <div className="logo" onclick="home()">
          <a href="/">
          {/* <input className="logo-text" type="button" onclick defaultValue="MingShen Lap" /> */}
          <img className="logo_store" src={logo_store} alt="">
          </img>
          </a>
        </div>  
        <div className="search">
          <div className="search-box">
            <input className="search-box-input" type="text" onclick placeholder="Tìm kiếm sản phẩm..." />
            <input className="search-box-button" type="button" onclick defaultValue="Tìm kiếm" />
          </div>
        </div>
        <div className="profile">
        </div>
        <div className="cart"> </div>
      </div>
      <div className="body-contaner">
        <div className="body-box">
          <div className="navbar">
            <div className="home">
              <a  href="/" className="navbar_text">TRANG CHỦ</a>
            </div>  
            <div className="list">
              <a  href=" " className="navbar_text">DANH MỤC</a>
            </div>
            <div className="news">
              <a  href=" " className="navbar_text">TIN TỨC</a>
            </div>
            <div className="intro">
              <a  href=" " className="navbar_text">GIỚI THIỆU</a>
            </div>
            <div className="contact">
              <a  href=" " className="navbar_text">LIÊN HỆ</a>
            </div>
            <div className="profiles">
              <a href="/profile" className="navbar_text">THÔNG TIN</a>
            </div>
          </div>
        </div>

      </div>
      <div className="banner">
        <div className="banner_list">
            <img className="banner1" src={banner} alt=""></img>
            <img className="banner1" src={banner2} alt=""></img>
            <img className="banner1" src={banner3} alt=""></img>
        </div>
      </div>
      <div>
             <img className ="backgroundimage" src={backgr} alt="pic"/>
        </div>
        <div className="shop">
          <div className = 'shop_list'>
            
            <div className='product_noform'>
                <div className="product_brand">
                    <img className="product_brand1" src ={brand1} alt=""></img>
                </div>
                <div className="product_brand">
                    <img className="product_brand1" src ={brand2} alt=""></img>
                </div>
                <div className="product_brand">
                    <img className="product_brand1" src ={brand3} alt=""></img>
                </div>
                <div className="product_brand">
                    <img className="product_brand1" src ={brand4} alt=""></img>
                </div>
                <div className="product_brand">
                    <img className="product_brand1" src ={brand5} alt=""></img>
                </div>
                <div className="product_brand">
                    <img className="product_brand1" src ={brand6} alt=""></img>
                </div>
                <div className="product_brand">
                    <img className="product_brand1" src ={brand7} alt=""></img>
                </div>
                <div className="product_brand">
                    <img className="product_brand1" src ={brand8} alt=""></img>
                </div>
            </div>
            <div className="product_form">
              <div className='product_form_up'>
                  <p className="shop_list_head_text">Sản Phẩm Nổi Bật</p>
              </div>
              <div className='product_form_down'>
                <div className="product_list1">
                  <img className="product_img_1" src={product2} alt=""></img>
                  <p className="product_deltail">Laptop MSI Gaming Bravo 15 B7ED-010VN</p>
                  <div className="product_price">
                    <p className="product_price_sale">15.990.000₫</p>
                    <p className="product_old_price">18.490.000₫</p>
                  </div>
                </div>
                <div className="product_list1">
                  <img className="product_img_1" src={product3} alt=""></img>
                  <p className="product_deltail">Laptop HP Pavilion 14-DV2073TU 7C0P2PA</p>
                  <div className="product_price">
                    <p className="product_price_sale">16.490.000₫</p>
                    <p className="product_old_price">20.990.000₫</p>
                  </div>
                </div>
                <div className="product_list1">
                  <img className="product_img_1" src={product4} alt=""></img>
                  <p className="product_deltail">Laptop HP Gaming Victus 15-FB1023AX 94F20PA</p>
                  <div className="product_price">
                    <p className="product_price_sale">17.590.000₫</p>
                    <p className="product_old_price">24.490.000₫</p>
                  </div>
                </div>
                <div className="product_list1">
                 <img className="product_img_1" src={product5} alt=""></img>
                 <p className="product_deltail">Laptop LG Gram 2023 14Z90RS-G.AH54A5</p>
                 <div className="product_price">
                    <p className="product_price_sale">29.490.000₫</p>
                    <p className="product_old_price">38.990.000₫</p>
                  </div>
                 </div>
                <div className="product_list1">
                  <img className="product_img_1" src={product6} alt=""></img>
                  <p className="product_deltail">Laptop Lenovo IdeaPad 3 14ITL6 82H701QWVN</p>
                  <div className="product_price">
                    <p className="product_price_sale">9.390.000₫</p>
                    <p className="product_old_price">11.290.000₫</p>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
    </div>
    
</>
  )

}
 
export default Home;
