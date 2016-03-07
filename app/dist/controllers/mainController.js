/// <reference path="../_all.ts" />
'use strict';
var ContactManagerApp;
(function (ContactManagerApp) {
    class MainController {
        constructor() {
            this.message = "Hello from controller";
        }
    }
    MainController.$inject = [];
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map