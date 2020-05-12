"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@sap-cloud-sdk/core");
var DevGoalCompetency_1 = require("./DevGoalCompetency");
/**
 * Request builder class for operations supported on the [[DevGoalCompetency]] entity.
 */
var DevGoalCompetencyRequestBuilder = /** @class */ (function (_super) {
    __extends(DevGoalCompetencyRequestBuilder, _super);
    function DevGoalCompetencyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevGoalCompetency` entity based on its keys.
     * @param id Key property. See [[DevGoalCompetency.id]].
     * @returns A request builder for creating requests to retrieve one `DevGoalCompetency` entity based on its keys.
     */
    DevGoalCompetencyRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(DevGoalCompetency_1.DevGoalCompetency, { id: id });
    };
    /**
     * Returns a request builder for querying all `DevGoalCompetency` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoalCompetency` entities.
     */
    DevGoalCompetencyRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevGoalCompetency_1.DevGoalCompetency);
    };
    return DevGoalCompetencyRequestBuilder;
}(core_1.RequestBuilder));
exports.DevGoalCompetencyRequestBuilder = DevGoalCompetencyRequestBuilder;
//# sourceMappingURL=DevGoalCompetencyRequestBuilder.js.map