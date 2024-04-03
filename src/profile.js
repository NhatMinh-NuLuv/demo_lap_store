import { Routes, Route} from 'react-router-dom'
import React from 'react';
import './new.css';

function Profile(){
    return(
        <>
        <div className="header">
  <div className="header_box">
          <div className="header_left">
              <a href=" " className="a">Chăm sóc khách hàng : </a>
              <a className="a" href="tel:+849888888888">09888888888</a>
          </div>
    <div className="header_right">
      <div className="login">
        <a className="a"  href="/SignIn" style={{textDecoration:"none" , color: "rgb(0, 0, 0)"}}>Đăng nhập</a>
      </div>
      <div className="singin">
        <a className="a"  href="/SignUp" style={{textdDecoration:"none", color:"rgb(0, 0, 0)"}}>Đăng Ký</a>
      </div>
    </div>
  </div>
  <div className="under_header">
    <div className="logo" onclick="home()">
      <a href="/">
          <input className="logo-text" type="button" onclick defaultValue="MingShen Lap" />
          </a>
    </div>  
    <div className="search">
      <div className="search-box">
        <input className="search-box-input" type="text" onclick defaultValue="Tìm kiếm sản phẩm..." />
        <input className="search-box-button" type="button" onclick defaultValue="Tìm kiếm" />
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
        <a href="" className="text_profile">Thông tin</a>
      </div>
      <div className="Shopping">
        <a href="" className="text_profile">Giỏ hàng</a>
      </div>
      <div className="Sign_out">
        <a href="" className="text_profile">Đăng xuất</a>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default Profile
        
        

    
