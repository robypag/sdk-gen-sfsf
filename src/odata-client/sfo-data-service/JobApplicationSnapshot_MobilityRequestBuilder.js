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
var JobApplicationSnapshot_Mobility_1 = require("./JobApplicationSnapshot_Mobility");
/**
 * Request builder class for operations supported on the [[JobApplicationSnapshot_Mobility]] entity.
 */
var JobApplicationSnapshot_MobilityRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationSnapshot_MobilityRequestBuilder, _super);
    function JobApplicationSnapshot_MobilityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationSnapshot_Mobility` entity based on its keys.
     * @param backgroundElementId Key property. See [[JobApplicationSnapshot_Mobility.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationSnapshot_Mobility` entity based on its keys.
     */
    JobApplicationSnapshot_MobilityRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationSnapshot_Mobility_1.JobApplicationSnapshot_Mobility, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationSnapshot_Mobility` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationSnapshot_Mobility` entities.
     */
    JobApplicationSnapshot_MobilityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationSnapshot_Mobility_1.JobApplicationSnapshot_Mobility);
    };
    return JobApplicationSnapshot_MobilityRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationSnapshot_MobilityRequestBuilder = JobApplicationSnapshot_MobilityRequestBuilder;
//# sourceMappingURL=JobApplicationSnapshot_MobilityRequestBuilder.js.map