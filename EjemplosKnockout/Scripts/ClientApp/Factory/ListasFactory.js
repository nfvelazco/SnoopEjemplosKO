


function ListasFactory() {

    var self = this;

    self.getFilms = function () {
        return $.ajax({
            url: 'http://www.omdbapi.com/?s=Wars&page=1&apikey=eb186c09'
        });
    }


}