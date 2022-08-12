export interface Articles{
    id: number;
    title: string;
    description: string;
    cover_image: string;
    name: string;
    profile_image: string;
    social_image: string;
}

export interface ArticlesState{
    list: Articles[];
    error: string;
    isSuccess: boolean;
    isLoading: boolean;
}