/* queue atau antrean ,mengenakan konsep FIFO (first in - first out)
*/
function createQueue(){

    let que = []
    return {
        enqueue : function(value){
             que.unshift(value)
        },
        dequeue : function(){
             que.pop()
        },
        peek : function(){
            return que[que.length - 1]
        }
    }
}

let antrian = createQueue()

antrian.enqueue('hallo word')
antrian.enqueue('coba queue')
antrian.enqueue('test')

antrian.dequeue()
antrian.dequeue()

console.log(antrian.peek()) 