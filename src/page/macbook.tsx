
import React from 'react';
import '../index.css';
import backgr from '../image/pic.png'
import product2 from "../image/lap2.jpg"
import product3 from "../image/lap3.jpg"
import product4 from "../image/lap4.jpg"
import product5 from "../image/lap5.jpg"
import product6 from "../image/lap6.jpg"
import product7 from "../image/lap7.jpg"
import product8 from "../image/lap8.jpg"
import product9 from "../image/lap9.jpg"
import product10 from "../image/lap10.jpg"
import product11 from "../image/lap11.jpg"
import product12 from "../image/lap12.jpg"
import product13 from "../image/lap13.jpg"
import product14 from "../image/lap14.jpg"
import product15 from "../image/lap15.jpg"
import product16 from "../image/lap16.jpg"
import brand1 from "../image/brand1.jpg"
import brand2 from "../image/brand2.jpg"
import brand3 from "../image/brand3.jpg"
import brand4 from "../image/brand4.jpg"
import brand5 from "../image/brand5.jpg"
import brand6 from "../image/brand6.jpg"
import brand7 from "../image/brand7.jpg"
import brand8 from "../image/brand8.jpg"
import bannermac1 from "../image/bannermac1.jpg"
import bannermac2 from "../image/bannermac2.jpg"
import logo_store from "../image/lap_store_fix.png"
import slogan_head1 from "../image/slogan_head1.jpg"
import slogan_head2 from "../image/slogan_head2.jpg"
import slogan_head3 from "../image/slogan_head3.jpg"


