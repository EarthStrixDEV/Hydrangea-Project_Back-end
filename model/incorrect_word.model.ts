import {sequelize} from "../database/db"
import { DataType } from "sequelize-typescript"

const incorrect_word = sequelize.define('incorrect_word',{
    id: {
        type: DataType.UUID,
        primaryKey: true,
        defaultValue: DataType.UUIDV4
    },
    correct_word_id: {
        type: DataType.UUID,
        allowNull: false
    },
    word: {
        type: DataType.TEXT,
        allowNull: false
    },
    updated_at: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    },
    created_at: {
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW
    }}, {
        timestamps: false
    }
)

export {incorrect_word}