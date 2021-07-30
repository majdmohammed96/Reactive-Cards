import React from "react";

class Icons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="cards_box-socialmedia--item">
        <a className={this.props.anchor} href={this.props.href}>
          <i className={this.props.className}></i>
        </a>
      </li>
    );
  }
}

export default Icons;
