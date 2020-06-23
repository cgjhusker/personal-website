import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import img from '../resume2.png'

class Resume extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%', margin: 'auto'}}>
                <Grid className="resume-grid">
                    <Cell align='middle' col={12}>
                        <img style={{ height:'100%', width:'75%' }} src={img} alt=""/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume