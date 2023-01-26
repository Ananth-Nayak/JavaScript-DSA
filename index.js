class Queue{
constructor(){
    this.items={}
    this.rear=0
    this.front=0
}

enqueue(element){
    this.items[this.rear]=element
    this.rear++
}

dequeue(){
    const item = this.items[this.front]
     if(!item){
        return
     }

    delete this.items[this.front]
    this.front++
    return item
}

isEmty(){
    return this.rear-this.front===0
}

peek(){
    if(!this.isEmty()){
    return this.items[this.front]
    }
    return null
}

size(){
    
    return this.rear-this.front
    
    return null
}

print(){
    console.log(this.items)
}
}

const queue=new Queue()


queue.enqueue("data1")
queue.dequeue()
queue.dequeue()
queue.enqueue("data1")
queue.dequeue()

queue.print()

