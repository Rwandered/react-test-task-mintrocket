import React from "react";
import Pagination from "../Pagination/Pagination";
import Select from "../Select/Select";

const Footer = () => {

  return (
    <div className={'footer__wrapper'}>
      <Pagination/>
      <Select/>
    </div>
  )
}

export default Footer