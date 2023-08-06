import { Deserializable } from './deserialize.model';

export class Branch implements Deserializable {
	id?: number ;
	name_en?: string = '';
	name_ar?: string = '';
	address1?: string = '';
	address2?: string = '';
	city_id?: number ;
	phone?: string = '';
	branch_category?: string = '';
	branch_capacity?: number ;
	startup_date?: Date;
	email?: string = '';
	lat?: number ;
	lng?: number ;
	location_type?: string = '';

	deserialize(input: any): this {
		return Object.assign(this, input);
	}
}
