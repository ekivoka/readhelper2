import React from 'react';
import { Segment, Header, Grid, Button, Pagination } from 'semantic-ui-react'

class ReadPageHeader extends React.Component {

    render() {

        const { title, settings } = this.props
        console.log(this.props)

        return (
            <div style={{ margin: '20px' }}>
                <Segment>
                    <Grid verticalAlign="middle">
                        <Grid.Column width={8}><Header>{title}</Header></Grid.Column>
                        <Grid.Column width={6} textAlign='right'>
                            <Pagination
                                boundaryRange={0}
                                defaultActivePage={settings.lastPage}
                                ellipsisItem={null}
                                firstItem={null}
                                lastItem={null}
                                siblingRange={1}
                                totalPages={settings.pageCount}
                                onPageChange={(event, data) => this.props.setPage(data.activePage)}
                            />

                        </Grid.Column>
                        <Grid.Column width={2}><Button onClick={() => this.props.setVisible(true)} floated="right" basic color="green" circular icon='settings' /></Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

export default ReadPageHeader;