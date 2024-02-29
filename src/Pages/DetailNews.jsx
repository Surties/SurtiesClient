import React from "react";
import DetailNewsComponent from "../Components/DetailNewsComponent";
import { useParams } from "react-router-dom";

function DetailNews() {
  const { id } = useParams();

  return (
    <div>
      <DetailNewsComponent para={id} />
    </div>
  );
}

export default DetailNews;
