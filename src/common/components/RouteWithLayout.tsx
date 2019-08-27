import * as React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

interface Props {
    layout: any
    component: any
    rest: []
}

const RouteWithLayout = (props: Props) => {
    return (
        <Route
            render={matchProps => (
                <props.layout>
                    <props.component { ...matchProps } />
                </props.layout>
            )}
            />
    )
}

export default RouteWithLayout