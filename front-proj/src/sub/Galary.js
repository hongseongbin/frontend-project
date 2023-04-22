import React from "react";

const Galary = () => {
  return (
    <div className="ga-wrap">
      <div className="ga-sec-01">
        <div className="submenu-textbox">
          <div className="submenu-t submenu-text-1">
            <p>갤러리</p>
          </div>
          <div className="submenu-t submenu-text-2">
            <h2>2022</h2>
          </div>
        </div>

        <div className="submenu-imgs">
          <div className="submenu-i submenu-img-01">
            <img src="./img/sv_img01.png" alt="기타치는이미지" />
          </div>
          <div className="submenu-i submenu-img-02">
            <img src="./img/sv_img02.png" alt="노래부르는 이미지" />
          </div>
          <div className="submenu-i submenu-img-03">
            <img src="./img/sv_img03.png" alt="오른쪽 위 음표 이미지" />
          </div>
          <div className="submenu-i submenu-img-04">
            <img src="./img/sv_img04.png" alt="왼쪽 위 음표 이미지" />
          </div>
        </div>
      </div>



      <div className="ga-body">
        <div
          className="w-wave"
          style={{ backgroundImage: "src=img/w_wave/png" }}
        ></div>
      </div>
    </div>
  );
};

export default Galary;
