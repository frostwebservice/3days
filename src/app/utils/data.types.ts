export interface TabItem {
	icon: string;
	label: string;
	id: string;
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
export interface TabOption {
	label: string;
	value: string;
}