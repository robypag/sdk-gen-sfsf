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
var JobOfferApprover_1 = require("./JobOfferApprover");
/**
 * Request builder class for operations supported on the [[JobOfferApprover]] entity.
 */
var JobOfferApproverRequestBuilder = /** @class */ (function (_super) {
    __extends(JobOfferApproverRequestBuilder, _super);
    function JobOfferApproverRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobOfferApprover` entity based on its keys.
     * @param offerApproverId Key property. See [[JobOfferApprover.offerApproverId]].
     * @returns A request builder for creating requests to retrieve one `JobOfferApprover` entity based on its keys.
     */
    JobOfferApproverRequestBuilder.prototype.getByKey = function (offerApproverId) {
        return new core_1.GetByKeyRequestBuilder(JobOfferApprover_1.JobOfferApprover, { offerApproverId: offerApproverId });
    };
    /**
     * Returns a request builder for querying all `JobOfferApprover` entities.
     * @returns A request builder for creating requests to retrieve all `JobOfferApprover` entities.
     */
    JobOfferApproverRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobOfferApprover_1.JobOfferApprover);
    };
    return JobOfferApproverRequestBuilder;
}(core_1.RequestBuilder));
exports.JobOfferApproverRequestBuilder = JobOfferApproverRequestBuilder;
//# sourceMappingURL=JobOfferApproverRequestBuilder.js.map