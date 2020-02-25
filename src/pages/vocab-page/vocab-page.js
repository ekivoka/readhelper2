import React from 'react';
import './vocab-page.css'
import { incPage, decPage, setPage, setLevel } from '../../actions/settings-actions';
import ReadPageHeader from '../../components/read-page-header'
import { Segment, Header, Sidebar, Select, Table, Menu, Icon, Rating, Divider, Label, Checkbox } from 'semantic-ui-react'






class VocabPage extends React.Component {

    state = {
        visible: false
    }

    setVisible = (visible) => {
        this.setState({
            visible: visible
        })
    }

    render() {


        return (
            <div className="vocab-page-wrapper">

                <Segment>
                    <div className="vocab-page-header-wrapper">
                        <div style={{ display: 'flex', alignItems: "center", marginLeft: '10px' }}>
                            <Header>Слова</Header>
                        </div>
                    </div>



                </Segment>

                <Segment>
                    <Table celled color='green'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Слово</Table.HeaderCell>
                                <Table.HeaderCell>Перевод</Table.HeaderCell>
                                <Table.HeaderCell>Статус</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Tidy</Table.Cell>
                                <Table.Cell>Аккуратный</Table.Cell>
                                <Table.Cell><Select placeholder='Новое' /></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Salt</Table.Cell>
                                <Table.Cell>Соль</Table.Cell>
                                <Table.Cell><Select placeholder='Изучено' /></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Foreman</Table.Cell>
                                <Table.Cell>Мастер</Table.Cell>
                                <Table.Cell><Select placeholder='Новое' /></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Bloom</Table.Cell>
                                <Table.Cell>Цветение</Table.Cell>
                                <Table.Cell><Select placeholder='Новое' /></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Fever</Table.Cell>
                                <Table.Cell>Лихорадка</Table.Cell>
                                <Table.Cell><Select placeholder='Новое' /></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Porridge</Table.Cell>
                                <Table.Cell>Каша</Table.Cell>
                                <Table.Cell><Select placeholder='На изучении' /></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Colonel</Table.Cell>
                                <Table.Cell>Полковник</Table.Cell>
                                <Table.Cell><Select placeholder='Новое' /></Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>Goulash</Table.Cell>
                                <Table.Cell>Гуляш</Table.Cell>
                                <Table.Cell><Select placeholder='Новое' /></Table.Cell>
                            </Table.Row>



                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3'>
                                    <Menu floated='right' pagination>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron left' />
                                        </Menu.Item>
                                        <Menu.Item active="true" as='a'>1</Menu.Item>
                                        <Menu.Item as='a'>2</Menu.Item>
                                        <Menu.Item as='a'>3</Menu.Item>
                                        <Menu.Item as='a'>4</Menu.Item>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron right' />
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Segment>
            </div>
        )
    }

}

export default VocabPage;