import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>A propos</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Mes coordonnées</h2>
                  <p className="address">
       						<span>{resumeData.name + ', ' + (new Date().getFullYear() - 1998) + ' ans'} </span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <a href={resumeData.website}>{resumeData.website}</a>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}