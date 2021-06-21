export interface User {
    name: string;
    status: string;
    picture_data: {
        src: string;
        alt: string;
    },
    messages: Message[];
}

export interface Message {
    time: number;
    content: string;
    type: 'sent' | 'received';
}