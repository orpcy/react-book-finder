import React from "react";

export const desc = d => {
  if (!d) {
    return <span className="text-info">No Description Available</span>;
  } else {
    return d;
  }
};

export const author = a => {
  if (!a) {
    return <span className="text-info">NA</span>;
  } else {
    return a.join(", ");
  }
};
