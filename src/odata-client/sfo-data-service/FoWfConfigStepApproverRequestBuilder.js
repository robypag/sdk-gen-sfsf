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
var FoWfConfigStepApprover_1 = require("./FoWfConfigStepApprover");
/**
 * Request builder class for operations supported on the [[FoWfConfigStepApprover]] entity.
 */
var FoWfConfigStepApproverRequestBuilder = /** @class */ (function (_super) {
    __extends(FoWfConfigStepApproverRequestBuilder, _super);
    function FoWfConfigStepApproverRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoWfConfigStepApprover` entity based on its keys.
     * @param externalCode Key property. See [[FoWfConfigStepApprover.externalCode]].
     * @param stepNum Key property. See [[FoWfConfigStepApprover.stepNum]].
     * @returns A request builder for creating requests to retrieve one `FoWfConfigStepApprover` entity based on its keys.
     */
    FoWfConfigStepApproverRequestBuilder.prototype.getByKey = function (externalCode, stepNum) {
        return new core_1.GetByKeyRequestBuilder(FoWfConfigStepApprover_1.FoWfConfigStepApprover, {
            externalCode: externalCode,
            stepNum: stepNum
        });
    };
    /**
     * Returns a request builder for querying all `FoWfConfigStepApprover` entities.
     * @returns A request builder for creating requests to retrieve all `FoWfConfigStepApprover` entities.
     */
    FoWfConfigStepApproverRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoWfConfigStepApprover_1.FoWfConfigStepApprover);
    };
    return FoWfConfigStepApproverRequestBuilder;
}(core_1.RequestBuilder));
exports.FoWfConfigStepApproverRequestBuilder = FoWfConfigStepApproverRequestBuilder;
//# sourceMappingURL=FoWfConfigStepApproverRequestBuilder.js.map