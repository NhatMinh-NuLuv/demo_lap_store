import { Routes, Route} from 'react-router-dom'
import React from 'react';
import './new.css';
import logo_store from "./pic/lap_store_fix.png"

function SignIn() {
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
              <a className="a"  href="/signin" style={{textDecoration:"none", color:"rgb(0, 0, 0)"}}>Đăng nhập</a>
            </div>
            <div className="singin">
              <a className="a"  href="/signup" style={{textDecoration:"none", color:"rgb(0, 0, 0)"}}>Đăng Ký</a>
            </div>
          </div>
  
      </div>
      <div className="under_header">
        <div className="logo" onclick="home()">
          <a href="/">
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
        <div className="under-body">
            <div className="under-body-contaner-right">
                <div className="head-body-contaner">
                    <h1 className="body_text">Đăng Nhập</h1>
                </div>  
                <div className="signin-box">
                    <input className="underbody-box-input-name-signin" type="text" onclick placeholder="Tên Đăng Nhập..." />
                    <input className="underbody-box-input-pw-signin" type="text" onclick placeholder="Mật khẩu..." />
                    <input className="underbody-box-input-signin" type="button" onclick="signup()" defaultValue="Đăng Nhập" />
                </div>
            </div>
        </div>
    </div>
</>
  )

}

export default SignIn
