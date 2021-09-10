import { Document } from 'mongoose';


export interface Team extends Document {
    id: string;
    name: string;
    pokemon: [];
} 