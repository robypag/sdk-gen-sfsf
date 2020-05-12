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
var JobReqGoPosition_1 = require("./JobReqGoPosition");
/**
 * Request builder class for operations supported on the [[JobReqGoPosition]] entity.
 */
var JobReqGoPositionRequestBuilder = /** @class */ (function (_super) {
    __extends(JobReqGoPositionRequestBuilder, _super);
    function JobReqGoPositionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobReqGoPosition` entity based on its keys.
     * @param jobReqMultiSelectId Key property. See [[JobReqGoPosition.jobReqMultiSelectId]].
     * @returns A request builder for creating requests to retrieve one `JobReqGoPosition` entity based on its keys.
     */
    JobReqGoPositionRequestBuilder.prototype.getByKey = function (jobReqMultiSelectId) {
        return new core_1.GetByKeyRequestBuilder(JobReqGoPosition_1.JobReqGoPosition, { jobReqMultiSelectId: jobReqMultiSelectId });
    };
    /**
     * Returns a request builder for querying all `JobReqGoPosition` entities.
     * @returns A request builder for creating requests to retrieve all `JobReqGoPosition` entities.
     */
    JobReqGoPositionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobReqGoPosition_1.JobReqGoPosition);
    };
    return JobReqGoPositionRequestBuilder;
}(core_1.RequestBuilder));
exports.JobReqGoPositionRequestBuilder = JobReqGoPositionRequestBuilder;
//# sourceMappingURL=JobReqGoPositionRequestBuilder.js.map