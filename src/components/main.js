import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './landing'
import AboutMe from './aboutme'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'

const Main = () => (
    <Switch>
        <Route exact path="/personal-website" component={Landing}></Route>
        <Route path="/aboutme" component={AboutMe}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/personal-website" component={Resume}></Route>
    </Switch>
)

export default Main