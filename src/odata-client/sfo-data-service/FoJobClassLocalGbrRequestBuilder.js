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
var FoJobClassLocalGbr_1 = require("./FoJobClassLocalGbr");
/**
 * Request builder class for operations supported on the [[FoJobClassLocalGbr]] entity.
 */
var FoJobClassLocalGbrRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobClassLocalGbrRequestBuilder, _super);
    function FoJobClassLocalGbrRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalGbr` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalGbr.country]].
     * @param externalCode Key property. See [[FoJobClassLocalGbr.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalGbr.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalGbr` entity based on its keys.
     */
    FoJobClassLocalGbrRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobClassLocalGbr_1.FoJobClassLocalGbr, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobClassLocalGbr` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalGbr` entities.
     */
    FoJobClassLocalGbrRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobClassLocalGbr_1.FoJobClassLocalGbr);
    };
    return FoJobClassLocalGbrRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobClassLocalGbrRequestBuilder = FoJobClassLocalGbrRequestBuilder;
//# sourceMappingURL=FoJobClassLocalGbrRequestBuilder.js.map