import React from "react";
import { Checkbox, Row, Col } from "antd";

export default function Categories() {
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  return (
    <Checkbox.Group style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}} onChange={onChange}>
        <Checkbox style={{ marginLeft: "8px" }}value="Time Management">Time Management</Checkbox> 
        <Checkbox value="Leadership">Leadership</Checkbox>
        <Checkbox value="Communication">Communication</Checkbox>
        <Checkbox value="Project Management">Project Management</Checkbox>
        <Checkbox value="Teamwork">Teamwork</Checkbox>
    </Checkbox.Group>
  );
}
