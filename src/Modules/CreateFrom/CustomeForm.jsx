import React, { useState } from "react";
import GetForm from "./_GetForm";

const CustomeForm = () => {
  const [formtext, setFormText] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="custome-form">
      <p className="hint">
        enter statement in following way :"4 field with text input"
      </p>
      <input
        value={formtext}
        onChange={(e) => setFormText(e.target.value)}
        placeholder="enter sentence how many field and type of fields"
      ></input>
      <button onClick={() => setShow(!show)}>Submit</button>
      {show && (formtext && formtext.length) > 0 ? (
        <GetForm formFields={formtext} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomeForm;
