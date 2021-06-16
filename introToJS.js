class Rectangle {
    constructor(h, w) {
        this.height = h;
        this.width = w;
    }

    get area() {
        return this.height * this.width;
    }

    get perimeter() {
        return 2 * this.height + 2 * this.width;
    }

    rotate90() {
        let temp = this.height;
        this.height = this.width;
        this.width = temp;
    }
}

function main() {
    let r = new Rectangle(5,2);

    r.height = 7;
    console.log("Height =", r.height);
    console.log("Width =", r.width);
    console.log("Area =", r.area);
    console.log("Perimeter =", r.perimeter);
    console.log("Rotate!");
    r.rotate90();
    console.log("Height =", r.height);
    console.log("Width =", r.width);
    console.log("Area =", r.area);
    console.log("Perimeter =", r.perimeter);
}

function fireAlert() {
    alert("Hello world");
}

class ShowPicture {
    constructor () {
        this.onOff = false;
    }

    togglePictureState() {
        if( this.onOff == false ) {
            document.getElementById("PictureGoesHere").innerHTML = '<img src="Angry Seas.jpg" width="500px"/>';
            this.onOff = true;
        }
        else {
            document.getElementById("PictureGoesHere").innerHTML = '<div id="PictureGoesHere"></div>';
            this.onOff = false;
        }
    }
}
