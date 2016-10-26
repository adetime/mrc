import React, { Component } from 'react';



class LinkCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };

  }

  handleSubmit(event) {
    // evita que o o formulario faça um http-request e recarregue a página
    // antes de validar a entrada
    event.preventDefault();

    Meteor.call('links.insert', this.refs.link.value, (error) => {
      if (error) {
        this.setState({ error: 'Enter a valid URL' });
      } else {
        this.setState({ error: '' });
        this.refs.link.value = '';
      }
    });

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to Shorten</label>
          <input ref="link" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
