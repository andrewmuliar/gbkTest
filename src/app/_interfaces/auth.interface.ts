
export interface ILoginBody {
    email:string;
    password:string
}

export interface LoginDTO{
	token: string;
	expiredAt: number;
}

