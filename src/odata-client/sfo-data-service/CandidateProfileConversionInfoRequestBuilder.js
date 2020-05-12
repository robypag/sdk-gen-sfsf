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
var CandidateProfileConversionInfo_1 = require("./CandidateProfileConversionInfo");
/**
 * Request builder class for operations supported on the [[CandidateProfileConversionInfo]] entity.
 */
var CandidateProfileConversionInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(CandidateProfileConversionInfoRequestBuilder, _super);
    function CandidateProfileConversionInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CandidateProfileConversionInfo` entity based on its keys.
     * @param candidateId Key property. See [[CandidateProfileConversionInfo.candidateId]].
     * @returns A request builder for creating requests to retrieve one `CandidateProfileConversionInfo` entity based on its keys.
     */
    CandidateProfileConversionInfoRequestBuilder.prototype.getByKey = function (candidateId) {
        return new core_1.GetByKeyRequestBuilder(CandidateProfileConversionInfo_1.CandidateProfileConversionInfo, { candidateId: candidateId });
    };
    /**
     * Returns a request builder for querying all `CandidateProfileConversionInfo` entities.
     * @returns A request builder for creating requests to retrieve all `CandidateProfileConversionInfo` entities.
     */
    CandidateProfileConversionInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CandidateProfileConversionInfo_1.CandidateProfileConversionInfo);
    };
    return CandidateProfileConversionInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.CandidateProfileConversionInfoRequestBuilder = CandidateProfileConversionInfoRequestBuilder;
//# sourceMappingURL=CandidateProfileConversionInfoRequestBuilder.js.map