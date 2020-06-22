import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import image from '../0.png'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell align="middle" col={12}>
                        <img 
                            src={image}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>{'Back End Developer & Data Analyst'}</h1>
                        <hr/>  
                        <p>Java | SQL | Python | JavaScript | Node.js | React | Typescript</p> 
                        <div className="social-links">
                            <a href="http://www.linkedin.com/in/cole-johnson-4baaa1169" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing