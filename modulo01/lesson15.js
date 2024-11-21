class Node {
    constructor(data){
        this.data = data
        this.next = null
        this.previous = null
    }
}

class DoublyLinkendList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.size++
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites')
        }

        let newNode = new Node(data)
        let current = this.head

        if (index === 0){
            if(this.head === null){
                this.head = newNode
                this.tail = newNode
            } else {
                newNode.next = this.head
                this.head.previous = newNode
                this.head = newNode
            }
        } else if(index === this.size){
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }

            newNode.next = current
            newNode.previous = current.previous
            current.previous.next = newNode
        }

        this.size++
    }

    removeAt(index) {
        if( index < 0 || index >= this.size){
            return console.log("Index fora do limites")
        }

        let current = this.head

        if(index === 0){
            this.head = this.head.next

            if(this.head !== null){
                this.head.previous = null
            } else {
                this.tail = null
            }
        } else if (index === this.size -1){
            this.tail = this.tail.previous
            this.tail.next = null
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }    

            current.previous.next = current.next
            current.net.previous = current.previous
        }

        this.size--

    }

    getData(index){
        if(index < 0 || index >= this.size){
            return console.log("Index fora dos limites")
        }

        let current = this.head

        for(let i = 0; i < index; i++){
            current = current.next
        }

        return current.data
    }
    print(){
        let current = this.head
        let resut = []

        while(current !== null){
            resut.push(current.data)
            current = current.net
        }

        console.log(resut.join(' <=>'))
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size ===0
    }

}

let lista = new DoublyLinkendList()

lista.add(10)
lista.add(20)
lista.add(30)
lista.add(40)
lista.add(50)

lista.print()