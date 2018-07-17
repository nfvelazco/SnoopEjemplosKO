





function EnableBindingModel() {

    var self = this;
    self.FactoryFilms = new ListasFactory();
    self.lFilms = ko.observableArray();

    self.loadFilms = function () {
        self.lFilms([]);
        self.FactoryFilms.getFilms().done(function (result) {
            var response = new imdbResponse(result);
            self.lFilms(response.lFilms());
        });

    }

    self.LoadVM = function () {
        self.loadFilms();
    }

    self.LoadVM();

}



$(function () {

    ko.applyBindings(new EnableBindingModel());

});