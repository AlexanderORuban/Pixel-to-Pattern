import { Patterns } from "./patterns.js";

export const getAllPatterns = async() => {
    try{
        const patterns = await Patterns.findAll({order: [['date', 'DESC']]});
        return patterns;
    } catch(err) {
        console.error("Error fetching patterns:", err);
        throw new Error("Error collecting all patterns in db");
    }
};

export const getPattern = async(ID) => {
    try{
        const pattern = await Patterns.findByPk(ID);
        return pattern;
    } catch (err) {
        console.error(`Error finding pattern with ID: ${ID}`);
        throw new Error(`Error finding pattern with ID: ${ID}`);
    }
}

// CREATE

export const postPattern = async (pattern) => {
    try {
        // expect JSON object from req body (pattern) with this format:
        // { pattern_name: "", pattern_info: {}, description: ""}

        const dbPattern = await Patterns.create(pattern);
        return dbPattern.pattern_ID;
    } catch (err) {
        console.error("post Pattern error: ", err);
        throw new Error('Failed to post pattern to database');
    }
}