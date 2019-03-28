import React from 'react'

export default function EmptyCart() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-10 mx-auto text-center">
                <h1>
                    Ihr Warenkorb ist leer
                </h1>
                <img
                style={{width:'7rem', marginTop:'2rem'}}
                src="https://image.flaticon.com/icons/svg/102/102661.svg" 
                alt="empty cart"/>
            </div>
        </div>
    </div>
  )
}
