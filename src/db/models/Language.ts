import { model, Schema } from "mongoose";

export interface LangInt {
    guildId: string,
    language: string,
    fullLang: string
}

export const Language = new Schema({
    guildId: String,
    language: String,
    fullLang: String
});

export default model<LangInt>("language", Language);