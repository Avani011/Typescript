abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia() : void 
    getReelTime(): number{
        return 8
    }
}

// const av = new TakePhoto("test", "test")
/*You cannot create an object of the abstract class it is the blueprint of class
instead you can inherit the class and then create object of class which inherited
the abstrct class*/

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter) 
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const av = new Instagram("test", "test", 3);
av.getReelTime();    