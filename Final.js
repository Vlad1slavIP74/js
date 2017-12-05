class Ob1 {      
}

class Observers { 
  create (){
    let observer
    observer = new Ob1()
  }
}
const factory = new Observers ()

const mes = function (str) {
  console.log(`ob1 receive msg from ${str}`);
};


const wrap = function () {
ob1 = factory.create()
return (ob1,mes())
}
ob1 = factory.create() 
ob2 = factory.create()

function Observable(name,fn){
  this.name = name,
  this.fn = fn,
  this.listeners = [],
  this.Count = 0
};
Observable.prototype.subscribe = function (observer) {
  (observer.listeners.push(this.fn),observer.Count++)
};
Observable.prototype.sendMessage = function ( msg ) {
  this.listeners.forEach(fn => (fn) ? fn(this.name + ': '+msg) : '');
};
Observable.prototype.subCount = function () {
  console.log(`${this.name} has ${this.Count} subscribers`)
};
Observable.prototype.unsubscribe = function (observer) {
  a = observer.listeners.pop();
  observer.Count--;
};
Observable.prototype.unsubscribeAll = function (observer) {
  for (let i = 0;i < observer.listeners.length; i++){
    delete observer.listeners[i];
    observer.Count--;
  }
}
let Google = new Observable ('Google');
ob1 = new Observable('ob1', function (str) {
  console.log(`ob1 receive msg from ${str}`)
});
ob2 = new Observable('ob2', function(str) {
  console.log(`ob2 receive msg from ${str}`)
});
 setTimeout(function () {
    ob1.subscribe(Google);
    ob2.subscribe(Google);
    Google.sendMessage('Hi');
    Google.subCount();
    console.log();
 },500)
 setTimeout(function () {
   ob2.unsubscribe(Google);
   Google.subCount();
   Google.sendMessage('Hi');
   console.log();
 },1000)
 setTimeout(function () {
  Google.unsubscribeAll(Google)
   Google.subCount();
 },1500)
