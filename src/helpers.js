//This file should export two array helper functions:
//choice(items): returns a randomly selected item from array of items

function choice(items){
    //get random index value
    const randomIndex = Math.floor(Math.random() * items.length);

    //get random item
    const randomItem = items[randomIndex];

    //return randomItem
    return randomItem;
}

//remove(items, item): removes the first matching item from items,
// if item exists, and returns it. Otherwise returns undefined.

function remove(items, item){
    for(let item = 0 ; item< items.length ; item++){
        if (items[item] === item){
            return[...items.slice(0,item) , ...items.slice(item+1)];
        }
    }
}
//JS spread opearator(...) allows us to quickly copy all or a part
//of an array or object into another array or object.

export{choice, remove};

