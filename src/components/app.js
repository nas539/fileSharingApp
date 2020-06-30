import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      file: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
  }

  handleDownload() {
    const url = window.URL.createObjectURL(this.state.file);
    const link = document.createElement("a");
    link.download = this.state.file.name;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  }

  handleChange(event) {
    this.setState({
      file: event.taget.files[0]
    });
  }

  render() {
    return (
      <div className='app'>
        <input onChange={this.handleChange} type="file"/>
        <button onClick={this.handleDownload}>Download</button>
      </div>
    );
  }
}
