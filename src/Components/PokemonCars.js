import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Card from 'react-bootstrap/Card';

function PokemonCars({sprites, name, stats, types}) {
  return (
    <div className='d-flex justify-content-center pt-5'>

  

    <div className="card mb-3 align-items-center" style={{maxWidth: '540px'}}>
        <div className="row g-0">
            <div className="col-md-4">
          
              <img  src={sprites.front_default} className="img-fluid rounded-start" width={600}  ></img>

            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                        <ul>
                        {stats.map((stat, index) => 
                              (<li key={index.toString()}>{stat.stat.name} : {stat.base_stat}</li>))}
                        </ul>
                        <div>
                            {types.map((type, index) => <p key={index.toString()}>{type.type.name}</p>)}
                        </div>
              </div>
          </div>
      </div>
  </div>

</div> 
)
}

export default PokemonCars