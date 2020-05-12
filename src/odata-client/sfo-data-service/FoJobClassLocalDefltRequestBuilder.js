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
var FoJobClassLocalDeflt_1 = require("./FoJobClassLocalDeflt");
/**
 * Request builder class for operations supported on the [[FoJobClassLocalDeflt]] entity.
 */
var FoJobClassLocalDefltRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobClassLocalDefltRequestBuilder, _super);
    function FoJobClassLocalDefltRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalDeflt` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalDeflt.country]].
     * @param externalCode Key property. See [[FoJobClassLocalDeflt.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalDeflt.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalDeflt` entity based on its keys.
     */
    FoJobClassLocalDefltRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobClassLocalDeflt_1.FoJobClassLocalDeflt, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobClassLocalDeflt` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalDeflt` entities.
     */
    FoJobClassLocalDefltRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobClassLocalDeflt_1.FoJobClassLocalDeflt);
    };
    return FoJobClassLocalDefltRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobClassLocalDefltRequestBuilder = FoJobClassLocalDefltRequestBuilder;
//# sourceMappingURL=FoJobClassLocalDefltRequestBuilder.js.map