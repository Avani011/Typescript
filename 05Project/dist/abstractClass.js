"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
// const av = new TakePhoto("test", "test")
/*You cannot create an object of the abstract class it is the blueprint of class
instead you can inherit the class and then create object of class which inherited
the abstrct class*/
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const av = new Instagram("test", "test", 3);
av.getReelTime();
