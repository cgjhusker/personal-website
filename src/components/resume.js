import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import img from '../Screen Shot 2020-06-22 at 4.00.38 PM.png'

class Resume extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell align='middle' col={12}>
                        <img style={{ width: "50%", height: "50%" }} src={img}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume