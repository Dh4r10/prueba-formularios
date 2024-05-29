import { z } from "zod";

export const FORM_SCHEMA_CREAR_USUARIO = {
  nombre: z
    .string()
    .min(1, {
      message: "Este campo es requerido",
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El nombre solo puede contener letras",
    }),
  apellido_paterno: z
    .string()
    .min(1, {
      message: "Este campo es requerido",
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El apellido paterno solo puede contener letras",
    }),
  apellido_materno: z
    .string()
    .min(1, {
      message: "Este campo es requerido",
    })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El apellido materno solo puede contener letras",
    }),
  sexo: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  fecha_nacimiento: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  celular: z
    .string()
    .regex(/^\d+$/, {
      message: "Solo se permiten datos numéricos",
    })
    .min(1, {
      message: "Este campo es requerido",
    }),
  correo: z
    .string()
    .min(1, {
      message: "Este campo es requerido",
    })
    .email({
      message: "Correo electrónico invalido.",
    }),
  username: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  password: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  id_tipo_usuario: z.number().min(1, {
    message: "Este campo es requerido",
  }),
  departamento: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  provincia: z.string().min(1, {
    message: "Este campo es requerido",
  }),
  distrito: z.string().min(1, {
    message: "Este campo es requerido",
  }),
};

export const DEFAULT_VALUES_CREAR_USUARIO = {
  nombre: "",
  apellido_paterno: "",
  apellido_materno: "",
  sexo: "",
  fecha_nacimiento: "",
  celular: "",
  correo: "",
  username: "",
  password: "",
  id_tipo_usuario: "",
  departamento: "",
  provincia: "",
  distrito: "",
};
