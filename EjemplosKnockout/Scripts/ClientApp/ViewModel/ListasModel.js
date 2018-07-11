



function Model() {
    var self = this;

    self.Factory = new ListasFactory();

    self.lFilms = ko.observableArray([]);
    self.isTable = ko.observable(true);

    self.loadFilms = function () {
        self.lFilms([]);
        self.Factory.getFilms().done(function (result) {
            var response = new imdbResponse(result);
            self.lFilms(response.lFilms());
        });
    }

    self.btnListaTable = function () {
        self.isTable(true);
    }
    self.btnListaSinTable = function () {
        self.isTable(false);
    }

    self.Load = function () {
        self.loadFilms();
    }

    self.Load();
}


$(function () {
    ko.applyBindings(new Model());
});