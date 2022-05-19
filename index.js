let parent = {

    name: "Rahul",
    designation: "CSE",
    id: 111,
    showDetails: function() {
        console.log(this.name, this.designation, this.id);
    }
}

let child = {

    name: "Karan",
    designation: "IT",
    id: 112,

}

//1
parent.showDetails.call(child);


//2

let pro = Object.create(child);

console.log(pro.__proto__);
console.log(pro.__proto__.__proto__);
console.log(pro.__proto__.__proto__.__proto__);


//3

array = [2, 3, 4, 5, 6];
let sum = array.reduce((sum, car) => sum + car, 0);
console.log(sum);

//4

function func() {
    console.log(Object.keys(child));
}
func();