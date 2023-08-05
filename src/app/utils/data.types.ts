export interface TabItem {
	icon: string;
	label: string;
	id: string;
	passed:boolean;
}
export interface ClubItem {
	name: string;
	address: string;
}
export interface SubscriptionItem {
	id:Number;
	cycle: string;
	price: Number;
	description: string;
	currency: string;
	_per: string;
}
export interface PersonalTrainingItem {
	id:Number;
	shares: string;
	_per: string;
	price: Number;
	description: string;
	currency: string;
}
export interface Member {
	id: number;
	name: string;
}
export interface Club {
	id: number;
	name: string;
	address: string;
	email: string;
	launch_date: string;
	capacity: number;
	branch:string;
	type:string;
}
export interface Branch {
	id: number;
	name: string;
	address: string;
	email: string;
	launch_date: string;
	capacity: number;
	branch:string;
	type:string;
}
export interface Notification {
	id:number;
	icon_class: string;
	content: string;
	launch_time: string;
}
export interface Invoice {
	id:number;
	total_price: number;
	tax: number;
	discount: number;
	item: string;
	status: string;
	method: string;
	created_at: string;
}
export interface SubscriptionSession {
	id:number;
	title: string;
	start_date:string;
	expire_date:string;
	price:number;
	status:boolean;
	banner:string;
}
export interface TimeSession {
	id:number;
	class_name:string;
	trainer_name:string;
	branch_name:string;
	time:string;
	count: number;
	photo: string;
}
export interface AppointmentItem {
	id:number;
	class_name:string;
	trainer_name:string;
	date:string;
	time:string;
	status: string;
	banner: string;
}