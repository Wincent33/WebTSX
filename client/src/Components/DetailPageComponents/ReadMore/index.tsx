import React, { useState } from "react";
import "./style.scss";
const ReadMore = ({ children }: any) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const Collapsed = () => {
    return (
      <div className="collapsed">
        <div className="gradient"></div>
        <p className="text">{text.slice(0, 600)}</p>
        <div onClick={toggleReadMore} className="read-or-hide">
          ...Read More
        </div>
      </div>
    );
  };
  const NotCollapsed = () => {
    return (
      <div className="not-collapsed">
        <p className="text">{text}</p>
        <div onClick={toggleReadMore} className="read-or-hide">
          Show Less
        </div>
      </div>
    );
  };

  return (
    <div className="readmore">
      {isReadMore ? <Collapsed /> : <NotCollapsed />}
    </div>
  );
};

export default ReadMore;
