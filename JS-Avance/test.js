Number.prototype.foisluimeme = function(){
    return this * this;
}

var test = 10;
test.foisluimeme();


String.prototype.checkAndConcat = function(a,...args){
    var res = this;
    if(String(this) === a){
        for(var i=0; i<args.length; i++){
            res+=args[i];
        }
    }
    return res;
}

var test = "salut";
console.log(test.checkAndConcat("salut","Hi","In America"));
console.log(test.checkAndConcat("Hi","In America","salut"));


function Person(n,a){
    var name = n;
    var age = a||0;
    this.comp;
    this.isMineur = function(){
        return age <18;
    }

    Person.prototype.lengthName = function(){
        return this.name.length;
    }

    this.getName = function(){
        return name;
    }

    this.getAge = function(){
        return age;
    }

    this.setName = function(string){
        if(string.length>5){
            name = string;
        }
    }

    this.setAge = function(a){
        if(a>20){
            age = a;
        }
    }

    incre = function(){
        this.comp++;
    }

    this.incrementation = function(){
        incre();
    }
}

function Vehicule(modele){
    this.modele = modele;
    this.peutVoler = false;
}

function Avion(){
    Vehicule.apply(this, arguments);
}

Avion.prototype = new Vehicule();
Avion.prototype.peutVoler = true;

var mirage = new Avion("mirage 2000");

function Personne(n,a){
    this.nom = nom;
    this.age = a;
}

function Employe(n,a,s,p){
    Personne.apply(this,arguments);
    this.salaire;
    this.poste;
}

var Person = {
    name : "tototo",
    age : 40,
    
    direBonjour : function(){
      alert('Salut ! je suis '+this.name+'.')
    }
  };
  
var Employe = {
  changerNom : function(a){
    this.name = a;
  }
}

Object.setPrototypeOf(Employe, Person); 

var emp = Object.create(Employe); 
emp.salaire = "1K";
emp.job = "Dormir";
emp.age = 25;
emp.changerNom("Biily");


// Exercice bind
var x = {
    name : "hello",
    changeName : function(n){
        this.name = n;
    }
}

var y = {
    name: "world"
}

var func = x.changeName;
var changeNameY = func.bind(y)

changeNameY("yelllo");


var villes = [
    {nom:"Nantes",departement:44, presDeLaMer:false},
    {nom:"Dunkerque",departement:59, presDeLaMer:true},
    {nom:"Paris",departement:79, presDeLaMer:false}
]

function attendre(){
    var i = 0;
    setInterval(function(){
        if(i> villes.length){
            clearInterval(this);
        }
        else{
            affiche(villes[i]);
        }
        i++;
    },1000);
}

function affiche(a){
    console.log(a.nom+"("+a.departement+")");
}


function  recursive(i){
    if(!villes[i]){
        return;
    }

    affiche(villes[i]);
    setTimeout(function(){
        recursive(++i);
    },1000);
}

function nameToUpper(){
    this.nom.toUpperCase();
}

var villesArray = [
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
    { nom: "Nantes", departement: 44, presDeLaMer: false },
    { nom: "Dunkerque", departement: 59, presDeLaMer: true },
    { nom: "Paris", departement: 75, presDeLaMer: false },
];

function afficherVilles(villes) {
  function afficherUneVille(ville, index) {
    if (!ville[index]) return;
    
    function creerNomAffichageVille(ville) {
        var y = nameToUpper.bind(ville);
        y();
        return ville.nom + ' (' + ville.departement + ')'; 
    }
    
    function afficherChaineDeCharacteres(string) {
      console.log(string);
    }


  
    console.log(index);
    console.log(creerNomAffichageVille(villes[index]));
    setTimeout(function() {
      afficherUneVille(villes, ++index);
    }, 1000);
  }
    afficherUneVille(villes, 0);
}

afficherVilles(villesArray);


// refaire la fonction map
Array.prototype.mmap = function(fn){
    var res = this;
    res.forEach(function(value,index){
        res[index] = fn(value);
    });
    return res;
}

var tab =[1,2,4,3,5,4,6,8,5,5,4,5,4,5,4,5,5,5,4,5,5,5,5];
var tab2 = ["a","b","c","c","d"];
var tabb = tab.mmap(function(x){return x+1; });
var tabb2 = tab2.mmap(function(x){return x+1; });
console.log(tabb);
console.log(tabb2);

// refaire la fonction filter
Array.prototype.ffilter = function(fn){
    var res = new Array();
    var tab = this;
    console.log(tab);
    this.forEach(function(value,index){
        if(fn(value)){
            res.push(tab[index]);
        }
    });
    console.log(res);
    return res;
}

var tab =[1,2,4,3,5,4,6,8,5,5,4,5,4,5,4,5,5,5,4,5,5,5,5];
var tabb = tab.ffilter(x => x>2);
                    // function(x){return x>2
        
// exercice Arrow function
var person = { 
    name:'Nani',
    sayName : function(){
          setTimeout(() => {console.log(this.name)}, 1000);
    },
}
  
  sayNamebind = function(){
    setTimeout(function() {
      person.sayName();
    }.bind(this), 1000)
  }

  // Les classes !

class Person{
    constructor(n){
       this.name = n;
    }

    saluer(){
        console.log("Bonjour je suis "+this.name);
        console.log(this.constructor.name);
    }
}

class Employe extends Person{
    constructor(n,s){
        super(n);
        this.salaire = s;
    }

    saluer(){
        super.saluer();
        console.log("et mon salaire est "+this.salaire);
    }
}

var p = new Person("Bob");
var e = new Employe("Bill",100000);
p.saluer();
e.saluer();

//Promesse

function analyseUrl(url){
   ((resolve, reject)=> {
        if(page charge){
            resolve
        }
        else {
           reject
        }
    })
}


function getURL(url) {
    return new Promise((res,err))
  }
  
  getURL("http://google.fr")
    .then(res => {
      console.log('Jai fini!');
      console.log(res);
  })
    .catch(err => {console.error(err)})
  console.log("Fin de l'exec principale");


  const prom =  function (url) {
    return new Promise((success, error) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) success(xhr.responseText);
            else error(xhr);
          }
        };
        xhr.open('GET', url, true);
        xhr.send();
    })
}

prom('https://flatuicolors.com/palette/cn')
    .then( response => console.log(response) )