import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, enim
          perferendis similique repellat in asperiores? Velit laboriosam
          blanditiis harum quaerat, soluta ipsa impedit quis dolore
          exercitationem eius repellendus necessitatibus officiis.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
          adipisci sint beatae et dolores culpa?
        </p>
      </div>
    </div>
  );
};
