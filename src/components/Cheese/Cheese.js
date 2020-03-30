import React from 'react';
import './Cheese.css';

const cheese = (props) => {

    return (
        <div className="cheese__block">
            <div className="cheese__image">
                <img src={props.image} />
            </div>
            <div className="cheese--name">Сыр мягкий</div>
            <a href="#"><span>КРЕМЧИЗ</span><br /> <span className="small">тар-тар</span></a>
            <img className="default__image" src={props.defIMG}></img>
            <p>Прекрасно заменяет классический французский соус из желтка, растительного масла и зеленого лука</p>
        </div>
    );

}

export default cheese;