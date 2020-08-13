import React from 'react';

import CardInfo from '../components/CardInfo';


function Card(props) {

    return(
        <div className="d-inline-block card" style={{ width: '30rem', height:'100%', marginBottom:'10rem' }} onClick={(e) => props.click(props.item)}>
            <img className="card-image"style={{ width: '100%', height:'100%'}} src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );

}

export default Card;