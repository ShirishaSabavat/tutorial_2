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
            <h5>Add your Company </h5>
            <div className='mt-2 mb-2'>        
                <div className=''>
                        <Form>
                            <Row>
                                <Col sm='3'>
                                    <FormGroup>
                                        <Label for='nameVertical'>Company Id</Label>
                                        <Input type='number' name='name' id='nameVertical' placeholder='Company Id' />
                                    </FormGroup>
                                </Col>
                                <Col sm='3'>
                                    <FormGroup>
                                        <Label for='nameVertical'>Branch Id</Label>
                                        <Input type='number' name='name' id='nameVertical' placeholder='Branch Id' />
                                    </FormGroup>
                                </Col>
                                <Col sm='3'>
                                    <FormGroup>
                                        <Label for='nameVertical'>Department Name</Label>
                                        <Input type='text' name='name' id='nameVertical' placeholder='Department Name' />
                                    </FormGroup>
                                    </Col>
                                    <Col sm='3'>
                                    <FormGroup>
                                        <Label for='nameVertical'>Department Head</Label>
                                        <Input type='text' name='name' id='nameVertical' placeholder='Department Head' />
                                    </FormGroup>
                                    </Col>
                                    <Col sm='12'>
                                    <div className="d-flex flex-row justify-content-end">
                                <Button color='primary' type="submit" onClick={() => setCenteredModal(!centeredModal)}>
                                    Save
                                </Button>{' '}
                                    </div>
                                </Col>
                                </Row>
                        </Form>
                    
                </div>
            </div>
            <Table bordered responsive striped>
                <thead>
                    <tr>
                        <th>Company Id</th>
                        <th>Branch Id</th>
                        <th>Department Name</th>
                        <th>Department Head</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>148</td>
                        <td>123</td>
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