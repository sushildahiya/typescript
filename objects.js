let obj = {
  a: 25,
  b: "2342",
  c: {
    date: new Date(),
    name1: "Sushil",
  },
};

const {date,name1}= obj.c
console.log(date," ", name1)
const a = Object.isFrozen(obj)
 Object.defineProperty(obj.c,"name1",{writable:false })
obj.c.name1="Sudsfshil"
console.log(obj)

