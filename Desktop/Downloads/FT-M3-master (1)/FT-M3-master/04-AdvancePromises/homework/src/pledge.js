'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
 class $Promise {
    constructor(executor){
        if (typeof executor !== "function");
        throw TypeError ("executor must be a function");
        
     this._state = "pending";

      this._value = undefined;
     
      this._handlerGroups= [];

      const callHandlers = (value) => {
         while (this._handlerGroups.length > 0) {
         const currentHandler= this._handlerGroups.shift();
           const {successCb,errorCb,downstreamPromise} =
           this._handlerGroups.shift();

    if(this._state === "fulfilled"){ //notengosucceshandler
    if (!successCb) downstreamPromise._internalResolve(value);
    else { //tengo successhandler
   const result = successCb(value);

      //retornando una promesa
   if ( result instanceof $Promise){

   result.then(
      (value) =>downstreamPromise._internalResolve(value),
   (err) => downstreamPromise._internalReject(err)
   );
   }else{
      
   }
}
}
    }
         this._state==="fulfilled" && currentHandler.successCb && currentHandler.succesCb(value)

           

         this._state === "rejected" && currentHandler.errorCb && currentHandler.errorCb(value);
      };
        }
      }

     this._internalResolve = (value) => { 
      if(this._state !=="pending")
      return;
      this._state = "fulfilled";
      this._value = value;
      callHandlers(this._value)
     };
     this._internalReject = (reason) => {
      if (this._state !== "pending") return;
      this._state = "rejected";
      this._value = reason;
callHandlers(this._value);

     };
   const resolve = (value) => {
      this._internalResolve(value)
   };

   const reject = (reason) => {
      this._internalReject(reason);
   };
   executor (resolve, reject);


this.then = (succesHandler, errorHandler) =>
{
const handlerGroup = {
   succesCb: typeof succesHandler === "function"
   ? succesHandler: false,
   errorCb: typeof  errorHandler === "function"
    ? errorHandler:false,
   };
    
    this._handlerGroups.push(handlerGroup);
    this._state!=="pending" && callHandlers(this._value);
 // return new $Promise (() => {})
};
  this.catch =(errorHandler) => {
   return this.then(null, errorHandler);
  }
   

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
