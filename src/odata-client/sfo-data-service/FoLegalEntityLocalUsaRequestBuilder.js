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
var FoLegalEntityLocalUsa_1 = require("./FoLegalEntityLocalUsa");
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalUsa]] entity.
 */
var FoLegalEntityLocalUsaRequestBuilder = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalUsaRequestBuilder, _super);
    function FoLegalEntityLocalUsaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalUsa` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalUsa.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalUsa.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalUsa.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalUsa` entity based on its keys.
     */
    FoLegalEntityLocalUsaRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoLegalEntityLocalUsa_1.FoLegalEntityLocalUsa, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalUsa` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalUsa` entities.
     */
    FoLegalEntityLocalUsaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoLegalEntityLocalUsa_1.FoLegalEntityLocalUsa);
    };
    return FoLegalEntityLocalUsaRequestBuilder;
}(core_1.RequestBuilder));
exports.FoLegalEntityLocalUsaRequestBuilder = FoLegalEntityLocalUsaRequestBuilder;
//# sourceMappingURL=FoLegalEntityLocalUsaRequestBuilder.js.map