import React, { Component } from 'react';
import Team from './TeamUI';
import img1 from './Assets/me.jpg';
import img2 from './Assets/Atrijo.png';

export default class Teams extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className="row">
                    <div className="col-md-4">
                        <Team imgsrc={ img1} title='Sanskrita Saha' link='https://github.com/Sanskrita2001'/>
                    </div>
                    <div className="col-md-4">
                        <Team imgsrc={ img2} title='Atrijo Gangopadhay' link='https://github.com/atrijo2001/'/>
                    </div>
                    <div className="col-md-4">
                        <Team  title='Sreyan Ghosh' link='https://github.com/sreyan-ghosh/'/>
                    </div>
                </div>
            </div>
        )
    }
}
