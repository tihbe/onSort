const React = require("react");
const {Thumbnail, Button, Grid, Row, Col, Modal} = require('react-bootstrap');

const EventsCategory = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {},

    componentWillUnmount: function() {},
    
    render: function() {
      var css = {
        backgroundImage: "url('"+this.props.imageURL+"')"
      }
      return <main>
                <div className="cd-fixed-bg" style={css}>
                  <h1>{this.props.imageTitle}</h1>
                </div>
                <div className="cd-scrolling-bg cd-color-3">
                  <div className="cd-container">
                    <h2 className="cd-container-title">{this.props.title}</h2>
                    {this.props.children}
                  </div>
                </div>
              </main>;
    }
});

module.exports = EventsCategory;
