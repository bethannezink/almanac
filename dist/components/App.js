var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import { seeds } from '../data/seeds';
import { formatDate, getSowDate, getGerminationDate } from '../utils/calendar';
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var seedData = seeds.map(function (seed, index) {
            var daysFromSeedToLastFrost = seed.daysFromSeedToLastFrost, daysToGermination = seed.daysToGermination;
            var firstPossibleSowDate = getSowDate(daysFromSeedToLastFrost[1]);
            var lastPossibleSowDate = getSowDate(daysFromSeedToLastFrost[0]);
            var firstPossibleGerminationDate = getGerminationDate(firstPossibleSowDate, daysToGermination[1]);
            var lastPossibleGerminationDate = getGerminationDate(lastPossibleSowDate, daysToGermination[0]);
            return (React.createElement("div", { key: "seed-" + index },
                React.createElement("div", null, seed.name),
                !seed.isDirectSow ? (React.createElement("div", null, firstPossibleSowDate === lastPossibleSowDate ? (React.createElement("div", null,
                    "Sow on ",
                    formatDate(firstPossibleSowDate))) : (React.createElement("div", null,
                    "Sow: ",
                    formatDate(firstPossibleSowDate),
                    " - ",
                    formatDate(lastPossibleSowDate))))) : (React.createElement("div", null,
                    React.createElement("div", null,
                        "Sow Directly: ",
                        formatDate(firstPossibleSowDate),
                        " - ",
                        formatDate(lastPossibleSowDate)))),
                React.createElement("div", null,
                    "Germination: ",
                    formatDate(firstPossibleGerminationDate),
                    " - ",
                    formatDate(lastPossibleGerminationDate)),
                React.createElement("br", null)));
        });
        return (React.createElement("div", null, seedData));
    };
    return App;
}(Component));
export default App;
//# sourceMappingURL=App.js.map