import { react } from '@babel/types'
import React, { useState } from "react"
import { Button } from 'reactstrap'

const SecondPage = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="d-flex flex-row justify-content-start mt-5" id="root">
      <div>
        <h1 className="text-primary">COUNTER</h1>
        <p className="text-center mt-5 text-danger" style={{
          fontSize: "50px"
        }}>{counter}</p>
        <div className="d-flex flex-row justify-content-center mt-5">
          <button className="btn btn-success w-100" style={{
            marginRight: "10px"
          }} onClick={() => setCounter((preValue) => { return preValue + 1 })}> + </button>
          <button className="btn btn-info w-100" onClick={() => setCounter((preValue) => { return preValue <= 0 ? 0 : preValue - 1 })}> - </button>
        </div>
      </div>
      <div className="ml-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <div className="ml-5 mt-2">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div >
  )
}

export default SecondPage
