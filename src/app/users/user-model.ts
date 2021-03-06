/**
 * User is a data-structure that holds an individual
 * user
 */
import {Address} from '../shared/models/address-model';
import {Company} from '../companies/company-model';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  company: Company;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.username = obj && obj.username || null;
    this.email = obj && obj.email || null;
    this.address = obj && obj.address || null;
    this.company = obj && obj.company || null;
  }
}
