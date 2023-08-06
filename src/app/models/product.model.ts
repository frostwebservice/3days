import { Deserializable } from './deserialize.model';

export class Product implements Deserializable {
	english_name?: string = "";
	arabic_name?: string = "";
	banner?: string = "";
	arabic_description?: string = "";
	english_description?: string = "";
	terms_conditions?: string = "";
	number_of_bookings?: number = 10;
	booking_period?: string = "";
	subscription_start_after_days?: number;
	no_of_allowed_freeze_times?: number;
	price?: number;
	type?: string = "session";
	period?: number;
	period_unit?: string = "month";
	session_capacity?: null;
	maximum_no_freeze_days?: number = 10;
	advanced_amount?: 1200;
	period_amount?: number = 0;
	id?: number;
	arabic_period_unit?:string = "";
	arabic_booking_period?:string = "";
	vat?: number;
	amount_after_vat?:  number;

	deserialize(input: any): this {
		return Object.assign(this, input);
	}
}
