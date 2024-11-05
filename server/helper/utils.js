const emptyOrRows = (result) => {
//    if (!result) return []
//    return result.rows;
    if (!result) {
        return [];
    } else {
        return result.rows;
    }
}

export {emptyOrRows};