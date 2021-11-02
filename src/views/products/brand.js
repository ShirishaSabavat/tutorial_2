import React, { useState } from 'react'
import {
  Table, FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'

const SecondPage = () => {
  const [centeredModal, setCenteredModal] = useState(false)

  return (
    <div id="root" className="shadow p-2 bg-white border rounded">
    <h5>Add your Brand </h5>
        <div className='demo-inline-spacing d-flex flex-row justify-content-end mb-2'>
           <div className='vertically-centered-modal'>
          <Button.Ripple color='info' onClick={() => setCenteredModal(!centeredModal)}>
            <span>+</span> Add
          </Button.Ripple>
          <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
            <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Add Brand</ModalHeader>
            <ModalBody>
              <Form>
                <Row>
                  <Col sm='12'>
                    <FormGroup>
                      <Label for='nameVertical'>Brand</Label>
                      <Input type='text' name='name' id='nameVertical' placeholder='Brand' />
                    </FormGroup>
                    <FormGroup>
                      <Label for='nameVertical'>Note</Label>
                      <Input type='text' name='name' id='nameVertical' placeholder='Note' />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color='primary' type="submit" onClick={() => setCenteredModal(!centeredModal)}>
                Save
              </Button>{' '}
              <Button color="secondary">Close</Button>
            </ModalFooter>
          </Modal>

        </div>
      </div>
      <Table bordered responsive striped>
        <thead>
          <tr>
            <th>Brands</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className='align-middle font-weight-bold'>ABC</span>
            </td>
            <td>abc</td>
            <td>
              <Button.Ripple className="mr-1" color='primary'>Edit</Button.Ripple>
              <Button.Ripple color='danger'>Delete</Button.Ripple>
            </td>

          </tr>
          <tr>
            <td>
              <span className='align-middle font-weight-bold'>DEF</span>
            </td>
            <td>def</td>
            <td>
              <Button.Ripple className="mr-1" color='primary'>Edit</Button.Ripple>
              <Button.Ripple color='danger'>Delete</Button.Ripple>
            </td>

          </tr>

          <tr>
            <td>
              <span className='align-middle font-weight-bold'>ABC</span>
            </td>
            <td>abc</td>
            <td>
              <Button.Ripple className="mr-1" color='primary'>Edit</Button.Ripple>
              <Button.Ripple color='danger'>Delete</Button.Ripple>
            </td>

          </tr>

        </tbody>

      </Table>

    </div>
  )
}

export default SecondPage