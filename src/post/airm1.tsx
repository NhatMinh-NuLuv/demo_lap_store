
import React from 'react';
import './post.css'
import star_icon from "../image/star_icon.jpg"
import golden_type_lap from "../image/golden_type.jpg"
import silver_type_lap from "../image/silver_type.jpg"
import gray_type_lap from "../image/gray_type.jpg"
import banner_mac_air_m1 from "../image/tragop_mac_air_m1.jpg"
import giohang from "../image/gio_hang.jpg"
import tradecoin_icon from "../image/tradecọin_icon2icon2.png"





function Home() {
  return (
<>
    <div className='header_detail'>
        <div className='headder_deltail_left'>
        <p className='header_title'>Apple Macbook Air M2 2022 8GB 256GB I Chính hãng Apple Việt Nam</p>
          </div>
        <div className='headder_deltail_right'>
          <img className='star' src={star_icon} alt="" />
          <img className='star' src={star_icon} alt="" />
          <img className='star' src={star_icon} alt="" />
          <img className='star' src={star_icon} alt="" />
          <img className='star' src={star_icon} alt="" />
          <p className='text_head_evaluate'>38 đánh giá </p>
        </div>
    </div>
    <div className='under_header_mac_air_m1'>
      <div className='video_box'>
        <iframe className="video_thumbnail_macbook_air_m1"
              src="https://www.youtube.com/embed/XIWANvgXtvI?rel=0&amp;
              autoplay=1&amp;mute=1" title="YouTube video player" allow="accelerometer;
              autoplay; clipboard-write;
              encrypted-media;  gyroscope;
              picture-in-picture" >
        </iframe>
        
        

      </div>
      <div className='under_header_rig'>
        <div className='under_header_right'>
          <div className='type_product_box'>
            <p className='text_in_box'>16GB - 512GB</p>
            <p className='price_in_box'>40.990.000 đ</p>
          </div>
          <div className='type_product_box'>
            <p className='text_in_box'>16GB - 512GB</p>
            <p className='price_in_box'>40.990.000 đ</p>
          </div>
          <div className='type_product_box'>
            <p className='text_in_box'>16GB - 512GB</p>
            <p className='price_in_box'>40.990.000 đ</p>
          </div>
        </div>
        <div className='under_header_rig_chose_type'>
          <p className='under_header_right_text'>Chọn màu để xem giá và chi nhánh có hàng</p>
          <div className='under_header_right_color'>
            <div className='type_color_product_box'>
              <img className='img_type_lap' src={golden_type_lap} alt="" />
                <div className='type_color_product_box_small'>
                  <p className='text_color_in_box'>Vàng</p>
                  <p className='price_color_in_box'>19.090.000 đ</p>
                </div>
            </div>
            <div className='type_color_product_box'>
            <img className='img_type_lap' src={silver_type_lap} alt="" />
                <div className='type_color_product_box_small'>
                  <p className='text_color_in_box'>Bạc</p>
                  <p className='price_color_in_box'>19.090.000 đ</p>
                </div>
            </div>
            <div className='type_color_product_box'>
            <img className='img_type_lap' src={gray_type_lap} alt="" />
                <div className='type_color_product_box_small'>
                  <p className='text_color_in_box'>Xám</p>
                  <p className='price_color_in_box'>18.690.000 đ</p>
                </div>
            </div>
            
          </div>
          <div className='under_header_option'>
              <div className="under_header_option_box">
                <img className='tc_icon' src={tradecoin_icon} alt="" />
                <div   className="under_header_option_left" >
                  <p className='uhol_price'>16.690.000 đ</p>
                  <p className='uhol_text'>Khi thu cũ lên đời</p>
                </div>
                <div  className="under_header_option_right">
                  <p className="uhor_price">18.690.000 đ</p>
                  <p className='uhor_text'>Khi thu cũ lên đời</p>
              
              </div>
              </div>
              
          </div>
          <div className="save_for_user">
              <div className="sfu_text_up">Tiết kiệm thêm đến <strong className='strong_text'>187.000đ</strong> cho Smember</div>
              <a href='/' className="sfu_text_down">Kiểm tra giá cuối cùng của bạn </a> {'>'}
          </div>
        </div>
        <div>
          <div className='banner_mac_air_m1'>
            <img className='banner_mac_air_m1_img' src={banner_mac_air_m1} alt="" />
          </div>
        </div>
        <div className='sale_box'>
            <img src="" alt="" />
            <p className='sale_text'>Khuyến mãi</p>
            <div className="info_sale_box">
              <a className='text_info_line' href="/">
                <p className="text_info">Phần Mềm Diệt Virus, Office chính hãng chỉ từ 150k (Xem chi tiết)</p>
              </a>
            </div>
        </div>
        <div className='buy_area'>
        <button className="button_buy">
          <p className='buy_text_up'>Mua ngay</p>
          <p className='buy_text_down'>Giao ngay trong 2 giờ hoặc nhận tại cửa hàng</p>
        </button>

        <div className='cart'>
          <img className='cart_icon' src={giohang} alt="" />
          <p className='cart_text'>Them vao gio</p>
        </div>
        </div>
        <div className='isment'>
          <div className="isment_left">
            <p className='isment_buy_text_up'>TRẢ GÓP 0%</p>
            <p className='isment_small_text_down'>Trả trước chỉ từ 5.577.000₫</p>
          </div>
          <div className="isment_right">
            <p className='isment_buy_text_up'>TRẢ GÓP 0% QUA THẺ</p>
            <p className='isment_small_text_down'>(Không phí chuyển đổi 3 - 6 tháng)</p>
          </div>

        </div>

      </div>
      
      
    </div>
    
    
</>
  )
}
 
export default Home;
