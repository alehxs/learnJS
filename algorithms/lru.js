class LRU {
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map();

    }

    getItem(key){
        const item = this.cache.get(key);

        if (item){
            this.cache.delete(key);
            this.cache.set(key,item);
        }
        return item;
    }

    putItem(key, val) {
        if (this.cache.has(key)){
            this.cache.delete(key);
        }
        else if (this.cache.size == this.capacity){
            this.cache.delete(this.oldestItem)
        }

        this.cache.set(key,val);
    }

    get oldestItem() {
        return this.cache.keys().next().value;
    }
}

const cache = new LRU(5);
cache.putItem('a',1);
cache.getItem('a');