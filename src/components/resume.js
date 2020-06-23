import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import img from '../resume.png'

class Resume extends Component {
    render() {
        return (
            <div style={{ width: '50%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell align='middle' col={12}>
                        <img style={{ flex:1, height:undefined, width:undefined }} resizeMode="contain" src={img} alt=""/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume