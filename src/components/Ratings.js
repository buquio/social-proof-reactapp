import React from 'react';



const Ratings = (props) => {

    // function type (props.id) {
    //     const typeClass;
    //     if (props.id = 0) {
    //         typeClass =first
    //     }else if (props.id = 1) {
    //         typeClass =second
    //     }else {
    //         typeClass =third
    //     }
    //     }

    return (
          <div className="ratings-div first">
          {/* <div className="ratings-div {type}"> */}

                        <div className="rating-star">
                            <img src={props.img} alt="star icon"/>
                            <img src={props.img} alt="star icon"/>
                            <img src={props.img} alt="star icon"/>
                            <img src={props.img} alt="star icon"/>
                            <img src={props.img} alt="star icon"/>
                        </div>
                        <div className="rating-title">
                            <p>{props.rated}</p>
                        </div>
                    </div>
            
    );
};

export default Ratings;