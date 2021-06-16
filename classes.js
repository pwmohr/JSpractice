class Rectangle {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }

    get area() {
        return this.height * this.width;
    }

    rotate90() {
        let temp = this.height;
        this.height = this.width;
        this.width = temp;
    }
}

function main() {
    let r = new Rectangle(2,5);

    console.log("r's height is ", r.height);
    console.log("r's width is ", r.width);
    console.log("r's area is ", r.area);

    r.height = 7;
    console.log("r's height is ", r.height);
    console.log("r's width is ", r.width);
    console.log("r's area is ", r.area);

    console.log("Rotate!");
    r.rotate90();
    console.log("r's height is ", r.height);
    console.log("r's width is ", r.width);
    console.log("r's area is ", r.area);
}

function showPicture() {
    document.getElementById("PictureGoesHere").innerHTML = '<img src="Angry Seas.jpg" width="50%" alt="Image of angry seas."></img>';
}