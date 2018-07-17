

function Film(pObj) {
    var self = this;
    var iObj = {
        Poster: '',
        Title: '',
        Type: '',
        Year: '',
        imdbID: ''
    }
    $.extend(iObj, pObj);

    self.Poster = ko.observable(iObj.Poster);
    self.Title = ko.observable(iObj.Title);
    self.Type = ko.observable(iObj.Type);
    self.Year = ko.observable(iObj.Year);
    self.imdbID = ko.observable(iObj.imdbID);
    self.enabled = ko.observable(true);
}

/*
Entiendase que en este ejemplo se usa la api de imdb
por lo cual hay un DTO de la respuesta que posee una lista de films
*/

function imdbResponse(pObj) {
    var self = this;
    var iObj = {
        Response: '',
        Search: [],
        totalResults: 0
    }
    $.extend(iObj, pObj);

    self.Response = ko.observable(iObj.Response);
    //Notar que aqui encapsulo el nombre de la lista Search por lFilms
    self.lFilms = ko.observableArray([]);
    $.each(iObj.Search, function (i, oFilm) {
        self.lFilms.push(new Film(oFilm));
    });
    self.totalResults = ko.observable(iObj.totalResults);
}