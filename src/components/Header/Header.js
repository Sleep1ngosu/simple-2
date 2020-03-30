import React from 'react';
import './header.css';
import bonfesto from '../../assets/bonfesto.png';
import cooking from '../../assets/cooking.png';
import villmonte from '../../assets/villmonte.png'

const header = () => {

    return (
        <div className="header">
            <h1 className="header--text">Представлен в брендах</h1>
            <div className="header--nav">
                <div className="item"><p className="item-1--text">Все бренды</p></div>
                <div className="item item-2"><img src={bonfesto} /></div>
                <div className="item"><img src={villmonte} /></div>
                <div className="item"><img src={cooking} /></div>
            </div>
        </div>
        
    )

}   

export default header;