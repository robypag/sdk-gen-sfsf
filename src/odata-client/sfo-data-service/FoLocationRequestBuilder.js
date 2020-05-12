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
var FoLocation_1 = require("./FoLocation");
/**
 * Request builder class for operations supported on the [[FoLocation]] entity.
 */
var FoLocationRequestBuilder = /** @class */ (function (_super) {
    __extends(FoLocationRequestBuilder, _super);
    function FoLocationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoLocation` entity based on its keys.
     * @param externalCode Key property. See [[FoLocation.externalCode]].
     * @param startDate Key property. See [[FoLocation.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLocation` entity based on its keys.
     */
    FoLocationRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoLocation_1.FoLocation, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoLocation` entities.
     * @returns A request builder for creating requests to retrieve all `FoLocation` entities.
     */
    FoLocationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoLocation_1.FoLocation);
    };
    return FoLocationRequestBuilder;
}(core_1.RequestBuilder));
exports.FoLocationRequestBuilder = FoLocationRequestBuilder;
//# sourceMappingURL=FoLocationRequestBuilder.js.map