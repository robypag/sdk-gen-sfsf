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
var JobApplicationStatus_1 = require("./JobApplicationStatus");
/**
 * Request builder class for operations supported on the [[JobApplicationStatus]] entity.
 */
var JobApplicationStatusRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationStatusRequestBuilder, _super);
    function JobApplicationStatusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationStatus` entity based on its keys.
     * @param appStatusSetId Key property. See [[JobApplicationStatus.appStatusSetId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationStatus` entity based on its keys.
     */
    JobApplicationStatusRequestBuilder.prototype.getByKey = function (appStatusSetId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationStatus_1.JobApplicationStatus, { appStatusSetId: appStatusSetId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationStatus` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationStatus` entities.
     */
    JobApplicationStatusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationStatus_1.JobApplicationStatus);
    };
    return JobApplicationStatusRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationStatusRequestBuilder = JobApplicationStatusRequestBuilder;
//# sourceMappingURL=JobApplicationStatusRequestBuilder.js.map