
const School= require('./school');
const school=new School();
school.on('bellrings', ({ value1, value2 }) => {
    console.log(`result : ${value1} ${value2}`);
});

school.startP();
