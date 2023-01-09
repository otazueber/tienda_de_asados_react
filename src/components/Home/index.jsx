import React from 'react'
import './styles.css';

const HomeContainer = () => {
    return (
        <>
            <div className="container-fluid font bground">
                <div className="row">
                    <div className="col-12 col-lg-12 imgFondo">
                        <img src="assets/img/fondoPrincipal.jpg" alt="Fondo"/>
                    </div>
                </div>
                <div className="row  px-5">
                    <div className="col-12 col-lg-12">
                        <h1 className="py-5 slogan">Tienda gourmet de asados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 px-5">
                        <h4 className="px-5">Local comercial</h4>
                        <h6 className="p-5">Podés visitar nuestro local a la calle ubicado en Cesar Díaz 526, Belén de Escobar.
                            Nuestro horario
                            de atención es de Lunes a Sábado de 9:30 a 13:30 y de 16:30 a 20:30.</h6>
                    </div>
                    <div className="col-12 col-lg-6 px-5">
                        <h4 className="px-5">Carnes de genética</h4>
                        <h6 className="p-5">Seleccionamos las carnes para ayudarte a hacer de tus platos y asados una experiencia
                            Gourmet. La
                            carne vacuna es de novillitos de la llanura pampeana 70% pastura. Las media res nunca superan los
                            105 Kgs, garantizando la máxima terneza y un óptimo tenor graso.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 px-5">
                        <h4 className="px-5">En tu casa</h4>
                        <h6 className="p-5">Entregas sin cargo adicional en pedidos mayores a $3.000. Lo recibís en menos de 24hs
                            con nuestra
                            logística refrigerada. Barrios con cobertura: Puertos del Lago, El Cantón, San Matías y El Naudir.
                        </h6>
                    </div>
                    <div className="col-12 col-lg-6 px-5">
                        <h4 className="px-5">Atención personalizada por sus dueños</h4>
                        <h6 className="p-5">Hacenos tu pedido por web o escribinos al whatsapp. Contá con nosotros si querés que te
                            preparemos
                            algún corte en particular, o si querés alguna carne en especial.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 px-5">
                        <h4 className="px-5">Envasado al vacío</h4>
                        <h6 className="p-5">Los cortes de carne sin hueso los entregamos envasados al vacío. Al extraer el oxígeno
                            del paquete,
                            se evita la oxidación y putrefacción de la carne, prolongando su vida útil y haciendo más higiénica
                            su presentación. Además, la carne envasada al vacío puede madurar gracias a las enzimas naturales
                            que contiene, mejorando su terneza y sabor.</h6>
                    </div>
                    <div className="col-12 col-lg-6 px-5">
                        <h4 className="px-5">Pagas como te convenga</h4>
                        <h6 className="p-5">Aceptamos todos los medios de pago. Efectivo, transferencia bancaria, Mercado Pago o
                            tarjetas de débito y/o crédito.</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContainer