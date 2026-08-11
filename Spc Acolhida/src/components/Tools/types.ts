export interface Tool {
    id: number;
    title: string;
    description: string;
    image: string;
    preview: string;
    category: string;
    alternatives?: string[];
}