class SplashForm extends Form {
    constructor(title,x,y,w,h) {
        super("SPLASHFORM",title,x,y,w,h);
        this.visible=true;
        this.active=true;
        this.m=30;
    }
    draw() {
        super.draw();
    }
    processFormEvent(pMyEvent) {
        super.processFormEvent(pMyEvent);
    }
}
