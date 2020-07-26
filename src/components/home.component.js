import React, { Component } from "react";
import { useHistory } from "react-router-dom";

import {
  Button,
  Link,
  Modal,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import UserService from "../services/user.service";
import OfferService from "../services/offer.service";

function MydModalWithGrid(props) {
  const history = useHistory();

  const routeChange = () => {
    history.push("/login");
  };

  const guardarOferta = () => {
    OfferService.ingresarOferta("Pedro", 2, 500, "Juan");
    console.log("Se guardo la oferta!");
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Preofertar</Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-container">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              12 Cuotas
            </Col>
            <Col xs={12} md={8}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>U$S</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Amount (to the nearest dollar)"
                  name="valorOferta"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={8}>
              Listado de preofertas
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              USD
            </Col>
            <Col xs={6} md={4}>
              Fecha / Hora
            </Col>
            <Col xs={6} md={4}>
              Estado
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={routeChange}>Ingresar / Registrarse</Button>
        <Button onClick={guardarOferta}>Guardar</Button>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ButtonPreOffer() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        type="button"
        className="btn btn-info"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        Preoferte ahora
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
              <a href="#" className="list-group-item">
                Category 1
              </a>
              <a href="#" className="list-group-item">
                Category 2
              </a>
              <a href="#" className="list-group-item">
                Category 3
              </a>
            </div>
          </div>

          <div className="col-lg-9">
            <div
              id="carouselExampleIndicators"
              className="carousel slide my-4"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://img.youtube.com/vi/0-wdIyjezIA/0.jpg"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Lote 1</a>
                    </h4>

                    <p class="card-text">
                      Alférez La Invernada Categoria: Potro Pelo: MORO
                    </p>

                    <ButtonPreOffer />
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://img.youtube.com/vi/0-wdIyjezIA/0.jpg"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Lote 2</a>
                    </h4>

                    <p class="card-text">
                      Alférez La Invernada Categoria: Potro Pelo: MORO
                    </p>

                    <button type="button" class="btn btn-info">
                      Preoferte ahora
                    </button>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://img.youtube.com/vi/0-wdIyjezIA/0.jpg"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Lote 3</a>
                    </h4>

                    <p class="card-text">
                      Alférez La Invernada Categoria: Potro Pelo: MORO
                    </p>

                    <button type="button" class="btn btn-info">
                      Preoferte ahora
                    </button>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://img.youtube.com/vi/0-wdIyjezIA/0.jpg"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Lote 4</a>
                    </h4>

                    <p class="card-text">
                      Alférez La Invernada Categoria: Potro Pelo: MORO
                    </p>

                    <button type="button" class="btn btn-info">
                      Preoferte ahora
                    </button>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://img.youtube.com/vi/0-wdIyjezIA/0.jpg"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Lote 5</a>
                    </h4>

                    <p class="card-text">
                      Alférez La Invernada Categoria: Potro Pelo: MORO
                    </p>

                    <button type="button" class="btn btn-info">
                      Preoferte ahora
                    </button>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://img.youtube.com/vi/0-wdIyjezIA/0.jpg"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Lote 6</a>
                    </h4>

                    <p class="card-text">
                      Alférez La Invernada Categoria: Potro Pelo: MORO
                    </p>

                    <button type="button" class="btn btn-info">
                      Preoferte ahora
                    </button>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">
                      &#9733; &#9733; &#9733; &#9733; &#9734;
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
