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
var JobRequisitionLocale_1 = require("./JobRequisitionLocale");
/**
 * Request builder class for operations supported on the [[JobRequisitionLocale]] entity.
 */
var JobRequisitionLocaleRequestBuilder = /** @class */ (function (_super) {
    __extends(JobRequisitionLocaleRequestBuilder, _super);
    function JobRequisitionLocaleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobRequisitionLocale` entity based on its keys.
     * @param jobReqLocalId Key property. See [[JobRequisitionLocale.jobReqLocalId]].
     * @returns A request builder for creating requests to retrieve one `JobRequisitionLocale` entity based on its keys.
     */
    JobRequisitionLocaleRequestBuilder.prototype.getByKey = function (jobReqLocalId) {
        return new core_1.GetByKeyRequestBuilder(JobRequisitionLocale_1.JobRequisitionLocale, { jobReqLocalId: jobReqLocalId });
    };
    /**
     * Returns a request builder for querying all `JobRequisitionLocale` entities.
     * @returns A request builder for creating requests to retrieve all `JobRequisitionLocale` entities.
     */
    JobRequisitionLocaleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobRequisitionLocale_1.JobRequisitionLocale);
    };
    return JobRequisitionLocaleRequestBuilder;
}(core_1.RequestBuilder));
exports.JobRequisitionLocaleRequestBuilder = JobRequisitionLocaleRequestBuilder;
//# sourceMappingURL=JobRequisitionLocaleRequestBuilder.js.map