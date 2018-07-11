




function Model() {
    var self = this;

    self.FactorySelect = new ListasFactory();

    self.lFilms = ko.observableArray([]);

    self.selectedFilm = ko.observable();


    self.Load = function () {
        self.lFilms([]);
        self.FactorySelect.getFilms().done(function (result) {
            var response = new imdbResponse(result);
            self.lFilms(response.lFilms());
        });
    }

    self.Load();

}

$(function () {

    ko.applyBindings(new Model());

});