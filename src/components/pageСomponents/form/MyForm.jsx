import React from 'react'
import './MyFormModule.css'
import { Button, Form } from 'react-bootstrap'


function MyForm() {
  return (
        <Form className='myForm'>
            <Form.Group className="mb-3">
                <Form.Text className='text_form'>Ваше имя (обязательно)</Form.Text>
                <Form.Control type="firstname" className='input_form'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Text className='text_form'>Ваш e-mail(обязательно)</Form.Text>
                <Form.Control type="email" className='input_form'/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Text className='text_form'>Тема</Form.Text>
                <Form.Control type="firstname" className='input_form'/>
            </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Text className='text_form'>Сообщение</Form.Text>
                <Form.Control as="textarea" rows={3} className='input_form'/>
            </Form.Group>
            <Button variant="primary" type="submit"> ОТПРАВИТЬ</Button>
        </Form>
  )
}

export default MyForm

