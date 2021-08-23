/*********__TASK 1, 2, 4 and 5__*********/
class Course {  
    #price;

    set price(coursePrice) {
        if (coursePrice < 0) {
            alert("The price can't be negative.!");
            return 0;
        }
        else {
            this.#price = coursePrice;
        }
    }

    get price() {
        return `₹ ${this.#price}`;
    }
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this.price = price;
    }

    lengthForPrice() {
        return this.length/this.price;
    }

    courseSummary() {
        console.log(`The ${this.title} has a duration of ${this.length} hours and can be purchased for only ₹${this.price}`);
    }
}

course1 = new Course('JavaScript Course', 50, 500);
course2 = new Course('React Course', 45, 450);

console.log(course1);
console.log(course2);

console.log(course1.lengthForPrice(), course2.lengthForPrice());
console.log(course1.courseSummary(), course2.courseSummary());


/*********__TASK 3__*********/
class PracticalCourse extends Course {
    constructor(title, length, price, exercises) {
        super(title, length, price);
        this.numOfExercises = exercises;
    }
}

class TheoreticalCourse extends Course {
    constructor(title, length, price) {
        super(title, length, price);
    }

    publish() {
        console.log(`The Theoretical Course ${this.title} has been published.!`);
    }
}

practicalCourse = new PracticalCourse('NodeJS', 30, 300, 25);
theoryCourse = new TheoreticalCourse('Psychology', 20, 200);

console.log(practicalCourse, practicalCourse.lengthForPrice(), practicalCourse.courseSummary());
console.log(theoryCourse, theoryCourse.lengthForPrice(), theoryCourse.courseSummary(), theoryCourse.publish());