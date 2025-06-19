import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{marginBottom: '0px'}}>
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      <button type="button" className="btn-close" onClick={props.dismissAlert} aria-label="Close"></button>
    </div>
  )
}
