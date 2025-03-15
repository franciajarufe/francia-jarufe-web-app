import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/IMG_2991.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <br></br>
              <br></br>
              <h2>Sobre mi</h2>
              <p style={{fontSize: 15,fontWeight: ''}}>{props.data ? props.data.paragraph : "loading..."}</p>
              <br></br>
              <br></br>
              <br></br>
              
              <h2 style={{fontSize: 21,fontWeight: 'inherit'}}> "Convierte tu sueño de estudiar en el extranjero con mi asesoría personalizada."</h2>
              <p style={{fontSize: 14,fontWeight: 'bolder'}}>Francia Jarufe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
