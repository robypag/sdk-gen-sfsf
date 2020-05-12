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
var WfRequestStep_1 = require("./WfRequestStep");
/**
 * Request builder class for operations supported on the [[WfRequestStep]] entity.
 */
var WfRequestStepRequestBuilder = /** @class */ (function (_super) {
    __extends(WfRequestStepRequestBuilder, _super);
    function WfRequestStepRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WfRequestStep` entity based on its keys.
     * @param wfRequestStepId Key property. See [[WfRequestStep.wfRequestStepId]].
     * @returns A request builder for creating requests to retrieve one `WfRequestStep` entity based on its keys.
     */
    WfRequestStepRequestBuilder.prototype.getByKey = function (wfRequestStepId) {
        return new core_1.GetByKeyRequestBuilder(WfRequestStep_1.WfRequestStep, { wfRequestStepId: wfRequestStepId });
    };
    /**
     * Returns a request builder for querying all `WfRequestStep` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequestStep` entities.
     */
    WfRequestStepRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WfRequestStep_1.WfRequestStep);
    };
    return WfRequestStepRequestBuilder;
}(core_1.RequestBuilder));
exports.WfRequestStepRequestBuilder = WfRequestStepRequestBuilder;
//# sourceMappingURL=WfRequestStepRequestBuilder.js.map