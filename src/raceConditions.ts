const state = {
    isLoading: false,
    items: []
}

function fetchItems(timeToDelay: number,
items: any[]) {
    state.isLoading = true;
    console.log('fetchItems:', state);
    fetch(timeToDelay, items).then(updateState);
}

function updateState(items: any[]){
    state.isLoading = false;
    state.items = items;
    console.log('updateState:', state);
}

function fetch(
    timeToDelay: number,
    items: any[]
): Promise<any[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, timeToDelay);
    });
}

fetchItems(10, [1,2]);
fetchItems(20, [3,4]);


//This currently broke with 3 errors.