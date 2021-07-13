// import React from 'react';

// const Socialtitle = () => {
//     return (
        
//         <div className="social-title">
//                     <h1>10,000+ of our users love our products.</h1>                  
//                     <p>We only provide great products combined with excellent customer service.
//                         See what our satisfied customers are saying about our services.
//                     </p>
//                 </div>

            
    
//     );
// };


// export default Socialtitle;

//////////////
import React from 'react';

const Socialtitle = (props) => {
    return (
        
        <div className="social-title">
                    <h1>{props.title}</h1>                  
                    <p>{props.text}</p>
                </div>

            
    
    );
};


export default Socialtitle;