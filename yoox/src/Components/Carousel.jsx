import React from "react";
import { Carousel } from "react-responsive-carousel";
import {Text} from "@chakra-ui/react";
export const Slides=() => (
  <Carousel autoPlay >
    <div >
      <img style={{width:"300px"}}  alt="" src="https://www.yoox.com/images/yoox80/banners/6825_3_BaumeMercier_Tris_M.png?634485886869569819#width=473&height=660" />
      <p className="legend">Fleece sweatpants in 100% organic cotton</p>
    </div>
    <div>
      <img style={{width:"300px"}} alt="" src="https://www.yoox.com/images/yoox80/banners/6825_1_COS_Tris_M.png?634485886869569819#width=473&height=660" />
      <p className="legend">Striped shirt in 100% cotton</p>
    </div>
    <div>
      <img style={{width:"300px"}} alt="" src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_M_Tris.jpg?634485886869569819#width=473&height=660" />
      <p className="legend">Shorts & Bermuda</p>
    </div>
    <div>
      <img style={{width:"300px"}} alt="" src="https://www.yoox.com/images/yoox80/banners/6825_5_BaumeMercier_Tris_W.png?634485886869569819#width=473&height=660" />
      <p className="legend">Denim pants</p>
    </div>
    <div>
      <img style={{width:"300px"}} alt="" src="https://www.yoox.com/images/items/12/12766118ba_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center" />
      <p className="legend">Solid color shirts</p>
    </div>
    <div>
      <img style={{width:"300px"}} alt="" src="https://www.yoox.com/images/items/13/13778830xe_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center" />
      <p className="legend">Casual pants"</p>
    </div>
    <div>
      <img style={{width:"300px"}} alt="" src="https://www.yoox.com/images/items/13/13778830xe_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center" />
      <p className="legend">Denim pants"</p>
    </div>
    <div>
      <img style={{width:"300px"}} alt="" src="https://www.yoox.com/images/items/13/13757132di_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center" />
      <p className="legend">Casual pants</p>
    </div>
  </Carousel>
);