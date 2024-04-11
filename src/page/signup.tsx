import React from 'react';
import '../index.css';
import logo_store from "../image/lap_store_fix.png"
import slogan_head1 from "../image/slogan_head1.jpg"
import slogan_head2 from "../image/slogan_head2.jpg"
import slogan_head3 from "../image/slogan_head3.jpg"
import pic_sign_up from "../image/pic_signup.jpg"
import back_button from "../image/back_button.jpg"
import google from "../image/google.jpg"
import zalo from "../image/zalo.jpg"



function SignUp() {

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
        <div className="logo">
          <a href="/">
          <img className="logo_store" src={logo_store} alt="">
            </img>
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
      <div className='back_button'>
        <a href='/' >
        
        <img className='back_button_img' src={back_button} alt=''></img>
        </a>
      </div>
      <div className="pic_signup">
        <img className="pic_sign_up" src={pic_sign_up} alt=""></img>
      </div>
      <p className="sign_up_head_text">Đăng ký với</p>
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
      
        <div className="under-body-contaner-left">
            <div className="head-body-contaner">
              </div>  
        <div className="signup-box">
            <input className="underbody-box-input-name" type="text"  placeholder="Tên Đăng Nhập..." />
            <input className="underbody-box-input-pw" type="text"  placeholder="Mật khẩu..." />
            <p className='note'>(*) Mật khẩu tối thiểu 6 ký tự, có ít nhất 1 chữ và 1 số. (VD: 12345a)</p>
            <input className="underbody-box-input-phone" type="text"  placeholder="Số điện thoại..." />
            <input className="underbody-box-input-address" type="text"  placeholder="Địa chỉ..." />
            <input className="underbody-box-input-mail" type="text"  placeholder="Gmail...(hông bắt buộc)" />
            <p className='note'>*Hóa đơn VAT khi mua hàng sẽ được gửi qua email này</p>
            <input className="underbody-checkbox1" type="checkbox"/>    Đăng ký nhận bản tin khuyến mãi từ MingShen
            <br></br>
            <input className="underbody-checkbox2" type="checkbox" />    Tôi đồng ý với các điều khoản bảo mật cá nhân
            <input className="underbody-box-input-signup" type="button"  defaultValue="Đăng Ký" />
        </div>
                <div className='bottom_signup'>
                  <p className='bottom_text'>Bạn đã có tài khoản?</p>
                  <a href='./signin' className='forgot_pass_box'>
                    <p className='chang_to_signup'>Đăng nhập ngay</p>
                  </a>
               </div>
      </div>
      
</div>
</div>







</>
  )

};
export default SignUp
 
