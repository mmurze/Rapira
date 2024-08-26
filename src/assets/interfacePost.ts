interface Comment {
	img: string;
	name: string;
	comment: string;
	date: string;
}

export interface InterfacePost {
	img: string;
	title: string;
	description: string;
	mini_description: string;
	date: string;
	timeForRead: string | number;
	filters: string[];
	comments: Comment[];
}
