import React from "react";
import star from "./icons/star.svg";
import goldStar from "./icons/star-gold.svg";
import styles from "./rating.module.css";
import { SIZE } from "../../constants/size";

export default function Rating({
  value,
  size = SIZE.m,
  onChange = () => {
    return;
  },
}) {
  return (
    <div>
      {new Array(5).fill(undefined).map((element, index) => (
        <img
          src={index < value ? goldStar : star}
          className={styles[size]}
          onClick={() => onChange(index + 1)}
          alt="star"
        />
      ))}
    </div>
  );
}
