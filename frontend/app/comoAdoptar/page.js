"use client";
import React from "react";
import "./comoAdoptar.css";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";

export default function comoAdoptar() {
  return (
    <main>
      <section className="seccion5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="centered-text">Antes de Adoptar</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <div className="barra"></div>
            </div>
            <div className="col-md-10">
              <p className="texto text-justify" style={{ lineHeight: "1.6" }}>
                Si estás considerando adoptar un animal, es importante
                reflexionar sobre el compromiso que asumirás. Debes evaluar si
                tu entorno familiar es adecuado, si dispones del tiempo
                necesario, cómo gestionarás el cuidado del animal durante las
                vacaciones y si puedes dedicar el presupuesto necesario para
                cubrir sus necesidades y posibles imprevistos.
              </p>
              <p className="texto text-justify" style={{ lineHeight: "1.6" }}>
                Te invitamos a reflexionar sobre los puntos siguientes, antes de
                que tomes la decisión de adoptar un animal:
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6 mt-2 mb-4">
              <Image
                src="/animalesAdoptar.jpg"
                alt="Vida"
                className="img-fluid img-circular"
                width={600}
                height={400}
              />
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Piensa en que un perro puede vivir entre 12 y 17 años
                aproximadamente.
              </p>
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Piensa en que un pájaro puede vivir entre 6 y 8 años
                aproximadamente.
              </p>
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Piensa en que un perro puede vivir entre 12 y 18 años
                aproximadamente.
              </p>
            </div>
            <div className="col-md-6  mb-4">
              <Image
                src="/animalesAdoptarSalud.jpg"
                alt="Animales"
                className="img-fluid img-circular"
                width={600}
                height={400}
              />
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Los animales tienen necesidades fisiológicas y emocionales, no
                deben ser vistos como simples juguetes para niños. Los niños,
                por su naturaleza, no tienen la madurez ni la responsabilidad
                para cuidar adecuadamente a una mascota. Regalar un animal a un
                niño puede ser una carga para ambos. El cuidado de un animal va
                más allá de proporcionar alimento y agua; requiere atención
                constante, ejercicio, visitas veterinarias y comprensión de sus
                necesidades. Adoptar un animal para regalárselo a un niño puede
                resultar en fracasos tanto en el cuidado del animal como en la
                educación del niño. Esto puede llevar a situaciones donde el
                animal no reciba el cuidado necesario o el niño no desarrolle un
                respeto adecuado hacia los seres vivos.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6  mt-2 mb-4">
              <Image
                src="/animalesAdoptarCachorro.png"
                alt="Vida"
                className="img-fluid img-circular"
                width={600}
                height={400}
              />
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                Si estás considerando adoptar un cachorro o un animal joven, ten
                en cuenta que durante su crecimiento es probable que enfrentes
                desafíos como romper objetos, ensuciar el espacio, llorar cuando
                está solo o por las noches, entre otros comportamientos típicos.
                Estos son procesos naturales que disminuirán con el tiempo y la
                educación que le brindes. En algunas ocasiones, puede ser
                necesario buscar la ayuda y consejo de profesionales
                cualificados para resolver ciertas situaciones.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <Image
                src="/animalesAdoptarCasa.jpg"
                alt="Vivienda"
                className="img-fluid img-circular"
                width={600}
                height={400}
              />
              <p
                className="texto text-justify mb-0"
                style={{ lineHeight: "1.6" }}
              >
                ¿Has verificado si tu residencia es adecuada para albergar
                perros, gatos o aves? Si estás alquilando, es importante
                consultar con el propietario y obtener una autorización por
                escrito si es necesario. Si vives en tu propia propiedad, ten en
                cuenta que cualquier mascota, en algunos casos, puede causar
                incomodidades a los vecinos. Además, recuerda que el
                mantenimiento de una mascota conlleva gastos que pueden variar
                significativamente según la especie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion5 mb-2">
        <div className="svgArriba">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(88,213,92)", stopOpacity: 0 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(88,213,92)", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(255,255,255)", stopOpacity: 0 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(177,215,182)", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              className="elementor-shape-fill"
              opacity="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
              fill="url(#grad1)"
            ></path>
            <path
              className="elementor-shape-fill"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
              fill="url(#grad2)"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center">Preguntas Frecuentes</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Registro en la web</Accordion.Header>
                  <Accordion.Body>
                    ¡Eh, antes de continuar, asegúrate de elegir con
                    responsabilidad y tener presente lo que implica traer a casa
                    un nuevo amiguito peludo, emplumado o de cualquier otro
                    tipo! Aquí en nuestra comunidad, queremos asegurarnos de que
                    estés listo para recibir a tu compañero leal para toda la
                    vida. Ya sea que estés pensando en adoptar un perro, un gato
                    o incluso un pájaro, desde su perfil podrás completar
                    nuestro cuestionario o simplemente acceder directamente a
                    través del <a href="/contacto">aquí</a>. Ahí tendrás la oportunidad de proporcionar
                    varias opciones y detalles sobre lo que estás buscando. <br></br>¡Ah,
                    y no te preocupes por tus datos! Nos tomamos muy en serio tu
                    privacidad y protegemos tus datos con mucho cuidado. Puedes
                    consultar nuestra <a href="/politica">política de privacidad</a> para obtener
                    más detalles sobre cómo manejamos la información. Además, si
                    te interesa conocer más sobre cómo utilizamos las cookies,
                    puedes echarle un vistazo a nuestra <a href="/cookies">cookies</a>. Y, por supuesto, también puedes consultar
                    nuestro <a href="/avisoLegal">aviso legal</a> para obtener más información sobre
                    tus derechos y responsabilidades.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Rellenar formulario de solicitud
                  </Accordion.Header>
                  <Accordion.Body>
                    Para solicitar una mascota deberán registrarse en nuestra
                    página web, para ello deberán poner los datos necesarios.
                    Una vez se han registrado pueden solicitar la mascota que
                    deseen. Una vez rellenado el formualrio nos encargaremos de
                    ponernos en contacto con usted para resolverle las dudas que
                    pueda tener y facilitarle todo lo antes posible, también
                    estamos abiertos a sugerencias a través del mismo
                    formulario. Puedes rellenar el formulario{" "}
                    <a href="/contacto">aquí</a>.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>En adopción</Accordion.Header>
                  <Accordion.Body>
                    Los animales que se muestran en nuestro sitio web como
                    disponibles para adopción se encuentran en esa condición al
                    momento de la visualización. Sin embargo, es posible que
                    algunos de ellos sean adoptados mientras se completa el
                    proceso de solicitud, recepción y gestión. una vez se haya
                    solicitado al aniaml, este pasará a estar &quot;adoptado&quot; que
                    sería igual a no disponible, si se cancela volverá al estado
                    de en adopción y podrá adquirirlo un nuevo adoptante.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Visitar</Accordion.Header>
                  <Accordion.Body>
                    Algunas de las protectoras o refugios de nuestra web ofrecen
                    visitas, puedes contactar con ellos en cualquier momento
                    para facilitaros una visita al centro.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>La solicitud</Accordion.Header>
                  <Accordion.Body>
                    La solicitud puede verse cancelada por parte de la
                    protectora o refugio si considera que las condiciones del
                    animal no serán óptimas y adecuadas en su nuevo hogar. Así
                    como que el usuario también puede cancelarlo con 15 días de
                    antelación antes de realizar la entrega o recogida del
                    animal a través de la web en el apartado de solicitud Mis
                    solicitudes - Cancelar.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >

        <path
          className="elementor-shape-fill"
          opacity="0.66"
          d="M266,67.3c45.5,0,77.2-23.2,129.1-39.1c28.6-8.7,150.3-10.1,254,39.1 s91.7-34.4,149.2,0C884.3,118.3,1000,39.8,1000,39.8V1000H0V963.5c0,0,28.2-18.5,92.1-18.5C189.8,945.9,224.3,67.3,266,67.3z"
          fill="url(#grad2)"
        ></path>
      </svg>
    </main>
  );
}
