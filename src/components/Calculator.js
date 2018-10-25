import React, { Component } from "react";
import "../scss/Calculator.scss"

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      number_of_disk: "",
      disk_size: "",
      raid_type: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var new_state = {};

    new_state[event.target.id] = parseFloat(event.target.value);
    this.setState(new_state);
  }

  handleSubmit(event) {
    var result = 0;

    if (this.state.number_of_disk > 1) {
      switch (this.state.raid_type) {
        case 0:
          result = this.state.disk_size * this.state.number_of_disk;
          break;
        case 1:
          result = this.state.disk_size;
          break;
        case 5:
          result = this.state.disk_size * (this.state.number_of_disk - 1);
          break;
        default:
          result = "Error?!";
          break;
      }
    } else {
      result = "You must have 2 disks";
    }

    window.alert(`${this.state.disk_size} GB ${this.state.number_of_disk} disks on RAID ${this.state.raid_type}: ${result}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="">
        <header className="">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="number_of_disk"
                   className="siimple-label">Number of disk</label> <br />
            <input type="number"
                   id="number_of_disk"
                   className="siimple-input siimple-input--fluid"
                   min="2"
                   value={this.state.number_of_disk}
                   onChange={this.handleChange} />
            <br />

            <label htmlFor="disk_size"
                   className="siimple-label">Disk size</label> <br />
            <input type="number"
                   id="disk_size"
                   className="siimple-input siimple-input--fluid"
                   min="1"
                   value={this.state.disk_size}
                   onChange={this.handleChange} />
            <br />

            <label htmlFor="number_of_disk"
                   className="siimple-label">Number of disk</label> <br />
            <select id="raid_type"
                    className="siimple-select siimple-select--fluid"
                    value={this.state.raid_type}
                    onChange={this.handleChange}>
              <option value="0"
                      selected>RAID 0</option>
              <option value="1">RAID 1</option>
              <option value="5">RAID 5</option>
            </select> <br /> <br />

            <input type="submit"
                   className="siimple-btn siimple-btn--primary" />
            <input type="reset"
                   className="siimple-btn" />
          </form>
        </header>
      </div>
    );
  }
}

export default Calculator;
