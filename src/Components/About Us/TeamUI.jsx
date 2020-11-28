import React from 'react';
import "./Team-style.css";

const Team = props => {
    return (
        <div className='card-team text-center shadow'>
            <div className="overflow">
                <img src={props.imgsrc} classname='card-img-top' alt=''></img>
            </div>
            <div className="card-body text-dark">
                <h4 className='card-title text-dark'>{props.title}</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rem praesentium fugit libero vero nulla veniam possimus, omnis qui eaque?</p>
                <a href={props.link} className='btn btn-outline-success'>More Details</a>
            </div>
        </div>
    );
}
export default Team;