/*Objects*****************************************************************************/
/*Empty Object Declaration*/
var person = {};

/*Object Example*/
var countryInfo = {
    name: 'Mexico',
    continent: 'America',
    currency: 'Peso'
};
console.log(countryInfo);

/*Object Example 2 Different Types*/
var countryFlag = {
    name: 'Mexico',
    symbol: true,
    colors: ['green','white','red']
};
console.log(countryFlag);

/*Object Example 3 - Complex objects*/
var country = {
    countryInfo: {
        name: 'Mexico',
        continent: 'America',
        currency: 'Peso'
    },
    countryFlag: {
        symbol: true,
        colors: ['green','white','red']
    }
};
console.log(country);

/*Objects Basic Operations*************************************************************/
/*Add element to existing object*/
var countryInfo = {
    name: 'Mexico',
    continent: 'America',
    currency: 'Peso',
    language: null
};
console.log(countryInfo);
countryInfo.mainLanguage = 'Spanish';
console.log(countryInfo);

/*Remove element from object*/
var countryInfo = {
    name: 'Mexico',
    continent: 'America',
    currency: 'Peso'
};
delete countryInfo.currency;
console.log(countryInfo);

/*Accessing elements of an object - Example 1*/
var countryInfo = {
    name: 'Mexico',
    continent: 'America',
    currency: 'Peso'
};
console.log(countryInfo.currency);

/*Accessing all elements of a complex object - Example 2*/
var country = {
    countryInfo: {
        name: 'Mexico',
        continent: 'America',
        currency: 'Peso'
    },
    countryFlag: {
        name: 'Mexico',
        symbol: true,
        colors: ['green','white','red']
    }
};

console.log('Name:' + country.countryInfo.name + '\n');
console.log('Continent:' + country.countryInfo.continent + '\n');
console.log('Currency:' + country.countryInfo.currency + '\n');
console.log('Flag colors:\n');
for(var i=0;i<country.countryFlag.colors.length;i++){
    console.log('> ' + country.countryFlag.colors[i] + '\n');
}

/*Recursion => "Recursion is simply when a function calls itself"*/
/*Exam - Print all family members*/
log = '';

function iterateTaxonomy(familyMember){
    var name = familyMember.firstname + ' ' +  familyMember.lastname;
    var sex = familyMember.sex + ' ' +  familyMember.sex;
    var partnerName = familyMember.partner ? familyMember.partner.firstname + ' ' + familyMember.partner.lastname : 'N/A';

    log += name + '\t' + sex + '\t' + partnerName + '\n';
    
	if(familyMember.children.length > 0){
		for(var i=0;i<familyMember.children.length;i++){
			iterateTaxonomy(familyMember.children[i]);
		}
	}
}
var ur = "https://pokeapi.co/api/v2/pokemon/"

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        var family = myJson.family;
        if(family.children.length > 0)
			iterateTaxonomy(family);
    }
);

console.log(log);

/***Homework: Develop a simple interface that covers the following cases (out of: https://www.nxp.com/webapp/taxonomyservice/productTaxonomy.sp?root=1&depth=all):
>Provide a High-level Page CodeID
>Retrieves the information for that node, and all its children living underneath:
    -Example: RF_HOME
    -Retrieves in a friendly format: 
        <a href="$AUTOLINK[988197086292719029:W]">Control Circuits</a>
            <a href="$AUTOLINK[394072752945378326:W]">Advanced Doherty Alignment Module (ADAM)</a>
            ...
*/