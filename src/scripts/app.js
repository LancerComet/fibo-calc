/*
 *  Fibo Calculator By LancerComet at 16:35, 2016.02.27.
 *  # Carry Your World #
 */

(function fiboCalc(window, undefined) {
    
    // Definition: LeftNav Controller | 左侧导航控制器.    
    (function leftNavCtrl () {
        
        // Definition: LeftNav Controller.
        var leftNavCtrl = avalon.define({
            $id: "leftNavCtrl",
            switchPanel: function (target) {
                leftNavCtrl.$fire("all!showPanel", target);
            }
        });


    })();


    // Definition: Main Section Controller | 主章节控制器.
    (function mainSectionCtrl () {
        // Definition: Main Section Controller.
        var mainSectionCtrl = avalon.define({
            $id: "mainSectionCtrl",
            showPanel: "fibo-retrancement"  // Default panel is the fibo-welcome.
        });
        
        // Definition: Show Panel Event.
        mainSectionCtrl.$watch("showPanel", function (value) {
            mainSectionCtrl.showPanel = value;
        });

    })();
    
    
    // Definition: Fibo Retrancement Controller.
    (function fiboRetrancement () {
        var retrancementCtrl = avalon.define({
            $id: "retrancementCtrl",
            inputData: {
                x: 1000,
                a: 1020
            },
            panelNow: "uptrend",
            switchPanel: function (value) {
                if (retrancementCtrl.panelNow === value) return;
                retrancementCtrl.panelNow = value;
                
                // Swap x and a.
                var temp = retrancementCtrl.inputData.x;
                retrancementCtrl.inputData.x = retrancementCtrl.inputData.a;
                retrancementCtrl.inputData.a = temp;
                                
            }
        });
    })();
    
    
    // Definition: Fibo Extension Controller.
    (function () {
        
        var extensionCtrl = avalon.define({
            $id: "extensionCtrl",
            inputData: {
                x: 1000,
                a: 1020
            },
            panelNow: "uptrend",
            switchPanel: function (value) {
                if (extensionCtrl.panelNow === value) return;
                extensionCtrl.panelNow = value;
                
                // Swap x and a.
                var temp = extensionCtrl.inputData.x;
                extensionCtrl.inputData.x = extensionCtrl.inputData.a;
                extensionCtrl.inputData.a = temp;
            }
        });
        
    })();




})(window);