import { Routes, Route} from 'react-router-dom'
import React from 'react';
import './new.css';
import logo_store from "./pic/lap_store_fix.png"
import slogan_head1 from "./pic/slogan_head1.jpg"
import slogan_head2 from "./pic/slogan_head2.jpg"
import slogan_head3 from "./pic/slogan_head3.jpg"
import pic_sign_up from "./pic/pic_signup.jpg"
import back_button from "./pic/back_button.jpg"
import google from "./pic/google.jpg"
import zalo from "./pic/zalo.jpg"

function SignIn() {
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
      <div className='back_button'>
        <a href='/' >
        
        <img className='back_button_img' src={back_button} alt=''></img>
        </a>
      </div>
      <div className="pic_signup">
        <img className="pic_sign_up" src={pic_sign_up} alt=""></img>
      </div>
      <p className="sign_up_head_text">Đăng nhập với</p>
      <div className="option_signup">
        <div className='option1'>
        <img className='option_signup_pic1' src={google} alt=''></img>
        <p className='text_option'>Google</p>
        </div>
        <div className='option2'>
        <img className='option_signup_pic2' src={zalo} alt=''></img>
        <p className='text_option'>Zalo</p>
        </div>
      </div>
      <div className='or_line'>
        <div className='line1'></div>
        <p className='text_line'>hoặc</p>
        <div className='line2'></div>
      </div>
        <div className="under-body">
            <div className="under-body-contaner-right">
                <div className="head-body-contaner">
                   
                </div>  
                <div className="signin-box">
                    <input className="underbody-box-input-name-signin" type="text" onclick placeholder="Tên Đăng Nhập..." />
                    <input className="underbody-box-input-pw-signin" type="text" onclick placeholder="Mật khẩu..." />
                    <a href='/' className="forgot_pass_box">
                    <p className='forgot_pass' >Quên mật khẩu?</p>
                    </a>
                    <input className="underbody-box-input-signin" type="button" onclick="signup()" defaultValue="Đăng Nhập" />
                </div>
               <div className='bottom_signin'>
                  <p className='bottom_text'>Bạn chưa có tài khoản?</p>
                  <a href='./signup' className='forgot_pass_box'>
                    <p className='chang_to_signup'>Đăng ký ngay</p>
                  </a>
                
               </div>
                
            </div>
        </div>
    </div>
</>
  )

}

export default SignIn
