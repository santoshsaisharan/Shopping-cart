import React from "react";

function subProduct({ color, RAM }) {
  return (
    <div>
      <p>
        <i>Color: {color}</i>
      </p>
      <p>
        <i>RAM Size: {RAM}</i>
      </p>
    </div>
  );
}

export default subProduct;
