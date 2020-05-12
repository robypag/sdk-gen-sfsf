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
var FoLegalEntityLocalDeflt_1 = require("./FoLegalEntityLocalDeflt");
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalDeflt]] entity.
 */
var FoLegalEntityLocalDefltRequestBuilder = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalDefltRequestBuilder, _super);
    function FoLegalEntityLocalDefltRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalDeflt` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalDeflt.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalDeflt.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalDeflt.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalDeflt` entity based on its keys.
     */
    FoLegalEntityLocalDefltRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoLegalEntityLocalDeflt_1.FoLegalEntityLocalDeflt, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalDeflt` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalDeflt` entities.
     */
    FoLegalEntityLocalDefltRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoLegalEntityLocalDeflt_1.FoLegalEntityLocalDeflt);
    };
    return FoLegalEntityLocalDefltRequestBuilder;
}(core_1.RequestBuilder));
exports.FoLegalEntityLocalDefltRequestBuilder = FoLegalEntityLocalDefltRequestBuilder;
//# sourceMappingURL=FoLegalEntityLocalDefltRequestBuilder.js.map