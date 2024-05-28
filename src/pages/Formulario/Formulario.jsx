import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";

// import DatosPersonales from './Forms/DatosPersonales';
import { z } from "zod";
// import { DEFAULT_VALUES_DATOS_PERSONALES, FORM_SCHEMA_DATOS_PERSONALES } from './Forms/constants/DatosPersonalesConstants';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { DEFAULT_VALUES_USER_DATA, FORM_SCHEMA_USER_DATA } from './Forms/constants/UserDataConstants';
// import UserData from './Forms/UserData';

import "./Formulario.scss";
import CrearUsuarioForm from "./Forms/CrearUsuarioForm";

const Formulario = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [personalData, setPersonalData] = useState(null);
  const [userData, setUserData] = useState(null);

  // const formSchema = z.object(current === 0 ? FORM_SCHEMA_DATOS_PERSONALES : FORM_SCHEMA_USER_DATA);

  const form = useForm({
    // resolver: zodResolver(formSchema),
    // defaultValues: current === 0 ? DEFAULT_VALUES_DATOS_PERSONALES : DEFAULT_VALUES_USER_DATA,
  });

  const onSubmit = (values) => {};

  return (
    <form
      className="crear-usuario h-full gap-2 min-w-[0px]"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <CrearUsuarioForm />
    </form>
  );
};

export default Formulario;
