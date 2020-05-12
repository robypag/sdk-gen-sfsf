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
var PositionRightToReturn_1 = require("./PositionRightToReturn");
/**
 * Request builder class for operations supported on the [[PositionRightToReturn]] entity.
 */
var PositionRightToReturnRequestBuilder = /** @class */ (function (_super) {
    __extends(PositionRightToReturnRequestBuilder, _super);
    function PositionRightToReturnRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PositionRightToReturn` entity based on its keys.
     * @param externalCode Key property. See [[PositionRightToReturn.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PositionRightToReturn` entity based on its keys.
     */
    PositionRightToReturnRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(PositionRightToReturn_1.PositionRightToReturn, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `PositionRightToReturn` entities.
     * @returns A request builder for creating requests to retrieve all `PositionRightToReturn` entities.
     */
    PositionRightToReturnRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PositionRightToReturn_1.PositionRightToReturn);
    };
    return PositionRightToReturnRequestBuilder;
}(core_1.RequestBuilder));
exports.PositionRightToReturnRequestBuilder = PositionRightToReturnRequestBuilder;
//# sourceMappingURL=PositionRightToReturnRequestBuilder.js.map