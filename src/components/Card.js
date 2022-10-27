// import React from 'react'

// export default function Card(props) {
//     console.log(props.values);
//     const {_id, desc,url,prodName} = props.values;
//     //props destructuring...
//     return (
//     <div class="card" >
//         <img src={url}
//         class="card-img-top" alt="..." />
//         <div class="card-body">
//             <h5 class="card-title">{prodName}</h5>
//             <p class="card-text">
//                 wefeubfre
//             </p>
//             <button class="btn btn-primary">Go Somewhere</button>
//         </div>
//     </div>
//   )
// }


import React, { Component } from 'react'

export class Card extends Component {
  render() {
    console.log("logged via this", this.props);
    const { _id,desc, url, prodName}= this.props.values;

    this.state = {
        btnText: "Buy" + _id,
    };

    return (
        <div class="card" >
                 <img src={url}
                 class="card-img-top" alt="..." />
                 <div class="card-body">
                     <h5 class="card-title">{prodName}</h5>
                     <p class="card-text">
                         wefeubfre
                     </p>
                     <button class="btn btn-primary">{this.state.btnText}</button>
                 </div>
             </div>
    )
  }
}

export default Card