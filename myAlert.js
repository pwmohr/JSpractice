// Super important comment
class Rectangle {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }

    get area() {
        return this.height * this.width;
    }

    get perimeter() {
        return this.height * 2 + this.width * 2;
    }

    rotate90() {
        let temp = this.height;
        this.height = this.width;
        this.width = temp;
    }
}

function main() {
    let r = new Rectangle(2, 5);

    r.height = 6;
    console.log("Height is: ", r.height);
    console.log("Width is: ", r.width);
    console.log("Area is: ", r.area);
    console.log("Perimeter is: ", r.perimeter);

    console.log("Rotate!");
    r.rotate90();
    console.log("Height is: ", r.height);
    console.log("Width is: ", r.width);
    console.log("Area is: ", r.area);
    console.log("Perimeter is: ", r.perimeter);
}

function myAlert() {
    alert("How are you?");
}

function showPicture() {
    document.getElementById("PictureGoesHere").innerHTML = '<img src="Angry Seas.jpg"/>';
}
