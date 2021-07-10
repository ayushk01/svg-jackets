import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

function Save(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");
  const [school, setschool] = useState("");
  const [jackets, setjackets] = useState("");

  const [dd, setdd] = useState(false);

  let frontLeftText = props.frontTopLeftText;
  let frontLeftTextFamily = props.frontTopLeftTextFamily;
  let frontLeftTextSize = props.frontTopLeftTextSize;
  let frontLeftTextStroke = props.frontTopLeftTextStroke;
  let frontLeftTextColor = props.frontTopLeftTextColor;
  let frontLeftTextStrokeColor = props.frontTopLeftTextStrokeColor;

  let frontRightText = props.frontTopRightText;
  let frontRightTextFamily = props.frontTopRightTextFamily;
  let frontRightTextSize = props.frontTopRightTextSize;
  let frontRightTextStroke = props.frontTopRightTextStroke;
  let frontRightTextColor = props.frontTopRightTextColor;
  let frontRightTextStrokeColor = props.frontTopRightTextStrokeColor;

  let backTopText = props.backTopText;
  let backTopTextColor = props.backTopTextColor;
  let backTopTextSize = props.backTopTextSize;
  let backTopTextFamily = props.backTopTextFamily;
  let backTopTextStroke = props.backTopTextStroke;
  let backTopTextStrokeColor = props.backTopTextStrokeColor;

  let backBottomText = props.backBottomText;
  let backBottomTextColor = props.backBottomTextColor;
  let backBottomTextSize = props.backBottomTextSize;
  let backBottomTextFamily = props.backBottomTextFamily;
  let backBottomTextStroke = props.backBottomTextStroke;
  let backBottomTextStrokeColor = props.backBottomTextStrokeColor;

  let leftText = props.leftText;
  let leftTextColor = props.leftTextColor;
  let leftTextSize = props.leftTextSize;
  let leftTextFamily = props.leftTextFamily;
  let leftTextStroke = props.leftTextStroke;
  let leftTextStrokeColor = props.leftTextStrokeColor;

  let rightText = props.rightText;
  let rightTextColor = props.rightTextColor;
  let rightTextSize = props.rightTextSize;
  let rightTextFamily = props.rightTextFamily;
  let rightTextStroke = props.rightTextStroke;
  let rightTextStrokeColor = props.rightTextStrokeColor;

  const submithandler = (e) => {
    e.preventDefault();

    if (frontLeftText === "") {
      frontLeftText = "";
      frontLeftTextFamily = "";
      frontLeftTextSize = "";
      frontLeftTextStroke = "";
      frontLeftTextColor = "";
      frontLeftTextStrokeColor = "";
    }
    if (frontRightText === "") {
      frontRightText = "";
      frontRightTextFamily = "";
      frontRightTextSize = "";
      frontRightTextStroke = "";
      frontRightTextColor = "";
      frontRightTextStrokeColor = "";
    }
    if (backTopText === "") {
      backTopText = "";
      backTopTextFamily = "";
      backTopTextSize = "";
      backTopTextStroke = "";
      backTopTextColor = "";
      backTopTextStrokeColor = "";
    }
    if (backBottomText === "") {
      backBottomText = "";
      backBottomTextFamily = "";
      backBottomTextSize = "";
      backBottomTextStroke = "";
      backBottomTextColor = "";
      backBottomTextStrokeColor = "";
    }
    if (leftText === "") {
      leftText = "";
      leftTextFamily = "";
      leftTextSize = "";
      leftTextStroke = "";
      leftTextColor = "";
      leftTextStrokeColor = "";
    }
    if (rightText === "") {
      rightText = "";
      rightTextFamily = "";
      rightTextSize = "";
      rightTextStroke = "";
      rightTextColor = "";
      rightTextStrokeColor = "";
    }

    var uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("email", email);
    uploadData.append("phone", phone);
    uploadData.append("country", country);
    uploadData.append("school", school);
    uploadData.append("order", jackets);
    uploadData.append("Body_Color", props.body);
    uploadData.append("Sleeves_Color", props.sleeves);
    uploadData.append("Rib1_Color", props.rib1);
    uploadData.append("Rib2_Color", props.rib2);
    uploadData.append("Pockets_Color", props.pockets);
    uploadData.append("Buttons_Color", props.buttons);
    uploadData.append("Front_Left_Text", frontLeftText);
    uploadData.append("Front_Left_Text_Font", frontLeftTextFamily);
    uploadData.append("Front_Left_Text_Size", frontLeftTextSize);
    uploadData.append("Front_Left_Text_Color", frontLeftTextColor);
    uploadData.append("Front_Left_Text_Stroke", frontLeftTextStroke);
    uploadData.append("Front_Left_Text_stroke_color", frontLeftTextStrokeColor);
    uploadData.append("Front_Right_Text", frontRightText);
    uploadData.append("Front_Right_Text_Font", frontRightTextFamily);
    uploadData.append("Front_Right_Text_Size", frontRightTextSize);
    uploadData.append("Front_Right_Text_Color", frontRightTextColor);
    uploadData.append("Front_Right_Text_Stroke", frontRightTextStroke);
    uploadData.append(
      "Front_Right_Text_stroke_color",
      frontRightTextStrokeColor
    );
    uploadData.append("Back_Top_Text", backTopText);
    uploadData.append("Back_Top_Text_Font", backTopTextFamily);
    uploadData.append("Back_Top_Text_Size", backTopTextSize);
    uploadData.append("Back_Top_Text_Color", backTopTextColor);
    uploadData.append("Back_Top_Text_Stroke", backTopTextStroke);
    uploadData.append("Back_Top_Text_stroke_color", backTopTextStrokeColor);
    uploadData.append("Back_Bottom_Text", backBottomText);
    uploadData.append("Back_Bottom_Text_Font", backBottomTextFamily);
    uploadData.append("Back_Bottom_Text_Size", backBottomTextSize);
    uploadData.append("Back_Bottom_Text_Color", backBottomTextColor);
    uploadData.append("Back_Bottom_Text_Stroke", backBottomTextStroke);
    uploadData.append(
      "Back_Bottom_Text_stroke_color",
      backBottomTextStrokeColor
    );
    uploadData.append("Left_Text", leftText);
    uploadData.append("Left_Text_Font", leftTextFamily);
    uploadData.append("Left_Text_Size", leftTextSize);
    uploadData.append("Left_Text_Color", leftTextColor);
    uploadData.append("Left_Text_Stroke", leftTextStroke);
    uploadData.append("Left_Text_stroke_color", leftTextStrokeColor);
    uploadData.append("Right_Text", rightText);
    uploadData.append("Right_Text_Font", rightTextFamily);
    uploadData.append("Right_Text_Size", rightTextSize);
    uploadData.append("Right_Text_Color", rightTextColor);
    uploadData.append("Right_Text_Stroke", rightTextStroke);
    uploadData.append("Right_Text_stroke_color", rightTextStrokeColor);
    uploadData.append("Front_Left_Image", props.frontTopLeftImage);
    uploadData.append("Front_Right_Image", props.frontTopRightImage);
    uploadData.append("Back_Center_Image", props.backCenterImage);
    uploadData.append("Left_Image", props.leftImage);
    uploadData.append("Right_Image", props.rightImage);

    // for (let [key, value] of uploadData)
    //   console.log(`${key} = ${value.slice(0, 20)}`);

    var svgs = Array.from(document.querySelectorAll("#backview, #Layer_1"));

    var finalSVGs = svgs.filter((svg) => svg.getBBox().width !== 0);
    var finalPNGs = [];

    finalSVGs.forEach((svgElement, index) => {
      let { width, height } = svgElement.getBBox();
      // let { width, height } = { width: 500, height: 296 };
      // let clonedSvgElement = svgElement.cloneNode(true);
      let outerHTML = svgElement.outerHTML;
      // let outerHTML = svgElement.outerHTML;
      let blob = new Blob([outerHTML], { type: "image/svg+xml;charset=utf-8" });
      let URL = window.URL || window.webkitURL || window;
      let blobURL = URL.createObjectURL(blob);
      let image = new Image();
      let canvas = document.createElement("canvas");
      image.onload = () => {
        canvas.width = width;
        canvas.height = height;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        let png = canvas.toDataURL("img/png", 1.0);
        finalPNGs.push(png);
        if (index === finalSVGs.length - 1) {
          finalPNGs.forEach((png, i) =>
            uploadData.append("Image" + (i + 1), png)
          );

          axios({
            method: "post",
            url: "https://senior-jackets-backend.herokuapp.com/newOrder",
            data: uploadData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then((res) => {
              alert("Woohoo! Your Response Has been Submitted!");
              setdd(true);
              window.location.reload();
            })
            .catch((err) => {
              alert("An error Occured!");
              console.log(err);
            });
        }
      };
      image.src = blobURL;
    });
  };

  return (
    <div>
      <button
        className="btn btn-success w-75"
        data-toggle="modal"
        data-target="#exampleModalScrollable"
      >
        Submit Design
      </button>
      {/* ..... */}

      <div
        className="modal fade"
        id="exampleModalScrollable"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalScrollableTitle">
                Add your name and email to save the design.
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {/* ... */}
            <div className="modal-body">
              <form onSubmit={submithandler}>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Name :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput2">
                    Email address :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput2"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput3">
                    Your mobile (for whatsapp) :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput3"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput4">Country :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput4"
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput5">
                    School Name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput5"
                    value={school}
                    onChange={(e) => setschool(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput6">
                    Number of jackets (mininum 8) :
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput6"
                    value={jackets}
                    onChange={(e) => setjackets(e.target.value)}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className={`btn btn-success ${dd && "d-none"}`}
                  >
                    Submit Order
                  </button>
                </div>
              </form>
            </div>
            {/* ... */}
          </div>
        </div>
      </div>
      {/* ..... */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    body: state.shirtColor.body,
    sleeves: state.shirtColor.sleeves,
    rib1: state.shirtColor.rib1,
    rib2: state.shirtColor.rib2,
    pockets: state.shirtColor.pockets,
    buttons: state.shirtColor.buttons,
    //.....
    frontTopLeftText: state.frontView.frontTopLeftText,
    frontTopLeftTextColor: state.frontView.frontTopLeftTextColor,
    frontTopLeftTextSize: state.frontView.frontTopLeftTextSize,
    frontTopLeftTextFamily: state.frontView.frontTopLeftTextFamily,
    frontTopLeftTextStroke: state.frontView.frontTopLeftTextStroke,
    frontTopLeftTextStrokeColor: state.frontView.frontTopLeftTextStrokeColor,
    //...
    frontTopRightText: state.frontView.frontTopRightText,
    frontTopRightTextColor: state.frontView.frontTopRightTextColor,
    frontTopRightTextSize: state.frontView.frontTopRightTextSize,
    frontTopRightTextFamily: state.frontView.frontTopRightTextFamily,
    frontTopRightTextStroke: state.frontView.frontTopRightTextStroke,
    frontTopRightTextStrokeColor: state.frontView.frontTopRightTextStrokeColor,
    //...
    backTopText: state.backView.backTopText,
    backTopTextColor: state.backView.backTopTextColor,
    backTopTextSize: state.backView.backTopTextSize,
    backTopTextFamily: state.backView.backTopTextFamily,
    backTopTextStroke: state.backView.backTopTextStroke,
    backTopTextStrokeColor: state.backView.backTopTextStrokeColor,
    //...
    backBottomText: state.backView.backBottomText,
    backBottomTextColor: state.backView.backBottomTextColor,
    backBottomTextSize: state.backView.backBottomTextSize,
    backBottomTextFamily: state.backView.backBottomTextFamily,
    backBottomTextStroke: state.backView.backBottomTextStroke,
    backBottomTextStrokeColor: state.backView.backBottomTextStrokeColor,
    //...
    leftText: state.leftView.leftText,
    leftTextColor: state.leftView.leftTextColor,
    leftTextSize: state.leftView.leftTextSize,
    leftTextFamily: state.leftView.leftTextFamily,
    leftTextStroke: state.leftView.leftTextStroke,
    leftTextStrokeColor: state.leftView.leftTextStrokeColor,
    //...
    rightText: state.rightView.rightText,
    rightTextColor: state.rightView.rightTextColor,
    rightTextSize: state.rightView.rightTextSize,
    rightTextFamily: state.rightView.rightTextFamily,
    rightTextStroke: state.rightView.rightTextStroke,
    rightTextStrokeColor: state.rightView.rightTextStrokeColor,
    //...
    frontTopLeftImage: state.frontView.frontTopLeftMainImage,
    frontTopRightImage: state.frontView.frontTopRightMainImage,
    backCenterImage: state.backView.backMainCenterImage,
    leftImage: state.leftView.leftMainImage,
    rightImage: state.rightView.rightMainImage,
  };
};

export default connect(mapStateToProps)(Save);
