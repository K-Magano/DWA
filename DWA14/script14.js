import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MyTally extends LitElement {
   constructor() { 
    super();
     this.counter = 0;

   }
   
   handleIncrement() {
    this.counter += 1;
    this.requestUpdate();
   }

   handleDecrement() {
    this.counter -= 1;
    this.requestUpdate();
   }
 
   /*resetUpdate() {
    this.counter = {this.counter};
    this.requestUpdate();*/

  render() {
    return html`
    <h1> Tally Count </h1>
       <div>${this.counter} </div>
    <button @click = ${this.handleIncrement}> + </button>
    <button  @click = ${this.handleDecrement}> - </button>
    <button @click = ${this.resetUpdate}> Reset </button>
    `;
  }
}

window.customElements.define('tally-app', MyTally);
