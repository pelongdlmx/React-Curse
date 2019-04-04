 
window.onload = function(){
    getData(); 
    // document.getElementById("manualSearch").hidden = true
    document.getElementById("selectorPokemon").hidden = true
    document.getElementById("randomSearch").hidden = true
    // document.getElementById("resultRandom").hidden = true
}

let string = [];
let htmlText = "";
let urlData = []; 
let urlData2 = []; 
let pokemonNumber = ""; 
let pokemonPosition = []; 
let trainers = []; 
let trainerName = ""; 


var checkSelector = () => {
    pokemonPosition = []; 
    let selector = document.getElementsByName('selector');
        // selector.forEach(element => {
        //     selector[i].checked == true ? pokemonPosition.push(selector[i].id) : null
        // });
        for(i = 0; i < selector.length; i++){
            selector[i].checked == true ? pokemonPosition.push(selector[i].id) : null
        }
    searchObjectbyPosition2()
}

var getData = () => {
    let url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=964"
    fetch(url)
    .then(jsonData => jsonData.json())
    .then(jsonData => {
        // console.log(jsonData.results)
        string = jsonData.results; 
    }); 
}

var validationRadio = () => {
    if(document.getElementById('manual_opt').checked){
        document.getElementById("manualSearch").hidden = false
        document.getElementById("randomSearch").hidden = true
        document.getElementById("showData").innerHTML = ""; 
        document.getElementById("showInfo").hidden = false
        
    }else{
        if(document.getElementById('rdm_opt').checked){
            document.getElementById("manualSearch").hidden = true
            document.getElementById("randomSearch").hidden = false
            document.getElementById("resultRandom").hidden = true
            document.getElementById("showData").innerHTML = ""; 
        }
    }
}

var searchObject = () => {
    document.getElementById("randomSearch").hidden = false
    htmlText = ""; 
    searchValue = document.getElementById("input").value; 
    urlData = [];
    var iterativeFunction = (taxonomyData)=> {
        for(i=0; i<taxonomyData.length; i++){
            n = taxonomyData[i].name.search(searchValue)
            n != -1 ? urlData.push(taxonomyData[i].url)  : null
            // htmlText += keyData + ", "  
            // showPokemon(); 
        };
        urlData.length <= 0 ? alert("Sorry, we did not find information with those terms") : null
    }
    var taxonomy = string;
    taxonomy.length > 0 ? iterativeFunction(taxonomy) : null
        
    
    showPokemon(); 
}

var randomPokemon = () => {
    urlData = [];
    pokemonPosition = []; 
    htmlText = ""; 
    pokemonNumber = ""; 
    for(i=0; i<=4; i++){
        pokemonNumber = ""; 
        pokemonNumber = Math.floor(Math.random() * 100) + 1;
        pokemonPosition.push(pokemonNumber)
        pokemonNumber = ""; 
    }
    searchObjectbyPosition(); 
    document.getElementById("resultRandom").hidden = false
}

var searchObjectbyPosition2 = () => {
    document.getElementById("showData").innerHTML = ""; 
    urlData2 = [];
    for(i=0; i<pokemonPosition.length; i++){
        a = pokemonPosition[i]
        urlData2.push(a);
    }
}

var trainerNameInput1 = () => {
    if(trainers[0] == null){
    let person = prompt("Please enter the name for the first Trainer:", "Ash Ketchum");
        if (person == null || person == "") {
            alert("The space name is empty, try again") 
        }
        trainerName = new Trainer(person)
        trainers.push(trainerName)
    }
        checkSelector(); 
        pushData1(); 
        showPokemon(); 
}

var trainerNameInput2 = () => {
    if(trainers[1] == null){
        let person = prompt("Please enter the name for the second Trainer:", "Brock");
        if (person == null || person == "") {
            alert("The space name is empty, try again")
            
        }
        trainerName = new Trainer(person)
        trainers.push(trainerName)
    }
    checkSelector()
    pushData2()
    showPokemon(); 
}

var searchObjectbyPosition = () => {
    document.getElementById("showData").innerHTML = ""; 
    urlData = [];
        for(i=0; i<pokemonPosition.length; i++){
            a = pokemonPosition[i]
            urlData.push(string[a].url);
        }
    showPokemon(); 
}

