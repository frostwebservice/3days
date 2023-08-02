import { Deserializable } from './deserialize.model';

export class User implements Deserializable {
	id?: number ;
	email?: string = '';
	mobile?: string = '';
	national_id?: string = '';
	preferred_language?: string = '';
	remember_token?: string= '';
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
	gender?: string = '';
	channel?: string = '';
	photo?: string = '';
	member_since?: void;
	referred_by?: void ;
	arabic_name?: string = '';
	english_name?: string = '';
	first_name?: string = '';
	last_name?: string = '';
	dob?: Date;
	organization_id?: void;
	member_type?: string = '';
	client_id?: number;
	default_branch?: number;
	parent_mobile?: string="";
	parent_name?: string="";
	referral_code?: string="";
	fcm_token?: string="";
	token?: string="";
	media?: [];

	deserialize(input: any): this {
		return Object.assign(this, input);
	}

	get avatarName(): string {
		const names = this.english_name.split(' ');
		if (names.length > 1) {
			return names[0][0] + names[1][0];
		} else {
			return names[0][0];
		}
	}
}

export class Account extends User {
	is_seat: boolean = false;
	seat_count: number = 1;
}
