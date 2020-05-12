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
var JobApplicationOnboardingData_1 = require("./JobApplicationOnboardingData");
/**
 * Request builder class for operations supported on the [[JobApplicationOnboardingData]] entity.
 */
var JobApplicationOnboardingDataRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationOnboardingDataRequestBuilder, _super);
    function JobApplicationOnboardingDataRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationOnboardingData` entity based on its keys.
     * @param onboardingId Key property. See [[JobApplicationOnboardingData.onboardingId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationOnboardingData` entity based on its keys.
     */
    JobApplicationOnboardingDataRequestBuilder.prototype.getByKey = function (onboardingId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationOnboardingData_1.JobApplicationOnboardingData, { onboardingId: onboardingId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationOnboardingData` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationOnboardingData` entities.
     */
    JobApplicationOnboardingDataRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationOnboardingData_1.JobApplicationOnboardingData);
    };
    return JobApplicationOnboardingDataRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationOnboardingDataRequestBuilder = JobApplicationOnboardingDataRequestBuilder;
//# sourceMappingURL=JobApplicationOnboardingDataRequestBuilder.js.map