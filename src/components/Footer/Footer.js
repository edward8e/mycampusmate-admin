import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <div style={{ textAlign: "center" }}>
          <strong>RMate</strong> - Created by{" "}
          <a href="https://www.mycampusmate.com">MyCampusMate</a>
        </div>
        {/* <span><a href="http://www.mycampusmate.com/">MyCampusMate</a> &copy; 2018 creativeLabs.</span>
        <span className="ml-auto">Powered by <a href="http://coreui.io/pro/">CoreUI Pro</a></span> */}
      </footer>
    );
  }
}

export default Footer;
