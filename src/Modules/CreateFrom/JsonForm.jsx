import React, { useState } from "react";
import { FormSelect } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ModalPopUp from "../ModalPopUp/ModalPopUp";
import FormCheckbox from "./FormControls/FormCheckbox";
import FormInput from "./FormControls/FormInput";
import GetForm from "./GetForm";
const JsonForm = (props) => {
  const { formHeader } = props;
  const [selected, setSelected] = useState({ type: "", option: [] });

  const { register, handleSubmit } = useForm();

  const handleSelect = (e) => {
    setSelected({
      ...selected,
      ...e,
    });
  };

  console.log("selected", selected);

  const showAfterSelect = () => {
    switch (selected.type) {
      case "1":
        return (
          <div className="d-flex gap-1 justify-content-around ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="formControlInput1"
                id="flexRadioDefault1"
                value={"number"}
                checked={selected.selectedOption === "number"}
                onChange={() =>
                  setSelected({
                    ...selected,
                    selectedOption: "number",
                  })
                }
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Number
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="formControlInput3"
                id="flexRadioDefault3"
                value={"date"}
                checked={selected.selectedOption === "date"}
                onChange={() =>
                  setSelected({
                    ...selected,
                    selectedOption: "date",
                  })
                }
              />
              <label className="form-check-label" for="flexRadioDefault3">
                DateTime
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="formControlInput4"
                id="flexRadioDefault4"
                value={"text"}
                checked={selected.selectedOption === "text"}
                onChange={() =>
                  setSelected({
                    ...selected,
                    selectedOption: "text",
                  })
                }
              />
              <label className="form-check-label" for="flexRadioDefault4">
                Text
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="formControlInput5"
                id="flexRadioDefault5"
                value={"text"}
                checked={selected.selectedOption === "Checkbox"}
                onChange={() =>
                  setSelected({
                    ...selected,
                    selectedOption: "Checkbox",
                  })
                }
              />
              <label className="form-check-label" for="flexRadioDefault5">
                Checkbox
              </label>
            </div>
            <div>
              <input
                type={selected.selectedOption}
                placeholder="default value"
              />
              {(selected.selectedOption == "number" ||
                selected.selectedOption == "text") && (
                <input placeholder="placeholder" />
              )}
            </div>
          </div>
        );
      case "2":
        return (
          <div>
            <h6>Add Option for Dropdown</h6>
            <form
              onSubmit={handleSubmit((d) =>
                setSelected({
                  ...selected,
                  option: [...selected.option, { ...d, isDefault: false }],
                })
              )}
            >
              <div className="input-group">
                <input
                  {...register("key")}
                  type="text"
                  placeholder="key"
                  className="form-control"
                />
                <input
                  {...register("value")}
                  type="text"
                  placeholder="value"
                  className="form-control"
                />
                <button type="submit" className="input-group-text">
                  Add
                </button>
              </div>
            </form>
            {selected.option && selected.option.length > 0 && (
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Default Value</th>
                    <th scope="col">key</th>
                    <th scope="col">value</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.option.map((op) => {
                    console.log("op", op);

                    return (
                      <tr>
                        <th scope="row">
                          <input
                            checked={op.isDefault}
                            type="checkbox"
                            onChange={(e) => {
                              setSelected({
                                ...selected,
                                option: selected.option.map((attr) => {
                                  if (attr.key === op.key) {
                                    attr.isDefault =
                                      e.target.value == "on" ? true : false;
                                  } else {
                                    attr.isDefault = false;
                                  }

                                  return attr;
                                }),
                              });
                            }}
                          />
                        </th>
                        <td>{op.key}</td>
                        <td>{op.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-4 form-add-toolbar">
          <div className="">
            <div className="mb-3">
              <select
                onChange={(e) => handleSelect({ type: e.target.value })}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Field Type</option>
                <option value="1">Input</option>
                <option value="2">Dropdown</option>
              </select>
            </div>
            {showAfterSelect()}

            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        <div className="col-8 form-container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{formHeader}</h5>
              <form>
                <GetForm />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonForm;