var showPokemon = () => {
    document.getElementById("showData").innerHTML = ""; 
    for(i=0; i<urlData.length; i++){
        var url = urlData[i]  
        fetch(url)
        .then(pokemonData => pokemonData.json())
        .then(pokemonData => {
            htmlText += '<div class="col-4 border page-hero d-flex align-items-center justify-content-center">'
            htmlText += "<div class='col-md-4'><img src='" + pokemonData.sprites.front_default + "'></div>"
            htmlText += '<div class="col-md-8"><strong>Name: </strong>'+pokemonData.name+
                        '<br><strong>Type: </strong>'+ pokemonData.types[0].type.name + 
                        '<br><strong>Health: </strong>'+pokemonData.stats[5].base_stat + 
                        '<br><strong>'+ pokemonData.stats[2].stat.name +': </strong>'+ pokemonData.stats[2].base_stat 
                        
            htmlText += '<div class="border"><input type="checkbox" name="selector" id="' + pokemonData.id +'"> Select Pokemon</div></div></div>'
            document.getElementById("showData").innerHTML = htmlText; 
        });
    }
}

class Trainer {
    constructor (name){
        this.name = name; 
        this.pokemon = []; 
        
    }
}

class Pokemon  {
    constructor(name, type, health, specialAttack, img, url){
        this.name = name; 
        this.type = type; 
        this.health = health; 
        this.specialAttack = specialAttack; 
        this.img = img; 
        this.url = url; 
    }
    //Getter Methods - use them to obtain a property from within an object
    get pkmnName() {
        return this.name;
    }
    get pkmnHealth() {
        return this.health;
    }
    get pkmnType() {
        return this.type;
    }
    
    //Other Methods
    weakness() {
        switch(this.type){
            case 'Fire':
                return 'Water';
            
            case 'Water':
                return 'Grass';
                
            case 'Grass':
                return 'Fire';
            
            default:
                return 'n/a';
            //...
        }
    }
    
    printPokemon() {
        let w = this.weakness();
        let output = `<h1>${this.name}</h1><br><ul><li>Health: ${this.health}</li><li>Type: ${this.type}</li><li>Weakness: ${w}</li></ul>`;
        console.log(output);
    }

}

var pushData1 = () => {
    if(trainers[0].pokemon == 0 || trainers[0].pokemon.length <= 4 ){
        for(i=0; i<urlData2.length; i++){
            let url = "https://pokeapi.co/api/v2/pokemon/" + urlData2[i]
            fetch(url)
            .then(pokemonData => pokemonData.json())
            .then(pokemonData => {
                var pokemonToSave = new Pokemon(pokemonData.name,pokemonData.types[0].type.name,pokemonData.stats[5].base_stat,pokemonData.stats[2].base_stat, pokemonData.sprites.front_default, url);
                trainers[0].pokemon.push(pokemonToSave)
            });
        } 
    }
    else{
        alert("You can only choose 5 Pokemon, try once again.")  
    }
}

var pushData2 = () => {
    if(trainers[1].pokemon == 0 || trainers[1].pokemon.length <= 4 ){
        for(i=0; i<urlData2.length; i++){
            let url = "https://pokeapi.co/api/v2/pokemon/" + urlData2[i]
            fetch(url)
            .then(pokemonData => pokemonData.json())
            .then(pokemonData => {
                var pokemonToSave = new Pokemon(pokemonData.name,pokemonData.types[0].type.name,pokemonData.stats[5].base_stat,pokemonData.stats[2].base_stat, pokemonData.sprites.front_default, url);
                trainers[1].pokemon.push(pokemonToSave)
            });
        } 
    }
    else{
        alert("You can only choose 5 Pokemon, try once again.")  
    }
}

// var comparePokemonLenght = () => {
//     if(trainers[0].pokemon.length == 5 && trainers[1].pokemon.length == 5){
//         showAllPokemons(); 
//     }
// }

