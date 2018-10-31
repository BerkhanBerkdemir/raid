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

    if (this.state.number_of_disk >= 2) {
      switch (this.state.raid_type) {
        case 0:
          result = this.state.disk_size * this.state.number_of_disk;
          break;
        case 1:
          result = this.state.disk_size;
          break;
        case 5:
          if (this.number_of_disk >= 4) {
            result = this.state.disk_size * (this.state.number_of_disk - 1);
          } else {
            result = "RAID 5 must have at least 4 disks";
          }
          break;
        case 6:
          if (this.number_of_disk >= 5) {
            result = this.state.disk_size * (this.state.number_of_disk - 2);
          } else {
            result = "RAID 6 must have at least 5 disks";
          }
          break;
        default:
          result = "Error?!";
          break;
      }
    } else {
      result = "You must have 2 disks for building an RAID array";
    }

    window.alert(`${this.state.disk_size} GB ${this.state.number_of_disk} disks on RAID ${this.state.raid_type}: ${result} GB`);
    event.preventDefault();
  }

  render() {
    return (
      <header>
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
            <option value="6">RAID 6</option>
          </select> <br /> <br />

          <input type="submit"
                 className="siimple-btn siimple-btn--primary" />
          <input type="reset"
                 className="siimple-btn" />
        </form>
      </header>
    );
  }
}

export default Calculator;
