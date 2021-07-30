import React from "react";
import "../stylesheets/App.scss";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }
  handleHeaderClick() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  render() {
    const openClassName = this.state.isHidden ? "js-hidden" : "";
    const openClassNameToggle = this.state.isHidden ? "" : "js-hidden";
    return (
      <div>
        <div className="icon2 js-design-title" onClick={this.handleHeaderClick}>
          <i className={this.props.classIcon}></i>
          <h2 className="legend-fill">{this.props.className}</h2>

          <div
            className={`ico-scroll ${this.props.classButtonUp} ${openClassName}`}
          >
            <i className="fas fa-angle-up"></i>
          </div>

          <div
            className={`ico-scroll ${this.props.classButtonDown} ${openClassNameToggle}`}
          >
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
        <div className={`collapsible-container ${openClassName}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Collapsible;
