import { selectAllTasks, insertTask } from "../models/Task.js";
import { emptyOrRows } from "../helper/utils.js";



const getTasks = async (req, res, next) => {
    try {
        const result = await selectAllTasks();
        return res.status(200).json(emptyOrRows(result));
    } catch (error) {
        return next(error);
    }
}



const postTask = async(req, res, next) => {
    try {
        if (!req.body.description || req.body.description.length ===0) {
            const error = new Error('Invalid description for task');
            error.statusCode = 400;
            return res.status(400).json({ error: error.message });
        }
        const result = await insertTask(req.body.description);
        return res.status(200).json({id: result.rows[0].id});
    } catch (error) {
        return next(error);

    }

}



export { getTasks, postTask };