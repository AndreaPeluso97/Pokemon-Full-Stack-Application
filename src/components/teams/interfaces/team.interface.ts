import { Document } from 'mongoose';
 

export interface Team extends Document {
    _id: string;
    name: string;
    pokemon: [];
}