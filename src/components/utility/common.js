const addToDb = (id, key) => {
localStorage.setItem(id, JSON.stringify(key));
    
}


const getDataFromLocalStorage = (id) => {
    let readTime;
    const storedReadTime = localStorage.getItem(id);
    
    if (storedReadTime) {
        readTime = JSON.parse(storedReadTime);
    }

    return readTime;
}

export { addToDb, getDataFromLocalStorage };