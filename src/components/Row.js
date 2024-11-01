import react from 'react';

export default function Row({item, deleteTask}) {
    return (
        <li key={item.id}>{item.description} 
        <button className = 'delete-button' onClick ={() => props.deleteTask(props.id) }> Delete</button>
        </li>
    )
    }