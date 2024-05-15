'use client'
import React, {useState} from 'react';
import {Form, Button, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import RazaSelect from "@/components/form/razaSelect";


const AltaMascota = () => {

    const [nombre, setNombre] = useState('');
    const [cumpleanio, setCumpleanio] = useState(new Date());
    const [peso, setPeso] = useState('');
    const [provincia, setProvincia] = useState('');
    const [description, setDescription] = useState('');
    const [especie, setEspecie] = useState('PERRO');
    const [idRaza, setIdRaza] = useState('');
    const [foto, setFoto] = useState(null);


    const creandoMascota = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario
        console.log({nombre, cumpleanio, peso, provincia, description, especie, idRaza, foto});
    };

    const handleFotoChange = (event) => {
        setFoto(event.target.files[0]);
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <div className="p-4 mb-4 mt-4 rounded shadow-sm"
                         style={{background: 'linear-gradient(to bottom, transparent, #58d55cd5)'}}>
                        <h1 className="text-center my-4">¡Registra a tu Nueva Mascota!</h1>
                        <Form onSubmit={creandoMascota}>
                            <Form.Group controlId="formNombre" className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Introduce el nombre de la mascota"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formCumpleanio" className="mb-3">
                                <Form.Label>Fecha de Cumpleaños</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={cumpleanio}
                                    onChange={(e) => setCumpleanio(e.target.value)}
                                    className="form-control"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPeso" className="mb-3">
                                <Form.Label>Peso (kg)</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Introduce el peso de la mascota"
                                    value={peso}
                                    onChange={(e) => setPeso(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formProvincia" className="mb-3">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Introduce la provincia"
                                    value={provincia}
                                    onChange={(e) => setProvincia(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formDescription" className="mb-3">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Introduce una descripción de la mascota"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Elige la especie de la mascota</Form.Label>
                                <Form.Check
                                    label="Perro"
                                    name="especie"
                                    type="radio"
                                    id="1"
                                    value={'PERRO'}
                                    onChange={(e) => setEspecie(e.target.value)} required
                                />
                                <Form.Check
                                    name="especie"
                                    label="Gato"
                                    type="radio"
                                    id="2"
                                    value={'GATO'}
                                    onChange={(e) => setEspecie(e.target.value)} required
                                />
                                <Form.Check
                                    label="Pajaro"
                                    name="especie"
                                    type="radio"
                                    id="3"
                                    value={'PAJARO'}
                                    onChange={(e) => setEspecie(e.target.value)} required
                                />
                            </Form.Group>
                            <Form.Group controlId="formIdRaza" className="mb-3">
                                <Form.Label>Raza</Form.Label>
                                <RazaSelect especie={especie} onChange={(e) => setIdRaza(e.target.value)} />
                            </Form.Group>


                            <Form.Group controlId="formFoto" className="mb-3">
                                <Form.Label>Foto</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={handleFotoChange}
                                    required
                                />
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="primary" type="submit">
                                    Registrar Mascota
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AltaMascota;