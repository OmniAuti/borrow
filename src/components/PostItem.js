import { useState } from "react";

import { postSingleItem } from "../api/api";

const PostItem = () => {
  const [formData, setFormData] = useState({
    type: "pencil",
    quantity: 1,
    description: "",
    condition: "new",
    location: "",
    zipcode: "",
  });

  const handleTypeChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleQuantityChange = (e) => {
    setFormData({ ...formData, quantity: e.target.value });
  };

  const handleConditionChange = (e) => {
    setFormData({ ...formData, condition: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFormData({ ...formData, location: e.target.value });
  };
  const handleZIPChange = (e) => {
    setFormData({ ...formData, zipcode: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSingleItem(formData);
  };

  return (
    <section className="text-center flex items-center justify-center">
      <form onSubmit={(e) => handleSubmit(e)} className="text-black">
        <select require="true" onChange={(e) => handleTypeChange(e)}>
          <option default value="pencil">
            pencil
          </option>
          <option value="pen">pen</option>
          <option value="ruler">ruler</option>
          <option value="protractor">protractor</option>
          <option value="notebook">notebook</option>
          <option value="graphing paper">graphing paper</option>
          <option value="colored paper">colored paper</option>
          <option value="notecard/flashcard">notecard/flashcard</option>
          <option value="sticky note">sticky note</option>
          <option value="folder">folder</option>
          <option value="binder">binder</option>
          <option value="backpack">backpack</option>
          <option value="pencil pouch/case">pencil pouch/case</option>
          <option value="lunchbox">lunchbox</option>
          <option value="highlighter">highlighter</option>
          <option value="marker">marker</option>
          <option value="colored pencil">colored pencil</option>
          <option value="crayon">crayon</option>
          <option value="calculator">calculator</option>
        </select>
        <input
          require="true"
          onChange={(e) => handleDescriptionChange(e)}
          className="block my-2"
          type="text"
          name="type"
          maxLength="29"
        />
        <input
          require="true"
          onChange={(e) => handleQuantityChange(e)}
          className="block my-2"
          type="number"
          name="quantity"
          max="99"
          min="1"
        />
        <select
          require="true"
          onChange={(e) => handleConditionChange(e)}
          className="block my-2"
        >
          <option default value="new">
            new
          </option>
          <option value="slightly used">slightly used</option>
          <option value="moderately used">moderately used</option>
          <option value="heavily used">heavily used</option>
        </select>
        <input
          require="true"
          onChange={(e) => handleLocationChange(e)}
          className="block my-2"
          type="text"
          name="location"
          maxLength="20"
        />
        <input
          require="true"
          onChange={(e) => handleZIPChange(e)}
          className="block my-2"
          type="text"
          pattern="[0-9]{5}"
          maxLength="5"
          name="zipcode"
        />
        <input type="submit" className="text-white cursor-pointer" />
      </form>
    </section>
  );
};

export default PostItem;
