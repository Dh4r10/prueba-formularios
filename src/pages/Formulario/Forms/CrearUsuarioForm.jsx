import FormController from "../../../components/FormController";
import React from "react";
import { data } from "./data/CrearUsuarioData";
import "./Forms.scss";
import DepartamentosSelect from "../../../components/DepartamentosSelect";

const CrearUsuarioForm = (props) => {
  const { control, defaultDate } = props;

  const datosPersonalesElements = data.slice(0, 7)
  const datosPerfilElements = data.slice(7, 11)

  return (
    <>
      <div className="bg-[#001F36] p-4">
        <p className="text-white font-medium ease-linear underline mb-2">DATOS PERSONALES:</p>
        <div className="crear-usuario__forms-datos-personales gap-5">
          {datosPersonalesElements.map((data) => (
            <div key={data.name} className="grid items-center">
              <FormController
                control={control}
                type={data.type}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
                disabled={data.disabled}
                options={data?.options}
                defaultDate={defaultDate}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#001F36] p-4">
        <p className="text-white font-medium ease-linear underline mb-2">DATOS DEL PERFIL:</p>
        <div className="crear-usuario__forms-datos-perfil gap-5">
          {datosPerfilElements.map((data) => (
            <div key={data.name} className="grid items-center">
              <FormController
                control={control}
                type={data.type}
                name={data.name}
                label={data.label}
                placeholder={data.placeholder}
                disabled={data.disabled}
                options={data?.options}
              />
            </div>
          ))}
          <DepartamentosSelect control={control} />
        </div>
      </div>
    </>
  );
};

export default CrearUsuarioForm;
