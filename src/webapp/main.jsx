const React = require("react");
const ReactDOM = require("react-dom");
const NavBar = require("./navbar.jsx");
const {Thumbnail, Button, Grid, Row, Col, Modal} = require('react-bootstrap');
const EventsCategory = require('./eventsCategory.jsx');
const ChoseEventModal = require('./choseEventModal.jsx');

const MainView = React.createClass({

  getInitialState: function(){
    return {showResults: false, isEventRandom: 0, eventOne: "", eventTwo: ""};
  },

  showModal(random, eventOne, eventTwo) {
    this.setState({showResults: true, isEventRandom: random==1, eventOne: eventOne, eventTwo: eventTwo});
  },

  hideModal() {
    this.setState({showResults: false});
  },

  render: function() {
      return <div className="mainContainer">
        <NavBar />
        <main>
          <EventsCategory imageURL="img/t1.jpg" imageTitle="Ta soirée planifiée de A à Z" title="Le classique">
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <Thumbnail src="img/t1_1.jpg" alt="242x200" >
                    <h3>Cinéma et Restaurant</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "resto", "cine")}>Choisir</Button>&nbsp;
                      <Button bsStyle="default" onClick={() => this.showModal(1, "resto", "cine")}>Alléatoire</Button>
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src="img/t1_2.jpg" alt="242x200" >
                    <h3>Bar et Restaurant</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "resto", "bar")}>Choisir</Button>&nbsp;
                      <Button bsStyle="default" onClick={() => this.showModal(1, "resto", "bar")}>Alléatoire</Button>
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src="img/t1_3.jpg" alt="242x200" >
                    <h3>Concert et Restaurant</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "resto", "concert")}>Choisir</Button>&nbsp;
                      <Button bsStyle="default" onClick={() => this.showModal(1, "resto", "concert")}>Alléatoire</Button>
                    </p>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
          </EventsCategory>
          <EventsCategory imageURL="img/t2.jpg" imageTitle=" " title="Le saisonnier">
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <Thumbnail src="img/t2_1.jpg" alt="242x200" >
                    <h3>Parcs d’attractions</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "6flag")}>Choisir</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src="img/t2_2.jpg" alt="242x200" >
                    <h3>Festival</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "festival")}>Choisir</Button>
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src="img/t2_3.jpg" alt="242x200" >
                    <h3>Baignade</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "plage")}>Choisir</Button>
                    </p>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
          </EventsCategory>
          <EventsCategory imageURL="img/t3.jpg" imageTitle="" title="Le cultivé">
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <Thumbnail src="img/t3_1.jpg" alt="242x200" >
                    <h3>Théâtre</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "theatre")}>Choisir</Button>
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src="img/t3_2.jpg" alt="242x200" >
                    <h3>Ballet et Opéra</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "ballet")}>Choisir</Button>
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src="img/t3_3.jpg" alt="242x200" >
                    <h3>Galerie d’art et Musée</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "musee")}>Choisir</Button>
                    </p>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
          </EventsCategory>
          <EventsCategory imageURL="img/t4.jpg" imageTitle="" title="Le sportif">
            <Grid>
              <Row>
                <Col xs={12} md={12}>
                  <Thumbnail src="img/t4_1.jpg" alt="242x200" >
                    <h3>Évènements sportifs</h3>
                    <p>
                      <Button bsStyle="primary" onClick={() => this.showModal(0, "sport")}>Choisir</Button>
                    </p>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
          </EventsCategory>
        </main>
        <ChoseEventModal show={this.state.showResults} onHide={this.hideModal} random={this.state.isEventRandom} eventOne={this.state.eventOne} eventTwo={this.state.eventTwo} />
      </div>;
    }
});

ReactDOM.render(
    <MainView/>,
    document.getElementById('mainView')
);
