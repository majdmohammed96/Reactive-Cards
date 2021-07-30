import React, { useState, useEffect } from "react";
import CardPreview from "./CardPreview";
import Form from "./Form";
import ls from "../services/localStorage";

function Main() {
  const [data, setData] = useState({
    name: "",
    job: "",
    email: "",
    photo: "",
    github: "",
    linkedin: "",
    phone: "",
    palette: "1",
  });

  //tomar el valor
  useEffect(() => {
    const dataInput = ls.get("dataInput");
    if (dataInput) {
      setData(dataInput);
    }
  }, []);

  //guardar el valor
  useEffect(() => {
    ls.set("dataInput", data);
  }, [data]);

  const handleResetButton = () => {
    setData({
      name: "",
      job: "",
      email: "",
      photo: "",
      github: "",
      linkedin: "",
      phone: "",
      palette: "1",
    });
  };

  // funcion lifting/props donde vienen todos los valores de los inputs para que se guarden y actualicen en nustro data

  const handleChangeInputs = (inputValue, inputData) => {
    console.log("Change!", inputValue, inputData);
    setData({
      ...data,
      [inputData]: inputValue,
    });
  };

  return (
    <section className="main_container">
      {/* esto se hace para exportar a las hijas todo el objeto data */}
      <CardPreview
        data={data}
        handleChangeInputs={handleChangeInputs}
        handleResetButton={handleResetButton}
      />
      <Form
        data={data}
        handleChangeInputs={handleChangeInputs}
        handleResetButton={handleResetButton}
      />
    </section>
  );
}
export default Main;
