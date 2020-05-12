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
var FoEventReason_1 = require("./FoEventReason");
/**
 * Request builder class for operations supported on the [[FoEventReason]] entity.
 */
var FoEventReasonRequestBuilder = /** @class */ (function (_super) {
    __extends(FoEventReasonRequestBuilder, _super);
    function FoEventReasonRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoEventReason` entity based on its keys.
     * @param externalCode Key property. See [[FoEventReason.externalCode]].
     * @param startDate Key property. See [[FoEventReason.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoEventReason` entity based on its keys.
     */
    FoEventReasonRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoEventReason_1.FoEventReason, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoEventReason` entities.
     * @returns A request builder for creating requests to retrieve all `FoEventReason` entities.
     */
    FoEventReasonRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoEventReason_1.FoEventReason);
    };
    return FoEventReasonRequestBuilder;
}(core_1.RequestBuilder));
exports.FoEventReasonRequestBuilder = FoEventReasonRequestBuilder;
//# sourceMappingURL=FoEventReasonRequestBuilder.js.map