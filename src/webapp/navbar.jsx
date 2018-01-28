const React = require("react");
const {Navbar, Nav, NavItem} = require('react-bootstrap');
const debounce = require('lodash.debounce');

const HeaderBar = React.createClass({

  getInitialState: function(){
    return {iconStyle: {width: "350px", height:"350px", left: "0px", marginLeft: "50%", marginTop: "9%", transform: "translateX(-50%)"}};
  },

  componentDidMount: function componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function componentWillUnmount() {
   document.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: debounce(function handleScroll() {
    var scrollTop = document.body.scrollTop;
    if (scrollTop <= 490) {
      var ratio = scrollTop / 490;
      var size = (100-350) * ratio + 350;
      var marginLeft = -50 * ratio + 50;
      var marginTop = -9 * ratio + 9;
      var translateX = 50 * ratio - 50;
      var left = 40 * ratio;
      this.setState({iconStyle:{ width: size + "px", height: size + "px", left: left + "px", marginLeft: marginLeft + "%", marginTop: marginTop + "%", transform: "translateX("+translateX+"%)" }});
    } else {
      this.setState({iconStyle:{ left: "40px", width: "100px", height: "100px", marginLeft: "0px", marginTop: "0px", transform: "translateX(0%)" }});
    }
  }, 10),
    render: function() {
        return <Navbar fixedTop={true} inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <img className="logo" src="img/full-size-logo.png" href="#" style={this.state.iconStyle}></img>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem href="http://www.facebook.com/share.php?u=onsort.co&title=OnSort!" target="_BLANK" className="pullRight">
                        <img width="20" height="20" src="https://www.facebookbrand.com/img/assets/asset.f.logo.lg.png"></img>
                    </NavItem>
                    <NavItem href="https://twitter.com/intent/tweet?status=On%20Sort!%0Ahttp%3A%2F%2Fonsort.co%2F" target="_BLANK" className="pullRight">
                        <img width="20" height="20" src="https://g.twimg.com/dev/documentation/image/Twitter_logo_blue_32.png"></img>
                    </NavItem>
                    <NavItem href="http://pinterest.com/pin/create/bookmarklet/?media=onsort.com&url=onsort.co&is_video=false&description=On%20Sort!" target="_BLANK" className="pullRight">
                        <img width="20" height="20" src="https://help.pinterest.com/sites/help/themes/custom/pinterest_help/logo.png"></img>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>;
    }
});

module.exports = HeaderBar;
