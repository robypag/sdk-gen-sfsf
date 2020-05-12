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
var FoLegalEntityLocalFra_1 = require("./FoLegalEntityLocalFra");
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalFra]] entity.
 */
var FoLegalEntityLocalFraRequestBuilder = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalFraRequestBuilder, _super);
    function FoLegalEntityLocalFraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalFra` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalFra.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalFra.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalFra.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalFra` entity based on its keys.
     */
    FoLegalEntityLocalFraRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoLegalEntityLocalFra_1.FoLegalEntityLocalFra, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalFra` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalFra` entities.
     */
    FoLegalEntityLocalFraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoLegalEntityLocalFra_1.FoLegalEntityLocalFra);
    };
    return FoLegalEntityLocalFraRequestBuilder;
}(core_1.RequestBuilder));
exports.FoLegalEntityLocalFraRequestBuilder = FoLegalEntityLocalFraRequestBuilder;
//# sourceMappingURL=FoLegalEntityLocalFraRequestBuilder.js.map