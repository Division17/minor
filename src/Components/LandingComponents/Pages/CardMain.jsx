import React from "react";

const CardMain = ({ data, pro, imgsrc }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden group p-4 m-3 border">
      <img
        className="rounded-lg border-2 h-20 w-18"
        src={imgsrc}
        alt="Team-Section"
      ></img>
      <div className="text-center Proffesion p-8">
        <h3 className=" text-2xl font-bold mb-2 text-teal-900">{data}</h3>
        <h4 className=" text-lg font-normal mb-2">{pro} </h4>
        <ul>
          <li className="inline-block mx-3 hover:text-teal-600 duration-300">
            <a className="text-white" herf=""></a>Facebook
          </li>
          <li className="inline-block mx-3 hover:text-teal-600 duration-300">
            <a className="text-white" href=""></a>Instagram
          </li>
        </ul>
      </div>
      <br></br>
    </div>
  );
};

export default CardMain;
