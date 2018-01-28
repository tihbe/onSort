const React = require("react");
const {Thumbnail, Button, Grid, Row, Col, Modal} = require('react-bootstrap');
var config = {
  apiKey: "AIzaSyAGwB-6_PM77vXgmlKIj1babbfVKXGw5JE",
  authDomain: "startupweekendlongueuil.firebaseapp.com",
  databaseURL: "https://startupweekendlongueuil.firebaseio.com",
  storageBucket: "startupweekendlongueuil.appspot.com",
};
firebase.initializeApp(config);
var ref = firebase.database().ref("/");

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

const ChoseEventModal = React.createClass({
    getInitialState: function() {
        return {obj: {Nom: '', Address: ''}, eventOne: "", obj2: {}};
    },

    componentDidMount: function() {
    },

    componentWillUnmount: function() {},

    componentWillReceiveProps: function(newProps) {
      var {eventOne, eventTwo, random} = newProps;
      if (eventOne) {
        ref.child("restos").once("value", function(val) {
          var restos = val.val();
          var resto = restos[pickRandomProperty(restos)];
          this.setState({eventOne: eventOne, obj: resto});
        }.bind(this))
      }
      if (eventTwo) {
        ref.child("cines/Films/12-06-2016").once("value", function(val) {
          var films = val.val();
          var film = films[pickRandomProperty(films)];
          this.setState({eventTwo: eventTwo, obj2: film});
        }.bind(this))
      }
    },

    render: function() {
      return  <Modal
                {...this.props}
                show={this.props.show}
                onHide={this.props.onHide}
                dialogClassName="custom-modal">
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-lg">Sélection d'évènement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {this.state.obj && ("Pourquoi ne pas essayer " + this.state.obj.Nom + " situé au " + this.state.obj.Address)}<br />
                  {this.state.obj2 && ("et regarder le film " + this.state.obj2.Name + " au Cinéma Cineplex Odeon Quartier Latin")}

                </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>;
    }
});

module.exports = ChoseEventModal;
