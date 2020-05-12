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
var DevLearning_4201_1 = require("./DevLearning_4201");
/**
 * Request builder class for operations supported on the [[DevLearning_4201]] entity.
 */
var DevLearning_4201RequestBuilder = /** @class */ (function (_super) {
    __extends(DevLearning_4201RequestBuilder, _super);
    function DevLearning_4201RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevLearning_4201` entity based on its keys.
     * @param learningId Key property. See [[DevLearning_4201.learningId]].
     * @returns A request builder for creating requests to retrieve one `DevLearning_4201` entity based on its keys.
     */
    DevLearning_4201RequestBuilder.prototype.getByKey = function (learningId) {
        return new core_1.GetByKeyRequestBuilder(DevLearning_4201_1.DevLearning_4201, { learningId: learningId });
    };
    /**
     * Returns a request builder for querying all `DevLearning_4201` entities.
     * @returns A request builder for creating requests to retrieve all `DevLearning_4201` entities.
     */
    DevLearning_4201RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevLearning_4201_1.DevLearning_4201);
    };
    return DevLearning_4201RequestBuilder;
}(core_1.RequestBuilder));
exports.DevLearning_4201RequestBuilder = DevLearning_4201RequestBuilder;
//# sourceMappingURL=DevLearning_4201RequestBuilder.js.map