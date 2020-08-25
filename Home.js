import React from 'react'
import Map from './Map'
class Home extends React.Component {
    render() {
      return(
          <div style={{magin:'50px'}}>
          <Map
       google={this.props.google}
       center={{lat: 9.66845, lng: 80.00742}}
       height='600px'
       width='600px'
       zoom={10}
      />
      </div>
        )
    }
  }
  export default Home