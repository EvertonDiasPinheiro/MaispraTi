class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
        } else {
            
        }
    }
}