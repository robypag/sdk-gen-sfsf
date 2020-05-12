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
var CandidateEmployeeReferral_1 = require("./CandidateEmployeeReferral");
/**
 * Request builder class for operations supported on the [[CandidateEmployeeReferral]] entity.
 */
var CandidateEmployeeReferralRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateEmployeeReferralRequestBuilder, _super);
    function CandidateEmployeeReferralRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateEmployeeReferral` entity based on its keys.
     * @param candidateEmployeeReferralId Key property. See [[CandidateEmployeeReferral.candidateEmployeeReferralId]].
     * @returns A request builder for creating requests to retrieve one `CandidateEmployeeReferral` entity based on its keys.
     */
    CandidateEmployeeReferralRequestBuilder.prototype.getByKey = function (candidateEmployeeReferralId) {
        return new core_1.GetByKeyRequestBuilder(CandidateEmployeeReferral_1.CandidateEmployeeReferral, { candidateEmployeeReferralId: candidateEmployeeReferralId });
    };
    /**
     * Returns a request builder for querying all `CandidateEmployeeReferral` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateEmployeeReferral` entities.
     */
    CandidateEmployeeReferralRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CandidateEmployeeReferral_1.CandidateEmployeeReferral);
    };
    /**
     * Returns a request builder for creating a `CandidateEmployeeReferral` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateEmployeeReferral`.
     */
    CandidateEmployeeReferralRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CandidateEmployeeReferral_1.CandidateEmployeeReferral, entity);
    };
    return CandidateEmployeeReferralRequestBuilder;
}(core_1.RequestBuilder));
exports.CandidateEmployeeReferralRequestBuilder = CandidateEmployeeReferralRequestBuilder;
//# sourceMappingURL=CandidateEmployeeReferralRequestBuilder.js.map