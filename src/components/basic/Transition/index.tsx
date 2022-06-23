import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'

interface TransitionProps {
  children: React.ReactNode
}

const Transition = ({ children }: TransitionProps) => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup className="layout__route">
          <CSSTransition
            key={location.pathname}
            classNames="layout__route"
            timeout={300}
          >
            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    ></Route>
  )
}

export default Transition
