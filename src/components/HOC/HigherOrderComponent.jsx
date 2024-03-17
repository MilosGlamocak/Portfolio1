import React from "react"

function hoc(WrappedComponent, checkPermissions) {

    return function ComponentWithAuthorization(props) {

        console.log(props)
        return checkPermissions(props.componentId) ?
        <WrappedComponent {...props}/> : alert(`nemate pravo pristupa`)
    }
}

export default hoc;
