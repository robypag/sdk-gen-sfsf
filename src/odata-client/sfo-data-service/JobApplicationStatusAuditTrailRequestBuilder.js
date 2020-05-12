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
var JobApplicationStatusAuditTrail_1 = require("./JobApplicationStatusAuditTrail");
/**
 * Request builder class for operations supported on the [[JobApplicationStatusAuditTrail]] entity.
 */
var JobApplicationStatusAuditTrailRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationStatusAuditTrailRequestBuilder, _super);
    function JobApplicationStatusAuditTrailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationStatusAuditTrail` entity based on its keys.
     * @param revNumber Key property. See [[JobApplicationStatusAuditTrail.revNumber]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationStatusAuditTrail` entity based on its keys.
     */
    JobApplicationStatusAuditTrailRequestBuilder.prototype.getByKey = function (revNumber) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationStatusAuditTrail_1.JobApplicationStatusAuditTrail, { revNumber: revNumber });
    };
    /**
     * Returns a request builder for querying all `JobApplicationStatusAuditTrail` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationStatusAuditTrail` entities.
     */
    JobApplicationStatusAuditTrailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationStatusAuditTrail_1.JobApplicationStatusAuditTrail);
    };
    return JobApplicationStatusAuditTrailRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationStatusAuditTrailRequestBuilder = JobApplicationStatusAuditTrailRequestBuilder;
//# sourceMappingURL=JobApplicationStatusAuditTrailRequestBuilder.js.map