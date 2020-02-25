import React from 'react';
import { Segment, Statistic, Progress, Image } from 'semantic-ui-react'
import Trend from 'react-trend';
import './home-page.css'

class HomePage extends React.Component {

    render() {
        return (
            <div className="home-page-wrapper">
                <div className="user-info">
                    <Segment style={{ height: '100%' }}>
                        <div className="inner-user-info">

                            <div className='photo'>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' size='medium' circular />
                            </div>

                            <div className='data'>
                                <p> Петров Иван</p>
                                <p> Уровень: <b>A1</b></p>
                                <Progress percent={30} label='' color='teal' />
                            </div>
                        </div>
                    </Segment>

                </div>
                <div className="words-stat">
                    <Segment inverted style={{ height: '100%' }}>

                        <p>Статистика за неделю:</p>
                        <Trend smooth
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-out"
                            data={[0, 2, 5, 9, 5, 10, 3]}
                            gradient={['#00c6ff', '#F0F', '#FF0']}
                            radius={20}
                            strokeWidth={1.9}
                            strokeLinecap={'round'}
                            style={{ height: '50%' }}

                        />

                        <Statistic label='новых слов' value='15' color='green' />

                    </Segment>
                </div>
                <div className="new-words-info">
                    <Segment inverted style={{ height: '100%' }}>
                        <p>Статистика за месяц:</p>
                        <Trend smooth
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-out"
                            data={[1, 4, 3, 7, 4, 9, 6, 7, 1, 2, 4, 2, 4, 2, 6, 3, 7, 3, 8, 5, 7, 4, 3, 8, 6, 5, 4, 8, 2]}
                            gradient={['#00c6ff', '#F0F', '#FF0']}
                            radius={20}
                            strokeWidth={1.9}
                            strokeLinecap={'round'}
                            style={{ height: '50%' }}
                        />
                        <Statistic label='новых слов' value='56' color='green' />
                    </Segment>

                </div>
                <div className="words-stat">
                    <Segment inverted style={{ height: '100%' }}>
                        <p>Статистика за год:</p>
                        <Trend smooth
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-out"
                            data={[34, 23, 35, 45, 34, 22, 21, 35, 37, 28, 26, 37]}
                            gradient={['#00c6ff', '#F0F', '#FF0']}
                            radius={20}
                            strokeWidth={1.9}
                            strokeLinecap={'round'}
                            style={{ height: '50%' }}
                        />

                        <Statistic label='новых слов' value='521' color='green' />
                    </Segment>
                </div>



            </div>
        )
    }

}

export default HomePage;