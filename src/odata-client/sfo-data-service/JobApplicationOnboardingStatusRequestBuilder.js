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
var JobApplicationOnboardingStatus_1 = require("./JobApplicationOnboardingStatus");
/**
 * Request builder class for operations supported on the [[JobApplicationOnboardingStatus]] entity.
 */
var JobApplicationOnboardingStatusRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationOnboardingStatusRequestBuilder, _super);
    function JobApplicationOnboardingStatusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationOnboardingStatus` entity based on its keys.
     * @param onboardingStatusId Key property. See [[JobApplicationOnboardingStatus.onboardingStatusId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationOnboardingStatus` entity based on its keys.
     */
    JobApplicationOnboardingStatusRequestBuilder.prototype.getByKey = function (onboardingStatusId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationOnboardingStatus_1.JobApplicationOnboardingStatus, { onboardingStatusId: onboardingStatusId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationOnboardingStatus` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationOnboardingStatus` entities.
     */
    JobApplicationOnboardingStatusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationOnboardingStatus_1.JobApplicationOnboardingStatus);
    };
    return JobApplicationOnboardingStatusRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationOnboardingStatusRequestBuilder = JobApplicationOnboardingStatusRequestBuilder;
//# sourceMappingURL=JobApplicationOnboardingStatusRequestBuilder.js.map