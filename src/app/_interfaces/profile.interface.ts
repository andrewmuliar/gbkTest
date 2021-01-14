export interface IProfile {
	country: string;
	city: string;
	firstName: string;
	lastName: string;
	email: string;
	image: string;
	lat: number;
	lon: number;
	gender: string;
	createdAt: string;
	updatedAt: string;
}

export interface ProfileDataToSend {
	firstName: string;
	lastName: string;
	gender: string;
	country: string;
	city: string;
}