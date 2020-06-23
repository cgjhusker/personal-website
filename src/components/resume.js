import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import img from '../resume.png'

class Resume extends Component {
    render() {
        return (
            <div style={{ width: '50%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                    <Cell align='middle' col={12}>
                        <img style={{ width: "60%", margin: 'auto' }} src={img} alt=""/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume