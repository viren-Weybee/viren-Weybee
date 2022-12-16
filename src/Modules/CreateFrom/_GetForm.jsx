import React, { useEffect, useState } from "react";

const GetForm = (props) => {
  const { formFields } = props;

  const GetInputField = (type) => {
    return <input type={type} />;
  };

  const formfields = (fields) => {
    let fieldNumber;
    let fieldType;
    fields?.forEach((field) => {
      if (field.includes("field")) {
        fieldNumber = Number(field.split("field")[0]);
      }
      if (field.includes("input")) {
        fieldType = field.split("input")[0];
      }
    });

    return (
      <>
        {fieldNumber < 15 ? (
          <form>
            {Array.from(Array(fieldNumber), () => {
              return GetInputField(fieldType);
            })}
          </form>
        ) : (
          ""
        )}
      </>
    );
  };

  const ValidateFields = (text) => {
    let fields;
    if (text.includes("and")) {
      fields = text.split("and");
      return fields?.map((field) => {
        const fieldAttr = field.split("with");
        return formfields(fieldAttr);
      });
    } else {
      if (text.includes("with")) {
        fields = text.split("with");
        return formfields(fields);
      }
    }
  };

  return (
    <div>
      {(formFields && formFields.length) > 0
        ? ValidateFields(formFields.replace(/\s/g, ""))
        : ""}
    </div>
  );
};

export default GetForm;
