import React from "react";
import { FormSelect } from "react-bootstrap";
import FormCheckbox from "./FormControls/FormCheckbox";
import FormInput from "./FormControls/FormInput";

const GetForm = (props) => {
  const { FormFields, FormFieldsLoading } = props;

  const getFormContorls = (props) => {
    switch (props.formControlId) {
      case "1":
        return <FormInput />;
      case "2":
        return <FormSelect />;
      case "3":
        return <FormCheckbox />;
      default:
        break;
    }
  };
  return (
    <div>{FormFields && FormFields.map((field) => getFormContorls(field))}</div>
  );
};

export default GetForm;
