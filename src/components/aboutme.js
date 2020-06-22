import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class AboutMe extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell  align='middle' col={12}>
                        <div className="banner-text">
                            <h1>{'About Me'}</h1>
                        <hr/>  
                        <p>Undergraduate student studying Computer Science and Math at the University of Nebraska - Lincoln. Member of the Raikes School of Computer Science and Buisness, an academic-based, interdiciplinary school focused on the combination of Computer Science and Buisness. Strong passion for Data Analytics, Software Develoment, and Bioinformatics. Personal skills include determination, communication, perseverance, and the drive to continully learn and grow academically and professionally</p> 
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe