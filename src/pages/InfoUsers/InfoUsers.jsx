import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAxios, putAxios } from '../../functions/methods';
import { z } from 'zod';
import { DEFAULT_VALUES_CREAR_USUARIO, FORM_SCHEMA_CREAR_USUARIO } from '../Formulario/Forms/constants/CrearUsuarioConstants';
import { useForm } from 'react-hook-form';
import ImageUser from '../Formulario/components/ImageUser';
import UploadFormularios from '../../components/UploadFormularios';
import CrearUsuarioForm from '../Formulario/Forms/CrearUsuarioForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from "dayjs";

const InfoUsers = () => {
    const params = useParams();
    const idUser = params.id

    const [usuarios, setUsuarios] = useState({})
    const [defaultDate, setDefaultDate] = useState("")

    const headers = {
        "Content-Type": "application/json",
    };

    useEffect(() => {
        getAxios(`http://127.0.0.1:8000/api/usuarios/${idUser}/`, setUsuarios, headers)
    }, [])


    console.log("usuarios: ", usuarios)
    const formSchema = z.object(FORM_SCHEMA_CREAR_USUARIO);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: DEFAULT_VALUES_CREAR_USUARIO,
    });

    useEffect(() => {
        if (Object.keys(usuarios).length !== 0) {
            // const fecha_nacimiento_object = dayjs(usuarios.fecha_nacimiento)
            setDefaultDate(usuarios.fecha_nacimiento)
            form.setValue('nombre', usuarios.nombre || '');
            form.setValue('apellido_paterno', usuarios.apellido_paterno || '');
            form.setValue('apellido_materno', usuarios.apellido_materno || '');
            form.setValue('sexo', usuarios.sexo || '');
            form.setValue('fecha_nacimiento', usuarios.fecha_nacimiento || '');
            form.setValue('celular', usuarios.celular || '');
            form.setValue('correo', usuarios.correo || '');
            form.setValue('username', usuarios.username || '');
            form.setValue('password', usuarios.password || '');
            form.setValue('id_tipo_usuario', usuarios.id_tipo_usuario || '')
            form.setValue('departamento', usuarios.departamento || '');
            console.log("departamento: ", usuarios.departamento)
            form.setValue('provincia', usuarios.provincia || '');
            form.setValue('distrito', usuarios.distrito || '')
        }
    }, [usuarios, form]);

    const onSubmit = (values) => {
        console.log(values)
        const data = values
        putAxios(`http://127.0.0.1:8000/api/usuarios/${idUser}/`, data, headers)
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
                    <CrearUsuarioForm control={form.control} defaultDate={defaultDate} />
                </div>
                <div className="flex mb-3 justify-end items-center">
                    <Button htmlType="submit" className="rounded-[5px] h-10 bg-[#1EC468] text-[#D9D9D9]" icon={<FontAwesomeIcon icon={faPlus} className="text-[#D9D9D9]" />}>
                        Actualizar
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default InfoUsers