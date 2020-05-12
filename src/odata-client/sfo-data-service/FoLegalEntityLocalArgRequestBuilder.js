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
var FoLegalEntityLocalArg_1 = require("./FoLegalEntityLocalArg");
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalArg]] entity.
 */
var FoLegalEntityLocalArgRequestBuilder = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalArgRequestBuilder, _super);
    function FoLegalEntityLocalArgRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalArg` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalArg.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalArg.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalArg.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalArg` entity based on its keys.
     */
    FoLegalEntityLocalArgRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoLegalEntityLocalArg_1.FoLegalEntityLocalArg, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalArg` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalArg` entities.
     */
    FoLegalEntityLocalArgRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoLegalEntityLocalArg_1.FoLegalEntityLocalArg);
    };
    return FoLegalEntityLocalArgRequestBuilder;
}(core_1.RequestBuilder));
exports.FoLegalEntityLocalArgRequestBuilder = FoLegalEntityLocalArgRequestBuilder;
//# sourceMappingURL=FoLegalEntityLocalArgRequestBuilder.js.map