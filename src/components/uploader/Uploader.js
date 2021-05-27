import React from "react";
import "./Uploader.css";
import image from "../../img/image.svg";
export default function Uploader() {
  const dragHandler = (event) => {
    event?.preventDefault();
    console.log(event);
  };
  return (
    <div className="row m-0">
      <div className="col ">
        <div className="main-box text-center">
          <div className="group">
            <h6 className="title">Upload your image</h6>
            <p className="subtitle">File should be Jpeg, Png,...</p>
            <div>
              <div
                style={{
                  minHeight: "218.9px",
                  border: "1px dashed #97BEF4",
                  marginLeft: "32px",
                  marginRight: "32px",
                }}
                onDrag={dragHandler}
              >
                <img
                  src={image}
                  alt="Imagen de carga"
                  style={{ marginTop: "36px" }}
                />
                <p
                  style={{
                    marginTop: "36px",
                    color: "#BDBDBD",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Drag & Drop your image here
                </p>
              </div>
              <p
                style={{
                  marginTop: "18px",
                  color: "#BDBDBD",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Or
              </p>
              <button
                style={{
                  fontFamily: "Noto Sans",
                  marginTop: "8px",
                  border: "none",
                  padding: "8px 16px",
                  color: "#fff",
                  fontSize: "12px",
                  background: "#2F80ED",
                  borderRadius: "8px",
                }}
              >
                {" "}
                Choose a file
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
