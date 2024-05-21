import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import "./formularioSolicitud.css";
import {FormGroup} from "react-bootstrap";

export const FormularioSolicitud = ({id}) => {
    const [solicitud, setSolicitud] = useState({
        idMascota:id,
        tipoHogar: '',
        alergias: '',
        familia: ''
    });

    useEffect(() => {
        if (id) {
            setSolicitud(prevSolicitud => ({
                ...prevSolicitud,
                idMascota: id
            }));
        }
    }, [id]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSolicitud(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://' + window.location.hostname + ':8081/solicitud/alta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    ...solicitud,
                })
            });
            if (response.ok) {
                alert('Solicitud enviada exitosamente');
            } else {
                alert('Error al enviar la solicitud');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="formulario-solicitud m-4">
            <h2 className="mb-4 solicitud-titulo text-center">Solicitar Adopción</h2>
            <Form.Group controlId="tipoHogar">
                <Form.Label>Tipo de Hogar:</Form.Label>
                <Form.Control
                    type="text"
                    name="tipoHogar"
                    value={solicitud.tipoHogar}
                    onChange={handleChange}
                    className="solicitud-input"
                />
            </Form.Group>
            <Form.Group controlId="alergias">
                <Form.Label>Alergias:</Form.Label>
                <Form.Control
                    type="text"
                    name="alergias"
                    value={solicitud.alergias}
                    onChange={handleChange}
                    className="solicitud-input"
                />
            </Form.Group>
            <Form.Group controlId="familia">
                <Form.Label>Familia:</Form.Label>
                <Form.Control
                    type="text"
                    name="familia"
                    value={solicitud.familia}
                    onChange={handleChange}
                    className="solicitud-input"
                />
            </Form.Group>
            <FormGroup className="text-center">
            <Button
                variant="success"
                type="submit"
                className="m-2 solicitud-boton"
            >
                Enviar Solicitud
            </Button>
            </FormGroup>
        </Form>
    );
}

export default FormularioSolicitud;