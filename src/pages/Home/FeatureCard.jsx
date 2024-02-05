import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = (props) => {
  return (
    <>
      <div className="center">
        <img src={props.imgUrl} alt="logo" />
        <h3>{props.heading}</h3>
        <Link className=''>{props.linkText}</Link>
      </div>
    </>
  )
}

export default FeatureCard
