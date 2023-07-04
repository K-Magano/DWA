import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

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

    static styles = css `h1 {
        color: lightgreen;
        font-size: 5rem;
        padding-left: 2em;
    }
    
    button {
      display: flex;
      font-size: 2rem;
      align-items: center;
      padding: 0.7em .5em 0.5em 1em;
      color: white;
      background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
      border: none;
      border-radius: 5px;
    }

    .counter{
      color: lightgreen;
      font-size: 16rem;
      padding-left: 2em;
          }

    .container {
       display: grid;
       grid-template: 40px 40px /1fr 1fr;
       gap: 17px;
    }
    
    .reset{
      grid-column: 1 / -1;
      border-radius: 5px;
           
    }
       `

  render() {
    return html`
    <h1> Tally Count </h1>
       <div class="counter">${this.counter} </div>
    <div class="container">
      
    <button @click = ${this.handleIncrement}> + </button>
    <button  @click = ${this.handleDecrement}> - </button>
    <button class="reset" @click = ${this.resetUpdate}> Reset </button>
  </div>
    
    `;
  }
}

window.customElements.define('tally-app', MyTally);