var showAllPokemons = () => {

    if(trainers[0].pokemon.length == 5 && trainers[1].pokemon.length == 5){
        htmlText = ""
        document.getElementById("showData").innerHTML = htmlText; 
        document.getElementById("gralDiv").hidden = true
        htmlText += '<div class="row container">'
        htmlText += '<div class="col-4 border page-hero d-flex align-items-center justify-content-center">'
        htmlText += '<div class="col-md-4 ">Trainer:<strong> ' + trainers[0].name + '</strong></div>'
        htmlText += '<div class="col-md-8 border">'
            for(i=0; i<trainers[0].pokemon.length; i++){
                htmlText += '<div><img src="' + trainers[0].pokemon[i].img + '">'+
                '<br><strong>Name: </strong>'+trainers[0].pokemon[i].name+
                '<br><strong>Type: </strong>'+ trainers[0].pokemon[i].type + 
                '<br><strong>Health: </strong>'+trainers[0].pokemon[i].health + 
                '<br><strong>Special Attack: </strong>'+ trainers[0].pokemon[i].specialAttack + '</div>'
            }
        htmlText += '</div></div>'
        htmlText += '<div class="col-4 align-self-center" id="resultsFight"><input type="button" value="Start Fight" onclick="fightPokemon()" id="StartFight"></div>'
        htmlText += '<div class="col-4 border page-hero d-flex align-items-center justify-content-center">'
        htmlText += '<div class="col-md-8 border">'
            for(i=0; i<trainers[1].pokemon.length; i++){
                htmlText += '<div><img src="' + trainers[1].pokemon[i].img + '">'+
                '<br><strong>Name: </strong>'+trainers[1].pokemon[i].name+
                '<br><strong>Type: </strong>'+ trainers[1].pokemon[i].type + 
                '<br><strong>Health: </strong>'+trainers[1].pokemon[i].health + 
                '<br><strong>Special Attack: </strong>'+ trainers[1].pokemon[i].specialAttack + '</div>'
            }
        htmlText += '</div>'
        htmlText += '<div class="col-md-4">Trainer:<strong> ' + trainers[1].name + '</strong></div>'
        htmlText += '</div></div></div>'
        document.getElementById("showData").innerHTML = htmlText; 
    }
    else{
        a = 5-trainers[0].pokemon.length; 
        b = 5- trainers[1].pokemon.length
        trainers[0].pokemon.length>trainers[1].pokemon.length ? alert("Is missing "+ b +" Pokemons to: " + trainers[1].name ) : alert("Is missing "+ a +" Pokemons to: " + trainers[0].name )
    }
}
       
var fightPokemon = () => {
    htmlText = ""
    document.getElementById("StartFight").hidden = true
    htmlText += '<div class="col ">'
    let c, d , e= ""; 
        for(i=0; i<5; i++){
            a = trainers[0].pokemon[i].health - trainers[1].pokemon[i].specialAttack
            b = trainers[1].pokemon[i].health - trainers[0].pokemon[i].specialAttack
                if(trainers[0].pokemon[i].health != trainers[1].pokemon[i].specialAttack || trainers[1].pokemon[i].health != trainers[0].pokemon[i].specialAttack ){
                    
                    if(trainers[0].pokemon[i].name == trainers[1].pokemon[i].name){
                        htmlText += '<div><p><strong>Draw</strong></p></div>'
                        e++
                    }else{
                        if(a>b){
                            htmlText += '<div><p><strong>Winner: </strong>' + trainers[0].pokemon[i].name + '</p></div>'
                            c++
                        }else{
                            htmlText += '<div><p><strong>Winner: </strong>' + trainers[1].pokemon[i].name + '</p></div>'
                            d++
                        }
                    }
                }else{
                    a = trainers[0].pokemon[i].health
                    b = trainers[1].pokemon[i].health
                    if(a>b){
                        htmlText += '<div><p><strong>Winner: </strong>' + trainers[0].pokemon[i].name + '</p></div>'
                        c++
                    }else{
                        htmlText += '<div><p><strong>Winner: </strong>' + trainers[1].pokemon[i].name + '</p></div>'
                        d++
                    }
                    if(a==b){
                        htmlText += '<div><p><strong>Draw</strong></p></div>'
                        e++
                    }
                }
                
        }

    if(c>d){
        htmlText += '<div><font size="6"><p>The Winner is:<strong><br> ' + trainers[0].name + '</strong></p></div>'
    }else{  
        htmlText += '<div><font size="6"><p>The Winner is:<strong><br> ' + trainers[1].name + '</strong></p></div>'
    }
    if(e>c){
        htmlText += '<div><font size="6"><p>Draw</p></div>'
    }
    htmlText += '<div class="col-4 align-self-center"><input type="button" value="Start Again" onclick="window.location.reload()" id="reloadPage"></div>'
    document.getElementById("resultsFight").innerHTML = htmlText; 
}
 