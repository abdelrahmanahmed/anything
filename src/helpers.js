const getRandomCategory = (selectedCategory, currentCategory) => {
    let output;
    let randomIndex;
    while (true) {
        randomIndex = Math.floor(Math.random() * Math.floor(selectedCategory.length));
        if (JSON.stringify(selectedCategory[randomIndex]) !== JSON.stringify(currentCategory)) {
            output = selectedCategory[randomIndex];
            break;
        }
    }
    return output;
}

export {
    getRandomCategory
}