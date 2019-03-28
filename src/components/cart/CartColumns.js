import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
            <p className="text-capitalize">
                Artikel
            </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <p className="text-capitalize">
                Name
            </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <p className="text-capitalize">
                Preis
            </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <p className="text-capitalize">
                Anzahl
            </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <p className="text-capitalize">
                 Artikel entfernen
            </p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <p className="text-capitalize">
                Preis Gesamt
            </p>
        </div>
      </div>
    </div>
  )
}
