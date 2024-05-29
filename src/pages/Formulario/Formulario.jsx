import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import { z } from "zod";
import CrearUsuarioForm from "./Forms/CrearUsuarioForm";
import { DEFAULT_VALUES_CREAR_USUARIO, FORM_SCHEMA_CREAR_USUARIO } from './Forms/constants/CrearUsuarioConstants';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "./Formulario.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ImageUser from "./components/ImageUser";
import UploadFormularios from "../../components/UploadFormularios";
import { postAxios } from "../../functions/methods";

const Formulario = () => {
  const formSchema = z.object(FORM_SCHEMA_CREAR_USUARIO);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES_CREAR_USUARIO,
  });

  const headers = {
    "Content-Type": "application/json",
  };

  const onSubmit = (values) => {
    console.log(values)
    const data = values
    postAxios("http://127.0.0.1:8000/api/usuarios/", data, headers)
  };

  return (
    <form
      className="mx-3 mt-3 bg-[#D9D9D9] overflow-auto"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="crear-usuario gap-3 h-full mx-4">
        <div className="grid justify-center items-center pt-3">
          <div className="w-[30vh] min-w-[80px]">
            <ImageUser />
            <div className="flex justify-center items-center gap-1">
              <p className="text-sm">Fotografia: </p>
              <UploadFormularios />
            </div>
          </div>
        </div>
        <div className="crear-usuario__forms gap-4">
          <CrearUsuarioForm control={form.control} />
        </div>
        <div className="flex mb-3 justify-end items-center">
          <Button htmlType="submit" className="rounded-[5px] h-10 bg-[#1EC468] text-[#D9D9D9]" icon={<FontAwesomeIcon icon={faPlus} className="text-[#D9D9D9]" />}>
            CREAR
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
