

function Model(){
    var self = this;

    self.texto = ko.observable();
    self.validaTexto = ko.computed(function () {
        var intRegex = /[0-9 -()+]+$/;
        return (intRegex.test(self.texto())) ? 'is-invalid' : '';
    });

}

$(function () {
    ko.applyBindings(new Model());
});