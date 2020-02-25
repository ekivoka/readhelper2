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
                                <Progress percent={55} label='' color='teal' />
                            </div>
                        </div>
                    </Segment>

                </div>
                <div className="words-stat">
                    <Segment inverted style={{ height: '100%' }}>

                        <p> Прочитано слов:</p>
                        <Trend smooth
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-out"
                            data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
                            gradient={['#00c6ff', '#F0F', '#FF0']}
                            radius={20}
                            strokeWidth={1.9}
                            strokeLinecap={'round'}
                            style={{ height: '50%' }}

                        />

                        <Statistic label='слов прочитано' value='550' color='green' />

                    </Segment>
                </div>
                <div className="new-words-info">
                    <Segment inverted style={{ height: '100%' }}>
                        <p>Выучено новых слов:</p>
                        <Trend smooth
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-out"
                            data={[0, 2, 5, 4, 5, 10, 7, 5, 0, 0, 9, 8, 7, 9, 7]}
                            gradient={['#00c6ff', '#F0F', '#FF0']}
                            radius={20}
                            strokeWidth={1.9}
                            strokeLinecap={'round'}
                            style={{ height: '50%' }}
                        />
                        <Statistic label='новых слов выучено' value='50' color='green' />
                    </Segment>

                </div>
                <div className="words-stat">
                    <Segment inverted style={{ height: '100%' }}>
                        <p>Прочитано книг:</p>
                        <Trend smooth
                            autoDraw
                            autoDrawDuration={3000}
                            autoDrawEasing="ease-out"
                            data={[0, 100, 50, 52, 60, 40, 12, 58, 50, 10, 10, 80, 52, 19, 30]}
                            gradient={['#00c6ff', '#F0F', '#FF0']}
                            radius={20}
                            strokeWidth={1.9}
                            strokeLinecap={'round'}
                            style={{ height: '50%' }}
                        />

                        <Statistic label='книг прочитано' value='5' color='green' />
                    </Segment>
                </div>



            </div>
        )
    }

}

export default HomePage;