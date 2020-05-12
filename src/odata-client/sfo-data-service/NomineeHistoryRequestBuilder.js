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
var NomineeHistory_1 = require("./NomineeHistory");
/**
 * Request builder class for operations supported on the [[NomineeHistory]] entity.
 */
var NomineeHistoryRequestBuilder = /** @class */ (function (_super) {
    __extends(NomineeHistoryRequestBuilder, _super);
    function NomineeHistoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `NomineeHistory` entity based on its keys.
     * @param id Key property. See [[NomineeHistory.id]].
     * @returns A request builder for creating requests to retrieve one `NomineeHistory` entity based on its keys.
     */
    NomineeHistoryRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(NomineeHistory_1.NomineeHistory, { id: id });
    };
    /**
     * Returns a request builder for querying all `NomineeHistory` entities.
     * @returns A request builder for creating requests to retrieve all `NomineeHistory` entities.
     */
    NomineeHistoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(NomineeHistory_1.NomineeHistory);
    };
    return NomineeHistoryRequestBuilder;
}(core_1.RequestBuilder));
exports.NomineeHistoryRequestBuilder = NomineeHistoryRequestBuilder;
//# sourceMappingURL=NomineeHistoryRequestBuilder.js.map