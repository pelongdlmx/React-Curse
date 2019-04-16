**React Training Program: _Final Test_**
======
**Instructions**
-----------
With your new front-end knowledge, develop a React Application to search, save and show _Pokémon_ through a modern web-based application.

The application needs to provide the following three options to any user:

**Search**
* The application features a search box to search for _Pokémon_. The keyword the user enters needs to be queried against the complete list of _Pokémon_'s names. This functionality needs to cover the following possible outputs:
    * No matches: a message is displayed, letting the user know no matches were found.
    * 1-single match: one single _Pokémon_ matched the user query. In this case, the _Pokémon_ view is displayed to the user.
    * Multiple matches: two or more _Pokémon_ matched the user query. In this case, a _Pokémon_ results view is displayed to the user.
        * For this case, each _Pokémon_ retrieved in the list offers the option to go to the _Pokémon_ view of each retrieved match.
* Finally, each _Pokémon_ retrieved needs to display the following information:
    * Name
    * Number
    * Attack
    * Defense
    

**Save**

* Once the search function retrieves a match and the user enters into the _Pokémon_ view, the user has the option to save the _Pokémon_ in a *Trainer list*. This functionality needs to cover the following possible outputs:
    * _Pokémon_ is added: the _Pokémon_ is added to the *Trainer List*: the application needs to notify the user the _Pokémon_ was added successfully.
    * _Pokémon_ cannot be added: there are two cases in which new _Pokémon_ cannot be added to the *Trainer list*:
        * The *Trainer list* is full (6 _Pokémon_ are already there): the application needs to notify the user the _Pokémon_ was not added since it is already there.
        * The _Pokémon_ the user is trying to add is already added in the *Trainer list*: the application needs to notify the user the _Pokémon_ was not added due to a *Trainer list*'s number constraint.

**See all _Pokémon_**
* The application features an option to see the *Trainer list* of the user. This functionality needs to cover the following possible outputs:
    * *Trainer list* is empty: the application shows an empty list to the user.
    * _Pokémon_ previously added to the *Trainer list*: the application shows the list of _Pokémon_ the user has saved to his personal list. Each _Pokémon_ needs to feature an option to *Show* the _Pokémon_ information.

**Show Pokémon (_Pokémon View_)**

* The _See all Pokémon_ option features a sub-option to show the information of each _Pokémon_. This functionality needs to cover the following options:
    * Each _Pokémon_ is truly saved within the Application, which means, once a _Pokémon_ is saved to the *Trainer list*, there is no need to query the API.
    * Each _Pokémon_ shows the following information, stored during the _Save Pokémon_ stage:
        * Name
        * Number
        * Attack
        * Defense
    * Each _Pokémon_ has an option to _Mark as Favorite_, which is a unique state only 1 _Pokémon_ can have. This functionality needs to cover the following constraints:
        * Only 1 _Pokémon_ can be marked as favorite.
        * The _Favorite_ state is shown as part of the design of the application
        * If a new _Pokémon_ gets marked as favorite, the previous one looses  this state.

**Constraints**
-----------
* The application needs to follow the design shown in the mockups the React Team is going to provide.
* The application needs to consume information from the _https://pokeapi.co/api/v2/pokemon/_ API, similar to previous practices.
* The application should not use any plugin, extension or code to fulfill easily any of the requirements.
* The application needs to be uploaded to GitHub.
    * The application needs to run from any PC, once the GitHub project is cloned locally.
* The application needs to cover **every single requirement listed under the Instructions area**.
* The application needs to use _ReactJS_, _Redux_ and _ES6_ as the core.
* Your code needs to be shared/sent to Alejandro Avalos, Dorian Morones and Luis Duran no later than 04/22, 11:59 PM CDT.

**Recommendations**
-----------
* Read the instructions **carefully**.
* Feel free to use any _CSS Framework_ to fulfill the design part.
* If you have a specific question, make sure to ask to other members: collaborating is key when developing, but please **do it _wisely_ and in the _right moment_ / _forums_**.