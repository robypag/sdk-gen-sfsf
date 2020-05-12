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
var NominationTarget_1 = require("./NominationTarget");
/**
 * Request builder class for operations supported on the [[NominationTarget]] entity.
 */
var NominationTargetRequestBuilder = /** @class */ (function (_super) {
    __extends(NominationTargetRequestBuilder, _super);
    function NominationTargetRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `NominationTarget` entity based on its keys.
     * @param nominationId Key property. See [[NominationTarget.nominationId]].
     * @returns A request builder for creating requests to retrieve one `NominationTarget` entity based on its keys.
     */
    NominationTargetRequestBuilder.prototype.getByKey = function (nominationId) {
        return new core_1.GetByKeyRequestBuilder(NominationTarget_1.NominationTarget, { nominationId: nominationId });
    };
    /**
     * Returns a request builder for querying all `NominationTarget` entities.
     * @returns A request builder for creating requests to retrieve all `NominationTarget` entities.
     */
    NominationTargetRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(NominationTarget_1.NominationTarget);
    };
    return NominationTargetRequestBuilder;
}(core_1.RequestBuilder));
exports.NominationTargetRequestBuilder = NominationTargetRequestBuilder;
//# sourceMappingURL=NominationTargetRequestBuilder.js.map