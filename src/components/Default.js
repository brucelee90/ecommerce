import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center pt-5">
            <h1 className="display-3">404</h1>
            <h1>Fehler</h1>
            <h1>Diese Seite wurde leider nicht gefunden!</h1>
            <p className="mt-5">
              Die Seite: <span className="red-text">{this.props.location.pathname}</span> existiert nicht
            </p>
          </div>
        </div>
      </div>
    );
  }
}
