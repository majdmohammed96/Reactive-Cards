import React from "react";

class Palette extends React.Component {
  constructor(props) {
    super(props);

    this.handleRadios = this.handleRadios.bind(this);
  }
  handleRadios(ev) {
    this.props.handleChangeInputs(ev.currentTarget.value, "palette");
  }
  render() {
    return (
      <label>
        <input
          className={this.props.className}
          id={this.props.id}
          type="radio"
          value={this.props.value}
          name="palette"
          onChange={this.handleRadios}
          checked={this.props.checked}
        />
        <img className="color-image" alt="" src={this.props.src} />
      </label>
    );
  }
}

export default Palette;
