import React from 'react'
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'

const OneCard = (props) => {

    return (
        <Card shadow={0} style={{width: '320px', height: '380px', margin: 'auto'}}>
             <CardTitle expand style={{color: 'black',  background: `url(${props.link}) center 50% no-repeat rgb(158, 214, 204)`}}>{props.name}</CardTitle>
                <CardText >
                    {props.info}
                </CardText>
                <CardActions border>
                  <Button colored>View Code</Button>
                </CardActions>
        </Card>
    )
}

export default OneCard