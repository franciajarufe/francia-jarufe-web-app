import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Beneficios de estudiar en Irlanda</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.title}-${i}`} 
                  className="col-sm-6 col-md-3"
                  style={{ marginBottom: '30px' }}
                >
                  <div className="feature-item">
                    <div 
                      className="feature-icon"
                      style={{
                        width: '100px',
                        height: '100px',
                        margin: '0 auto 20px',
                        background: 'linear-gradient(to right, #6372ff 0%,rgb(54, 55, 57) 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <i className={d.icon} style={{ color: '#fff', fontSize: '38px' }}></i>
                    </div>
                    <h3 style={{ marginBottom: '15px' }}>{d.title}</h3>
                    <p style={{ marginBottom: '20px' }}>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      <style jsx>{`
        #features {
          padding: 80px 0;
          background: #ffffff;
        }
        
        .section-title {
          margin-bottom: 70px;
        }

        .feature-item {
          padding: 0 15px;
        }

        @media (max-width: 768px) {
          .feature-item {
            margin-bottom: 30px;
          }
          
          h3 {
            font-size: 18px;
          }
          
          p {
            font-size: 14px;
            line-height: 1.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;