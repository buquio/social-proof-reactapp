import React from 'react';

const Socialcard = (props) => {
    return (
        
        <div className="card one">
                        <div className="profile">
                            <img src={props.img} alt="image-colton"/>
                            <div className="profile-info">
                                <h3>{props.name} </h3>
                                <p>{props.profile}</p>
                            </div>
                        </div>
                        <div className="profile-review">
                            <p>{props.review}</p>
                        </div>
                    </div>
            
        
    );
};


export default Socialcard;