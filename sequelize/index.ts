import "dotenv/config";
import {Sequelize} from "sequelize-typescript";
import dotenv from 'dotenv';
import { settings } from "./config/config";

dotenv.config();
const env= 'development'
const config= settings[env];


const connString= `${config.dialect}://${config.username}:${config.password}@${config.host}/${config.database}`;
const sequelize = new Sequelize(connString,{models:[]})

export default sequelize;