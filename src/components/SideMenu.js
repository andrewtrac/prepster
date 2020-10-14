import React from "react";
import { Collapse } from "antd";
import Categories from './Categories'

import "../styles/sidemenu.scss";
import "antd/dist/antd.css";

const { Panel } = Collapse;

export default function SideMenu() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <>
      <Collapse className="sidemenu-main">
        <Panel className="sidemenu-panel" header="Categories" key="1">
          <Categories/>
        </Panel>
        <Panel className="sidemenu-panel" header="Analytics" key="2">
          <p>{text}</p>
        </Panel>
        <Panel className="sidemenu-panel" header="STARTs" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
      ,
    </>
  );
}
