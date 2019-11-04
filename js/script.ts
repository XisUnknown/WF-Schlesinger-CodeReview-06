//import * as $ from "jquery";
class LocationClass {
	name: string;
	adress: string;
	zip: number;
	city: string;
	img: string;
	constructor(name: string, adress: string, zip: number, city: string, img: string) {
		this.name = name;
		this.adress = adress;
		this.zip = zip;
		this.city = city;
		this.img = img;
	}
	display(): void {
		$('#locationdeck').append(`
			<div class="card">
  			<img src=${this.img} class="card-img-top img-thumbnail" alt="...">
  			<div class="card-body">
					<h5 class="card-title">${this.name}</h5>
          <p class="card-text">adress: ${this.adress}</p>
          <p class="card-text">zip: ${this.zip}</p>
          <p class="card-text">city: ${this.city}</p>
  			</div>
			</div>
    `);
	}
}
class RestaurantClass extends LocationClass {
	//nameRestaurant: string;
	type: string;
	webURL: string;
	telephone: string;
	constructor(
		name: string,
		type: string,
		adress: string,
		zip: number,
		city: string,
		img: string,
		telephone: string,
		webURL: string
	) {
		super(name, adress, zip, city, img);
		this.type = type;
		this.webURL = webURL;
		this.telephone = telephone;
	}
	display(): void {
		$('#restaurantsdeck').append(`
			<div class="card">
				<img src=${this.img} class="card-img-top img-thumbnail" alt="...">
				<div class="card-body">
					<h3 class="card-title">${this.name}</h3>
					<h1 class="card-text">${this.type}</h3>
					<p class="card-text">adress: ${this.adress}</p>
					<p class="card-text">zip: ${this.zip}</p>
					<p class="card-text">city: ${this.city}</p>
					<p class="card-text">telephone: ${this.telephone}</p>
					<a href="${this.webURL}" class="card-link">Website</a>
				</div>
			</div>
    `);
	}
}
class EventClass extends LocationClass {
	type: string;
	webURL: string;
	price: string;
	date: string;
	time: string;
	constructor(
		name: string,
		type: string,
		adress: string,
		zip: number,
		city: string,
		img: string,
		webURL: string,
		price: string,
		date: string,
		time: string
	) {
		super(name, adress, zip, city, img);
		this.type = type;
		this.webURL = webURL;
		this.price = price;
		this.date = date;
		this.time = time;
	}
	display(): void {
		$('#eventdeck').append(`
			<div class="card">
				<img src=${this.img} class="card-img-top img-thumbnail" alt="...">
				<div class="card-body">
					<h3 class="card-title">${this.name}</h3>
					<h1 class="card-text">${this.type}</h3>
					<p class="card-text">adress: ${this.adress}</p>
					<p class="card-text">zip: ${this.zip}</p>
					<p class="card-text">city: ${this.city}</p>
					<a href="${this.webURL}" class="card-link">Website</a>
					<p class="card-text">price: ${this.price}</p>
					<p class="card-text">date: ${this.date}</p>
					<p class="card-text">time: ${this.time}</p>
				</div>
			</div>
    `);
	}
}
