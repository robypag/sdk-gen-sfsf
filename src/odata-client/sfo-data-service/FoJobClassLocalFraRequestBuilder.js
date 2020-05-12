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
var FoJobClassLocalFra_1 = require("./FoJobClassLocalFra");
/**
 * Request builder class for operations supported on the [[FoJobClassLocalFra]] entity.
 */
var FoJobClassLocalFraRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobClassLocalFraRequestBuilder, _super);
    function FoJobClassLocalFraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalFra` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalFra.country]].
     * @param externalCode Key property. See [[FoJobClassLocalFra.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalFra.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalFra` entity based on its keys.
     */
    FoJobClassLocalFraRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobClassLocalFra_1.FoJobClassLocalFra, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobClassLocalFra` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalFra` entities.
     */
    FoJobClassLocalFraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobClassLocalFra_1.FoJobClassLocalFra);
    };
    return FoJobClassLocalFraRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobClassLocalFraRequestBuilder = FoJobClassLocalFraRequestBuilder;
//# sourceMappingURL=FoJobClassLocalFraRequestBuilder.js.map