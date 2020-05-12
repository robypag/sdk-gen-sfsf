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
var CandidateBackground_Mobility_1 = require("./CandidateBackground_Mobility");
/**
 * Request builder class for operations supported on the [[CandidateBackground_Mobility]] entity.
 */
var CandidateBackground_MobilityRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateBackground_MobilityRequestBuilder, _super);
    function CandidateBackground_MobilityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateBackground_Mobility` entity based on its keys.
     * @param backgroundElementId Key property. See [[CandidateBackground_Mobility.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `CandidateBackground_Mobility` entity based on its keys.
     */
    CandidateBackground_MobilityRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new core_1.GetByKeyRequestBuilder(CandidateBackground_Mobility_1.CandidateBackground_Mobility, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `CandidateBackground_Mobility` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateBackground_Mobility` entities.
     */
    CandidateBackground_MobilityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CandidateBackground_Mobility_1.CandidateBackground_Mobility);
    };
    /**
     * Returns a request builder for creating a `CandidateBackground_Mobility` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CandidateBackground_Mobility`.
     */
    CandidateBackground_MobilityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CandidateBackground_Mobility_1.CandidateBackground_Mobility, entity);
    };
    return CandidateBackground_MobilityRequestBuilder;
}(core_1.RequestBuilder));
exports.CandidateBackground_MobilityRequestBuilder = CandidateBackground_MobilityRequestBuilder;
//# sourceMappingURL=CandidateBackground_MobilityRequestBuilder.js.map