export interface ICategory{
    id: number;
    titles: string;
}

export interface IPost{
    id: number;
    titles: string;
    category: {id: number};
    createdAt: string;
}