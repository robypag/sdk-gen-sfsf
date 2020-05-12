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
var JobApplicationStatusLabel_1 = require("./JobApplicationStatusLabel");
/**
 * Request builder class for operations supported on the [[JobApplicationStatusLabel]] entity.
 */
var JobApplicationStatusLabelRequestBuilder = /** @class */ (function (_super) {
    __extends(JobApplicationStatusLabelRequestBuilder, _super);
    function JobApplicationStatusLabelRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobApplicationStatusLabel` entity based on its keys.
     * @param appStatusId Key property. See [[JobApplicationStatusLabel.appStatusId]].
     * @returns A request builder for creating requests to retrieve one `JobApplicationStatusLabel` entity based on its keys.
     */
    JobApplicationStatusLabelRequestBuilder.prototype.getByKey = function (appStatusId) {
        return new core_1.GetByKeyRequestBuilder(JobApplicationStatusLabel_1.JobApplicationStatusLabel, { appStatusId: appStatusId });
    };
    /**
     * Returns a request builder for querying all `JobApplicationStatusLabel` entities.
     * @returns A request builder for creating requests to retrieve all `JobApplicationStatusLabel` entities.
     */
    JobApplicationStatusLabelRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobApplicationStatusLabel_1.JobApplicationStatusLabel);
    };
    return JobApplicationStatusLabelRequestBuilder;
}(core_1.RequestBuilder));
exports.JobApplicationStatusLabelRequestBuilder = JobApplicationStatusLabelRequestBuilder;
//# sourceMappingURL=JobApplicationStatusLabelRequestBuilder.js.map