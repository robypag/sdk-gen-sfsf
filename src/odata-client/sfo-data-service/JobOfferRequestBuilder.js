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
var JobOffer_1 = require("./JobOffer");
/**
 * Request builder class for operations supported on the [[JobOffer]] entity.
 */
var JobOfferRequestBuilder = /** @class */ (function (_super) {
    __extends(JobOfferRequestBuilder, _super);
    function JobOfferRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobOffer` entity based on its keys.
     * @param offerApprovalId Key property. See [[JobOffer.offerApprovalId]].
     * @returns A request builder for creating requests to retrieve one `JobOffer` entity based on its keys.
     */
    JobOfferRequestBuilder.prototype.getByKey = function (offerApprovalId) {
        return new core_1.GetByKeyRequestBuilder(JobOffer_1.JobOffer, { offerApprovalId: offerApprovalId });
    };
    /**
     * Returns a request builder for querying all `JobOffer` entities.
     * @returns A request builder for creating requests to retrieve all `JobOffer` entities.
     */
    JobOfferRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobOffer_1.JobOffer);
    };
    /**
     * Returns a request builder for creating a `JobOffer` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JobOffer`.
     */
    JobOfferRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JobOffer_1.JobOffer, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JobOffer`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JobOffer`.
     */
    JobOfferRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JobOffer_1.JobOffer, entity);
    };
    return JobOfferRequestBuilder;
}(core_1.RequestBuilder));
exports.JobOfferRequestBuilder = JobOfferRequestBuilder;
//# sourceMappingURL=JobOfferRequestBuilder.js.map