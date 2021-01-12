export interface ResultSuccess {
	token: string;
	expiredAt: number;
}

export interface ResultError{
    field:string,
    message:string
}

export interface ILogin {
	code: string;
	status: string;
	message: string;
	result: ResultSuccess|ResultError;
}