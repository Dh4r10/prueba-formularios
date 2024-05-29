import { departamentos } from "../../../../data/Departamentos";
import { sexoOp, tipoUsuarioOp } from "../../../../data/options";

export const data = [
  {
    label: "Nombre:",
    name: "nombre",
    type: "text",
    placeholder: "Ingrese el nombre",
    disabled: false,
  },
  {
    label: "Ap. Paterno:",
    name: "apellido_paterno",
    type: "text",
    placeholder: "Ingrese el apellido paterno",
    disabled: false,
  },
  {
    label: "Ap. Materno:",
    name: "apellido_materno",
    type: "text",
    placeholder: "Ingrese el apellido materno",
    disabled: false,
  },
  {
    label: "Sexo:",
    name: "sexo",
    type: "select",
    placeholder: "Seleccione un sexo",
    disabled: false,
    options: sexoOp,
  },
  {
    label: "F. Nacimiento:",
    name: "fecha_nacimiento",
    type: "dateWithYears",
    placeholder: "Seleccione una fecha",
    disabled: false,
  },
  {
    label: "Celular:",
    name: "celular",
    type: "text",
    placeholder: "Ingrese su celular",
    disabled: false,
  },
  {
    label: "Correo:",
    name: "correo",
    type: "email",
    placeholder: "Ingrese el correo",
    disabled: false,
  },
  {
    label: "Usuario:",
    name: "username",
    type: "text",
    placeholder: "Ingrese el usuario",
    disabled: false,
  },
  {
    label: "Contraseña:",
    name: "password",
    type: "password",
    placeholder: "Ingrese la contraseña",
    disabled: false,
  },
  {
    label: "Tipo usuario:",
    name: "id_tipo_usuario",
    type: "select",
    placeholder: "Ingrese el tipo de usuario",
    disabled: false,
    options: tipoUsuarioOp,
  },
];
