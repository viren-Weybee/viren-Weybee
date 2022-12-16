import React from "react";

const FormSelect = (props) => {
  const { option, valueField, defalutValue } = props;

  return (
    <select value={defalutValue} {...props}>
      {option.map((op) => (
        <option key={op.id} value={op[valueField]}>
          {op.name}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
