import mongoose from 'mongoose';
import gradesModel from './gradesModel.js'
import dotenv from 'dotenv';
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.cors_origin = process.env.CORS_ORIGIN;
db.gradesModel = gradesModel(mongoose);

export { db };
