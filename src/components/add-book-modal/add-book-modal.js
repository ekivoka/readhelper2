import React from 'react';
import { Header, Button, Modal, Form, Divider, Message, Segment, Icon, Select } from 'semantic-ui-react';

class AddBookModal extends React.Component {

    state = {
        modalOpen: false,
        filename: '',
        filesize: '',
        file: null,
        type: null,
        wrongName: false,
        wrongSize: false,
        wrongType: false,
        wrongEmptyFile: false,
        triedSubmit: false
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    onLoadBook = (e) => {
        const file = e.target.files[0]
        if (file) {
            this.setState({
                filename: file.name,
                file: file,
                filesize: file.size,
                type: file.type

            }, this.validate
            )
        }

    }

    onSubmit = () => {
        const { filename, type, file, filesize } = this.state;

        if (this.validate()) {
            const book = {
                name: filename,
                type: type,
                file: file,
                size: filesize
            }

            //добавить файл

        }
    }

    validate = () => {
        this.setState({
            wrongName: false,
            wrongSize: false,
            wrongType: false,
            wrongEmptyFile: false,
        })

        if (this.state.filename.length === 0) {
            this.setState(
                {
                    wrongName: true
                }
            )
            return 0
        }

        if (this.state.file === null) {
            this.setState({
                wrongEmptyFile: true
            })
            console.log(this.state.errors)
            return 0
        }

        return true;
    }

    onChangeName = (e) => {
        this.setState({
            filename: e.target.value
        }, this.validate
        )
    }




    render() {

        const { filename, wrongEmptyFile, wrongName, wrongSize, wrongType } = this.state;

        const langs = [
            { key: 'en', value: 'en', text: 'Английский' },
        ]

        return (
            <Modal
                trigger={
                    <Button onClick={this.handleOpen} basic circular icon='plus' size="medium" color="green" />
                }

                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Segment>

                    <Header icon='book' content='Новая книга' />
                    <Modal.Content>
                        <Form onSubmit={() => this.onSubmit()} error={wrongType || wrongSize || wrongName || wrongEmptyFile}>

                            <Form.Field>
                                <Form.Input
                                    label="Название"
                                    placeholder="Название"
                                    icon='book'
                                    iconPosition='left'
                                    error={wrongName}
                                    value={filename}
                                    onChange={this.onChangeName}
                                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                />
                            </Form.Field>

                            <label for="hidden-new-file" class="ui icon button medium">
                                <i class="attach icon"></i>
                                <span style={{ margin: '15px' }}>Выбрать книгу</span>
                            </label>

                            <Select options={langs} />
                            <Divider />

                            <Message error style={(wrongName) ? { display: 'block' } : { display: 'none' }}>
                                Некорректное имя файла
                            </Message>

                            <Message error style={(wrongSize) ? { display: 'block' } : { display: 'none' }}>
                                Файл слишком большой (>4MB)
                            </Message>

                            <Message error style={(wrongEmptyFile) ? { display: 'block' } : { display: 'none' }}>
                                Выберите книгу
                            </Message>

                            <Message error style={(wrongType) ? { display: 'block' } : { display: 'none' }}>
                                Книги только в формате <b>txt</b>
                            </Message>

                            <Button type='button' color='red' basic size='large' onClick={this.onReset} >Сбросить</Button>
                            <Button type='submit' color='green' basic size='large' style={{ marginLeft: '10px' }}>
                                <Icon name="upload" color="green"></Icon>
                                Загрузить
                             </Button>
                            <input type="file" id="hidden-new-file" onChange={this.onLoadBook} style={{ display: 'none' }}></input>
                        </Form>
                    </Modal.Content>
                </Segment>
            </Modal>
        )
    }
}

export default AddBookModal;