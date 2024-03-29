const EventEmitter = require('events');



class School extends EventEmitter{
     startP(){
        console.log('school file is starting');
    
        setTimeout(() => {
            this.emit('bellrings', {
                value1: 'value 1 is work and',
                value2: 'value 2 is work',
            });
        }, 2000);
    }
}



module.exports=School;