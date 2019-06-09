export class AddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number,
    lng: number
  };

  constructor(obj?: any) {
    this.street = obj && obj.street || null;
    this.suite = obj && obj.suite || null;
    this.city = obj && obj.city || null;
    this.zipcode = obj && obj.zipcode || null;
    this.geo = obj && obj.geo || { lat: 0, lng: 0 };
  }
}
