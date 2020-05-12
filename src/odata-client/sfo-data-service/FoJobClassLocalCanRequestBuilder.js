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
var FoJobClassLocalCan_1 = require("./FoJobClassLocalCan");
/**
 * Request builder class for operations supported on the [[FoJobClassLocalCan]] entity.
 */
var FoJobClassLocalCanRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobClassLocalCanRequestBuilder, _super);
    function FoJobClassLocalCanRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalCan` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalCan.country]].
     * @param externalCode Key property. See [[FoJobClassLocalCan.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalCan.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalCan` entity based on its keys.
     */
    FoJobClassLocalCanRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobClassLocalCan_1.FoJobClassLocalCan, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobClassLocalCan` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalCan` entities.
     */
    FoJobClassLocalCanRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobClassLocalCan_1.FoJobClassLocalCan);
    };
    return FoJobClassLocalCanRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobClassLocalCanRequestBuilder = FoJobClassLocalCanRequestBuilder;
//# sourceMappingURL=FoJobClassLocalCanRequestBuilder.js.map