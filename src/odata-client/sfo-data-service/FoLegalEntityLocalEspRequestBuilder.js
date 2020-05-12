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
var FoLegalEntityLocalEsp_1 = require("./FoLegalEntityLocalEsp");
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalEsp]] entity.
 */
var FoLegalEntityLocalEspRequestBuilder = /** @class */ (function (_super) {
    __extends(FoLegalEntityLocalEspRequestBuilder, _super);
    function FoLegalEntityLocalEspRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalEsp` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalEsp.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalEsp.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalEsp.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalEsp` entity based on its keys.
     */
    FoLegalEntityLocalEspRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoLegalEntityLocalEsp_1.FoLegalEntityLocalEsp, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalEsp` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalEsp` entities.
     */
    FoLegalEntityLocalEspRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoLegalEntityLocalEsp_1.FoLegalEntityLocalEsp);
    };
    return FoLegalEntityLocalEspRequestBuilder;
}(core_1.RequestBuilder));
exports.FoLegalEntityLocalEspRequestBuilder = FoLegalEntityLocalEspRequestBuilder;
//# sourceMappingURL=FoLegalEntityLocalEspRequestBuilder.js.map