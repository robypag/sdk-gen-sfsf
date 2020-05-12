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
var RcmAdminReassignOfferApprover_1 = require("./RcmAdminReassignOfferApprover");
/**
 * Request builder class for operations supported on the [[RcmAdminReassignOfferApprover]] entity.
 */
var RcmAdminReassignOfferApproverRequestBuilder = /** @class */ (function (_super) {
    __extends(RcmAdminReassignOfferApproverRequestBuilder, _super);
    function RcmAdminReassignOfferApproverRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RcmAdminReassignOfferApprover` entity based on its keys.
     * @param applicationId Key property. See [[RcmAdminReassignOfferApprover.applicationId]].
     * @param currUserId Key property. See [[RcmAdminReassignOfferApprover.currUserId]].
     * @param offerDetailId Key property. See [[RcmAdminReassignOfferApprover.offerDetailId]].
     * @returns A request builder for creating requests to retrieve one `RcmAdminReassignOfferApprover` entity based on its keys.
     */
    RcmAdminReassignOfferApproverRequestBuilder.prototype.getByKey = function (applicationId, currUserId, offerDetailId) {
        return new core_1.GetByKeyRequestBuilder(RcmAdminReassignOfferApprover_1.RcmAdminReassignOfferApprover, {
            applicationId: applicationId,
            currUserId: currUserId,
            offerDetailId: offerDetailId
        });
    };
    /**
     * Returns a request builder for querying all `RcmAdminReassignOfferApprover` entities.
     * @returns A request builder for creating requests to retrieve all `RcmAdminReassignOfferApprover` entities.
     */
    RcmAdminReassignOfferApproverRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RcmAdminReassignOfferApprover_1.RcmAdminReassignOfferApprover);
    };
    /**
     * Returns a request builder for creating a `RcmAdminReassignOfferApprover` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RcmAdminReassignOfferApprover`.
     */
    RcmAdminReassignOfferApproverRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RcmAdminReassignOfferApprover_1.RcmAdminReassignOfferApprover, entity);
    };
    return RcmAdminReassignOfferApproverRequestBuilder;
}(core_1.RequestBuilder));
exports.RcmAdminReassignOfferApproverRequestBuilder = RcmAdminReassignOfferApproverRequestBuilder;
//# sourceMappingURL=RcmAdminReassignOfferApproverRequestBuilder.js.map