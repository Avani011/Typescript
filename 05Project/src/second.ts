interface TakePhoto{
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

/* from this we can say that interface is something that restrict
us to have the variables define inside it must be present in the
class which is inheriting it */

class YouTube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: number
    ){}

    createStory(): void {
        console.log("Story Created");
    }
}

export{}