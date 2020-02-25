import React from 'react';
import './login-page.css'
import { Button, Form, Segment } from 'semantic-ui-react'


class LoginPage extends React.Component {

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
            <div className='login-page-wrapper'>

                <div className='login-form'>
                    <Segment color='purple'>
                        <h1>Readhelper</h1>
                    </Segment>
                    <Segment>
                        <h2>Вход</h2>
                        <Form onSubmit={() => this.submit()}>
                            <Form.Input required fluid label='Имя' placeholder='Имя' onChange={this.onChangeLogin} value={this.state.login} />
                            <Form.Input required type='password' fluid label='Пароль' placeholder='Пароль' onChange={this.onChangePassword} value={this.state.password} />
                            <Button type='submit'>Войти</Button>
                        </Form>
                    </Segment>
                </div>
            </div>
        )

    }

}


export default LoginPage


