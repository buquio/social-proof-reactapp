
import React from 'react';
import Ratings from './Ratings';
import Socialcard from './Socialcard';
import Socialtitle from './Socialtitle';

import ratings from '../ratings';
import socialcards from '../socialcards';


//// intructions to recreate an html-page to react
//paste in the html inside app.js
//move a copy of the html-item u want to component into its component file 
//move every html-item to a file like the data-store/database
//then map the database file to create all the item-component here in app.js, set the props attributes
function App() {
  return (
    <div className="App">
     <div className="container">
        <section className="social-proof-wrapper">

            <section className="social-header">

{/* attribute are not changing so no need to set props */}
                {/* <Socialtitle   />  */}
                <Socialtitle 
                title="10,000+ of our users love our products." 
                text="We only provide great products combined with excellent customer service.See what our satisfied customers are saying about our services."
                        />


                <div className="ratings">
                    {ratings.map(rating => {
                        return (
                        <Ratings
                            key={rating.id}
                            id={rating.id}
                            img={rating.imgURL}
                            rated={rating.rated}
                        />
                        )
                        })
                    }

                </div>

            </section>

            <section className="social-review">
                <div className="cards-wrapper">
                {socialcards.map(socialcard => {
                        return (
                        <Socialcard
                            key={socialcard.id}
                            id={socialcard.id}
                            img={socialcard.imgURL}
                            profile={socialcard.profile}
                            review={socialcard.review}
                        />
                        )
                        })
                    }

                </div> 

            </section>


        </section>
    </div>

    </div>
  );

}

export default App;
