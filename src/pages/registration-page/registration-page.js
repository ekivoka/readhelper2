import React from 'react';
import './registration-page.css'
import { Button, Form, Segment } from 'semantic-ui-react'


class RegistrationPage extends React.Component {

    state = {
        login: null,
        password: null
    }

    submit = () => {

    }

    onChangeLogin = (e) => {
        this.setState({
            login: e.target.value
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }




    render() {

        return (
            <div className='registration-page-wrapper'>

                <div className='login-form'>
                    <Segment color='purple'>
                        <h1>Readhelper</h1>
                    </Segment>
                    <Segment>
                        <h2>Регистрация</h2>
                        <Form onSubmit={() => this.submit()}>
                            <Form.Input required fluid label='Имя' placeholder='Имя' onChange={this.onChangeLogin} value={this.state.login} />
                            <Form.Input required type='password' fluid label='Пароль' placeholder='Пароль' onChange={this.onChangePassword} value={this.state.password} />
                            <Form.Input required type='password' fluid label='Пароль' placeholder='Повторите пароль' onChange={this.onChangePassword} value={this.state.password} />
                            <Button type='submit'>Зарегистрироваться</Button>
                        </Form>
                    </Segment>
                </div>
            </div>
        )

    }

}


export default RegistrationPage


