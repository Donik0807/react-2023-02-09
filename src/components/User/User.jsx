import React from "react";
import { selectUserById } from "../../store/entities/users/selectors";
import { useSelector } from "react-redux";

export default function User({ userId }) {
  const { name } = useSelector((state) => selectUserById(state, { userId }));
  return <div>{name}</div>;
}
