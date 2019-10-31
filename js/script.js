var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//import * as $ from "jquery";
var LocationClass = /** @class */ (function () {
    function LocationClass(name, adress, zip, city, img) {
        this.name = name;
        this.adress = adress;
        this.zip = zip;
        this.city = city;
        this.img = img;
    }
    LocationClass.prototype.display = function () {
        $('#locationdeck').append("\n\t\t\t\n\t\t\t<div class=\"card\">\n  \t\t\t<img src=" + this.img + " class=\"card-img-top\" alt=\"...\">\n  \t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h5 class=\"card-title\">" + this.name + "</h5>\n          <p class=\"card-text\">adress: " + this.adress + "</p>\n          <p class=\"card-text\">zip: " + this.zip + "</p>\n          <p class=\"card-text\">city: " + this.city + "</p>\n  \t\t\t</div>\n\t\t\t</div>\n    ");
    };
    return LocationClass;
}());
var RestaurantClass = /** @class */ (function (_super) {
    __extends(RestaurantClass, _super);
    function RestaurantClass(name, adress, zip, city, img, type, webURL, telephone) {
        var _this = _super.call(this, name, adress, zip, city, img) || this;
        _this.type = type;
        _this.webURL = webURL;
        _this.telephone = telephone;
        return _this;
    }
    RestaurantClass.prototype.display = function () {
        $('#restaurantsdeck').append("\n\t\t\t<div class=\"card\">\n\t\t\t\t<img src=" + this.img + " class=\"card-img-top\" alt=\"...\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h3 class=\"card-title\">" + this.name + "</h3>\n\t\t\t\t\t<h1 class=\"card-text\">" + this.type + "</h3>\n\t\t\t\t\t<p class=\"card-text\">adress: " + this.adress + "</p>\n\t\t\t\t\t<p class=\"card-text\">zip: " + this.zip + "</p>\n\t\t\t\t\t<p class=\"card-text\">city: " + this.city + "</p>\n\t\t\t\t\t<p class=\"card-text\">telephone: " + this.city + "</p>\n\t\t\t\t\t<a href=\"" + this.webURL + "\" class=\"card-link\">Website</a>\n\t\t\t\t</div>\n\t\t\t</div>\n    ");
    };
    return RestaurantClass;
}(LocationClass));
var EventClass = /** @class */ (function (_super) {
    __extends(EventClass, _super);
    function EventClass(name, adress, zip, city, img, type, webURL, price, date, time) {
        var _this = _super.call(this, name, adress, zip, city, img) || this;
        _this.type = type;
        _this.webURL = webURL;
        _this.price = price;
        _this.date = date;
        _this.time = time;
        return _this;
    }
    EventClass.prototype.display = function () {
        $('#eventdeck').append("\n\t\t\t<div class=\"card\">\n\t\t\t\t<img src=" + this.img + " class=\"card-img-top\" alt=\"...\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h3 class=\"card-title\">" + this.name + "</h3>\n\t\t\t\t\t<h1 class=\"card-text\">" + this.type + "</h3>\n\t\t\t\t\t<p class=\"card-text\">adress: " + this.adress + "</p>\n\t\t\t\t\t<p class=\"card-text\">zip: " + this.zip + "</p>\n\t\t\t\t\t<p class=\"card-text\">city: " + this.city + "</p>\n\t\t\t\t\t<p class=\"card-text\">telephone: " + this.city + "</p>\n\t\t\t\t\t<a href=\"" + this.webURL + "\" class=\"card-link\">Website</a>\n\t\t\t\t</div>\n\t\t\t</div>\n    ");
    };
    return EventClass;
}(LocationClass));
