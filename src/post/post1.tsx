import React from "react";
import "../index.css"

import slogan_head1 from "../image/slogan_head1.jpg"
import slogan_head2 from "../image/slogan_head2.jpg"
import slogan_head3 from "../image/slogan_head3.jpg"

function Home(){
 return(
 <>
  <div className="upside_head">
      <a href="./swiper">
            <img className="slogan_head" src={slogan_head1} alt=""></img>
        </a>
        <img className="slogan_head" src={slogan_head2} alt=""></img>
        <img className="slogan_head" src={slogan_head3} alt=""></img>
        <img className="slogan_head" src={slogan_head2} alt=""></img>
        

      </div>
        <h1>Cách kết nối máy tính bảng với màn hình máy tính chi tiết nhất</h1>


      </>

 )



}
export default Home;