import React from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import "./Card.css";
import img1 from "./Images/img1.png";
import img2 from "./Images/img2.png";
import img3 from "./Images/img3.png";
import img4 from "./Images/img4.png";
import img5 from "./Images/img5.png";
import img6 from "./Images/img6.png";
const Card = () => {
  const data = [
    {
      title: "Grilled Tomatoes at Home",
      text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: img1,
    },
    {
      title: "Snacks for Travel",
      text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: img2,
    },
    {
      title: "Post-workout Recipes",
      text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...2",
      image: img3,
    },
    {
      title: "How To Grill Corn",
      text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: img4,
    },
    {
      title: "Crunchwrap Supreme",
      text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: img5,
    },
    {
      title: "Brocoli Cheese Soup",
      text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      image: img6,
    },
  ];
  const [currentdata, setCurrentdata] = useState(data.slice(0, 3));
  const handlePageClick = (i) => {
    let now = i.selected * 3;
    // console.log(now);
    setCurrentdata(data.slice(now, 3 + now));
  };
  return (
    <>
      <div className="articlebox">
        <div className="articlettl">Latest Articles</div>
        <div className="cardbox">
          {currentdata.map((val, i) => {
            return (
              <>
                <div className="card" key={i}>
                  <img src={val.image} className="imgsize" alt="" />
                  <div className="cardtitle">{val.title}</div>
                  <div className="cardcontent">{val.text}</div>
                  <button className="cardbtn">Read More</button>
                </div>
              </>
            );
          })}
        </div>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"pagination"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
        />
      </div>
    </>
  );
};

export default Card;