function Home() {
  return (
<>
<div className="header">
      <div className="upside_head">
        <img className="slogan_head" src={slogan_head1} alt=""></img>
        <img className="slogan_head" src={slogan_head2} alt=""></img>
        <img className="slogan_head" src={slogan_head3} alt=""></img>
        <img className="slogan_head" src={slogan_head2} alt=""></img>
        

      </div>
      <div className="header_box">
          <div className="header_left">
              <a href="tel:+849888888888">
               <button className='custom_help'>Chăm sóc khách hàng : 09888888888</button>
              </a>
        </div>
        <div className="header_right">
            <div className="signin">
              <a href='/signin'>
                <button className="signin_button">Đăng Nhập</button>
              </a>
            </div>
            <div className="signin">
              <a href='/signup'>
                <button className="signup_button">Đăng Ký</button>  
              </a>
            </div>
          </div>
      </div>
      <div className="under_header">
        <div className="logo" >
          <a href="/">
          <img className="logo_store" src={logo_store} alt=""></img>
          </a>
        </div>  
        <div className="search">
          <div className="search-box">
            <input className="search-box-input" type="text"  placeholder="Tìm kiếm sản phẩm..." />
            <input className="search-box-button" type="button"  defaultValue="Tìm kiếm" />
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
            <img className="banner1" src={bannermac1} alt=""></img>
            <img className="banner1" src={bannermac2} alt=""></img>
            
        </div>
      </div>
      <div>             
        
        <img className ="backgroundimage" src={backgr} alt="pic"/>
        </div>
        <div className="shop">
          <div className = 'shop_list'>
            
            <div className='product_noform'>
                
                    <a href="/macbook">
                      <img className="product_brand1" src ={brand1} alt=""></img>
                    </a>
                    <a href="/asus">
                        <img className="product_brand1" src ={brand2} alt=""></img>
                    </a> 
                    <a href="/msi">
                      <img className="product_brand1" src ={brand3} alt=""></img>
                    </a>
                    <a href="/lenovo">
                      <img className="product_brand1" src ={brand4} alt=""></img>
                    </a>
                    <a href="/hp">
                      <img className="product_brand1" src ={brand5} alt=""></img>
                    </a>
                    <a href="/acer">
                      <img className="product_brand1" src ={brand6} alt=""></img>
                    </a>
                    <a href="/LG">
                      <img className="product_brand1" src ={brand7} alt=""></img>
                    </a>
                    <a href="/Dell">
                      <img className="product_brand1" src ={brand8} alt=""></img>
                    </a>
                
            </div>
            <div className="product_form">
              <div className='product_form_up'>
                  <p className="shop_list_head_text">Sản Phẩm Nổi Bật</p>
              </div>
              <div className='product_form_down'>
                <div className="product_list1">
                  <img className="product_img_1" src={product2} alt=""></img>
                  <p className="product_deltail">Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt </p>
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
              <div className='product_form_down2'>
                <div className="product_list1">
                  <img className="product_img_1" src={product7} alt=""></img>
                  <p className="product_deltail">Laptop MSI Gaming Bravo 15 B7ED-010VN</p>
                  <div className="product_price">
                    <p className="product_price_sale">15.990.000₫</p>
                    <p className="product_old_price">18.490.000₫</p>
                  </div>
                </div>
                <div className="product_list1">
                  <img className="product_img_1" src={product8} alt=""></img>
                  <p className="product_deltail">Laptop HP Pavilion 14-DV2073TU 7C0P2PA</p>
                  <div className="product_price">
                    <p className="product_price_sale">16.490.000₫</p>
                    <p className="product_old_price">20.990.000₫</p>
                  </div>
                </div>
                <div className="product_list1">
                  <img className="product_img_1" src={product9} alt=""></img>
                  <p className="product_deltail">Laptop HP Gaming Victus 15-FB1023AX 94F20PA</p>
                  <div className="product_price">
                    <p className="product_price_sale">17.590.000₫</p>
                    <p className="product_old_price">24.490.000₫</p>
                  </div>
                </div>
                <div className="product_list1">
                 <img className="product_img_1" src={product10} alt=""></img>
                 <p className="product_deltail">Laptop LG Gram 2023 14Z90RS-G.AH54A5</p>
                 <div className="product_price">
                    <p className="product_price_sale">29.490.000₫</p>
                    <p className="product_old_price">38.990.000₫</p>
                  </div>
                 </div>
                <div className="product_list1">
                  <img className="product_img_1" src={product11} alt=""></img>
                  <p className="product_deltail">Laptop Lenovo IdeaPad 3 14ITL6 82H701QWVN</p>
                  <div className="product_price">
                    <p className="product_price_sale">9.390.000₫</p>
                    <p className="product_old_price">11.290.000₫</p>
                  </div>
                </div>
              </div>
              <div className='product_form_down3'>
                <div className="product_list1">
                  <img className="product_img_1" src={product12} alt=""></img>
                  <p className="product_deltail">Laptop MSI Gaming Bravo 15 B7ED-010VN</p>
                  <div className="product_price">
                    <p className="product_price_sale">15.990.000₫</p>
                    <p className="product_old_price">18.490.000₫</p>
                  </div>
                </div>
                <div className="product_list1">
                  <img className="product_img_1" src={product13} alt=""></img>
                  <p className="product_deltail">Laptop HP Pavilion 14-DV2073TU 7C0P2PA</p>
                  <div className="product_price">
                    <p className="product_price_sale">16.490.000₫</p>
                    <p className="product_old_price">20.990.000₫</p>
                  </div>
                </div>
                <div className="product_list1">
                  <img className="product_img_1" src={product14} alt=""></img>
                  <p className="product_deltail">Laptop HP Gaming Victus 15-FB1023AX 94F20PA</p>
                  <div className="product_price">
                    <p className="product_price_sale">17.590.000₫</p>
                    <p className="product_old_price">24.490.000₫</p>
                  </div>
                </div>
                <div className="product_list1">
                 <img className="product_img_1" src={product15} alt=""></img>
                 <p className="product_deltail">Laptop LG Gram 2023 14Z90RS-G.AH54A5</p>
                 <div className="product_price">
                    <p className="product_price_sale">29.490.000₫</p>
                    <p className="product_old_price">38.990.000₫</p>
                  </div>
                 </div>
                <div className="product_list1">
                  <img className="product_img_1" src={product16} alt=""></img>
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