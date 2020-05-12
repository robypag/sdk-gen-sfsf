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
var RcmCompetency_1 = require("./RcmCompetency");
/**
 * Request builder class for operations supported on the [[RcmCompetency]] entity.
 */
var RcmCompetencyRequestBuilder = /** @class */ (function (_super) {
    __extends(RcmCompetencyRequestBuilder, _super);
    function RcmCompetencyRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RcmCompetency` entity based on its keys.
     * @param rcmCompetencyId Key property. See [[RcmCompetency.rcmCompetencyId]].
     * @returns A request builder for creating requests to retrieve one `RcmCompetency` entity based on its keys.
     */
    RcmCompetencyRequestBuilder.prototype.getByKey = function (rcmCompetencyId) {
        return new core_1.GetByKeyRequestBuilder(RcmCompetency_1.RcmCompetency, { rcmCompetencyId: rcmCompetencyId });
    };
    /**
     * Returns a request builder for querying all `RcmCompetency` entities.
     * @returns A request builder for creating requests to retrieve all `RcmCompetency` entities.
     */
    RcmCompetencyRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RcmCompetency_1.RcmCompetency);
    };
    return RcmCompetencyRequestBuilder;
}(core_1.RequestBuilder));
exports.RcmCompetencyRequestBuilder = RcmCompetencyRequestBuilder;
//# sourceMappingURL=RcmCompetencyRequestBuilder.js.map