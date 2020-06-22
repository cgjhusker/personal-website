import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import OneCard from './Cards'
import image from '../java-img.png'
import reactimage from '../react2.png'

class Projects extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={3}></Cell>
                    <Cell align='middle' col={3}>
                        <OneCard className='please-change' link={reactimage} name={`Personal Portfolio`} info={'This website itself'}/>
                    </Cell>
                    <Cell align='middle' col={3}>
                        <OneCard className='please-change' link={image} name={'Java Project'} info={'Volleyball Stat Tracking App'}/>
                    </Cell>
                    <Cell col={3}></Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects