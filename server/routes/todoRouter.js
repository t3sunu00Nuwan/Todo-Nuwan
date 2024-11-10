import { pool } from '../helper/db.js';
import { Router } from 'express';
import { auth } from '../helper/auth.js';
import { getTasks, postTask } from '../controllers/TaskController.js';

const router = Router();

// Get all tasks
router.get('/', getTasks);

// Post a new task
router.post('/create', postTask);

// Delete a task by ID
router.delete('/delete/:id', (req, res) => {
    
    const id = parseInt(req.params.id);

    pool.query('delete from task where id = $1' , 
        [id] ,
        (error , result) => {
            if (error) {
                return res.status(500).json({error: error.message})
            }

            return res.status(200).json({id: id})
        }
    )
});


export default router;
