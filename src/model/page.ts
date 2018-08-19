import { NativePageTransitions } from '@ionic-native/native-page-transitions';

export class Page {

    private isCached: boolean;
    private nativePageTransitionsNew: NativePageTransitions;

    /**
    * Page Constructor
    * @param {NativePageTransitions} transitions
    */
    constructor(transitions: NativePageTransitions) {
        this.nativePageTransitionsNew = transitions;
        this.isCached = false;
    }
    
    /**
    * Trigger native animation. If page is entering by default slide to left, if page is 
    * already created slide to right.
    * @param {string} enterPageDirection (Optional, default 'left')
    * @param {string} resumePageDirection (Optional, default 'right')
    */
    animateTransition(enterDirection?: string, resumeDirection?: string) {
       let resumeTransition = resumeDirection ? resumeDirection : 'right';
       let enterTransition = enterDirection ? enterDirection : 'left';
       // Resuming view transition if view was previously created
       if (this.isCached) {
            this.nativePageTransitionsNew.slide({ 
                direction: resumeTransition, 
                iosdelay: 60, 
                androiddelay: 70, 
                slowdownfactor: 1 
            });
        }
        // Entering View transition if is created for first time
        else {
            this.nativePageTransitionsNew.slide({ 
                direction: enterTransition, 
                iosdelay: 60, 
                androiddelay: 70, 
                slowdownfactor: 1
            });
            this.isCached = true;
        }   
    }
}