import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import image from "../contact7.jpg"

class Contact extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">

                    <Cell align='middle' col={12}>
                        <img style={{ height: 500, width: 1300}} src={image} alt=""/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact