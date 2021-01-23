import React from "react";
import { Checkbox } from "antd";

export default function Categories(props) {

  const { handleCategories } = props


  function onChange(checkedValues) {
    handleCategories(checkedValues)
  }
  return (
    <Checkbox.Group style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start"}} onChange={onChange}>
        <Checkbox style={{ marginLeft: "8px" }}value="time management">Time Management</Checkbox> 
        <Checkbox value="leadership">Leadership</Checkbox>
        <Checkbox value="communication">Communication</Checkbox>
        <Checkbox value="project management">Project Management</Checkbox>
        <Checkbox value="teamwork">Teamwork</Checkbox>
    </Checkbox.Group>
  );
}
