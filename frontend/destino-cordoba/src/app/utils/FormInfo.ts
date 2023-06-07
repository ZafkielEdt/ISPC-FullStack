export interface FormInfo {
    content: 'user' | 'destination' | 'city' | 'province' | string;
    type: 'create' | 'update' | string;
}