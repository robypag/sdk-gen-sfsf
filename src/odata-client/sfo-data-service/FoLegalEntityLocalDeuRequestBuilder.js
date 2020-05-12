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
var FoLegalEntityLocalDeu_1 = require("./FoLegalEntityLocalDeu");
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalDeu]] entity.
 */
var FoLegalEntityLocalDeuRequestBuilder = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalDeuRequestBuilder, _super);
    function FoLegalEntityLocalDeuRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalDeu` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalDeu.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalDeu.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalDeu.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalDeu` entity based on its keys.
     */
    FoLegalEntityLocalDeuRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoLegalEntityLocalDeu_1.FoLegalEntityLocalDeu, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalDeu` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalDeu` entities.
     */
    FoLegalEntityLocalDeuRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoLegalEntityLocalDeu_1.FoLegalEntityLocalDeu);
    };
    return FoLegalEntityLocalDeuRequestBuilder;
}(core_1.RequestBuilder));
exports.FoLegalEntityLocalDeuRequestBuilder = FoLegalEntityLocalDeuRequestBuilder;
//# sourceMappingURL=FoLegalEntityLocalDeuRequestBuilder.js.map