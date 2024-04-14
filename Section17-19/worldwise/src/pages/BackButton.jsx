import React from "react";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";

function BackButton(props) {
  const navigate = useNavigate();

  return (
    <Button type={"back"} onClick={(e) => {
      e.preventDefault();
      navigate(-1);
    }}>&larr; Back</Button>
  );
}

export default BackButton;
