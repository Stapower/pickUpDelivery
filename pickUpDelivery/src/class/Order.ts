import { Viaje } from './Viaje';
import { Customer } from './Customer';
import { Animal } from './animal';
export class Order {

	animales : Array<Animal>;
	customer : Customer;
	viaje : Viaje;

	numero : Number;
	precio : Number;
	
}