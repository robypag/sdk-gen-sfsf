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
var JobApplicationAudit_1 = require("./JobApplicationAudit");
/**
 * Request builder class for operations supported on the [[JobApplicationAudit]] entity.
 */
var JobApplicationAuditRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationAuditRequestBuilder, _super);
    function JobApplicationAuditRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationAudit` entity based on its keys.
     * @param fieldOrderPos Key property. See [[JobApplicationAudit.fieldOrderPos]].
     * @param revNumber Key property. See [[JobApplicationAudit.revNumber]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationAudit` entity based on its keys.
     */
    JobApplicationAuditRequestBuilder.prototype.getByKey = function (fieldOrderPos, revNumber) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationAudit_1.JobApplicationAudit, {
            fieldOrderPos: fieldOrderPos,
            revNumber: revNumber
        });
    };
    /**
     * Returns a request builder for querying all `JobApplicationAudit` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationAudit` entities.
     */
    JobApplicationAuditRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationAudit_1.JobApplicationAudit);
    };
    return JobApplicationAuditRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationAuditRequestBuilder = JobApplicationAuditRequestBuilder;
//# sourceMappingURL=JobApplicationAuditRequestBuilder.js.map