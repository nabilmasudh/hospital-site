import React from "react";
import Modal from "../Modal";
import NavLinks from "../NavLinks";
import NavSearch from "../NavSearch";
import Submenu from "../Submenu";

export default function Nav() {
  return (
    <>
      <NavSearch />
      <NavLinks />
      <Modal />
      <Submenu />
    </>
  );
}
