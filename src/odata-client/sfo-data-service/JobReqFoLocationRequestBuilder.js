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
var JobReqFoLocation_1 = require("./JobReqFoLocation");
/**
 * Request builder class for operations supported on the [[JobReqFoLocation]] entity.
 */
var JobReqFoLocationRequestBuilder = /** @class */ (function (_super) {
    __extends(JobReqFoLocationRequestBuilder, _super);
    function JobReqFoLocationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobReqFoLocation` entity based on its keys.
     * @param jobReqMultiSelectId Key property. See [[JobReqFoLocation.jobReqMultiSelectId]].
     * @returns A request builder for creating requests to retrieve one `JobReqFoLocation` entity based on its keys.
     */
    JobReqFoLocationRequestBuilder.prototype.getByKey = function (jobReqMultiSelectId) {
        return new core_1.GetByKeyRequestBuilder(JobReqFoLocation_1.JobReqFoLocation, { jobReqMultiSelectId: jobReqMultiSelectId });
    };
    /**
     * Returns a request builder for querying all `JobReqFoLocation` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqFoLocation` entities.
     */
    JobReqFoLocationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobReqFoLocation_1.JobReqFoLocation);
    };
    return JobReqFoLocationRequestBuilder;
}(core_1.RequestBuilder));
exports.JobReqFoLocationRequestBuilder = JobReqFoLocationRequestBuilder;
//# sourceMappingURL=JobReqFoLocationRequestBuilder.js.map