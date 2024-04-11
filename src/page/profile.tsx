import React from 'react';
import '../index.css';
import logo_store from "../image/lap_store_fix.png"
import slogan_head1 from "../image/slogan_head1.jpg"
import slogan_head2 from "../image/slogan_head2.jpg"
import slogan_head3 from "../image/slogan_head3.jpg"
import banner from "../image/banner.jpg"
import banner2 from "../image/banner2.jpg"
import banner3 from "../image/banner3.jpg"



function Profile(){
    return(
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
  <div className="logo">
          <a href="/">
          <img className="logo_store" src={logo_store} alt="">
            </img>
          </a>
        </div>   
    <div className="search">
      <div className="search-box">
        <input className="search-box-input" type="text"  defaultValue="Tìm kiếm sản phẩm..." />
        <input className="search-box-button" type="button"  defaultValue="Tìm kiếm" />
      </div>
    </div>
    <div className="cart">
    </div>
  </div>
  <div className="body-contaner">
    <div className="body-box">
      <div className="navbar">
        <div className="home">
          <a href = "/" className="navbar_text">TRANG CHỦ</a>
        </div>
        <div className="list">
          <a href = " " className="navbar_text">DANH MỤC</a>
        </div>
        <div className="news">
          <a href = " " className="navbar_text">TIN TỨC</a>
        </div>
        <div className="intro">
          <a href = " " className="navbar_text">GIỚI THIỆU</a>
        </div>
        <div className="contact">
          <a href = " " className="navbar_text">LIÊN HỆ</a>
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
  <div className="profile-in">
    <div className="frofile-box">
      <div className="div1">
      <div className="overeview">
        <a href=" " className="text_profile">Tổng quan</a>
      </div> 
      <div>
      <a href=" " className="text_profile-in">Cho nay la thong tin tong quan</a>
      </div>
      </div>
       
      
      
      <div className="info">
        <a href=" " className="text_profile" >Thông tin</a>
      </div>
      <div className="Shopping">
        <a href=" " className="text_profile">Giỏ hàng</a>
      </div>
      <div className="Sign_out">
        <a href=" " className="text_profile">Đăng xuất</a>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default Profile
        
        

    
