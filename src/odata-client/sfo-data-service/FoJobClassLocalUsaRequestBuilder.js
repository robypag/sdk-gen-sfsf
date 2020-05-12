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
var FoJobClassLocalUsa_1 = require("./FoJobClassLocalUsa");
/**
 * Request builder class for operations supported on the [[FoJobClassLocalUsa]] entity.
 */
var FoJobClassLocalUsaRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobClassLocalUsaRequestBuilder, _super);
    function FoJobClassLocalUsaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalUsa` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalUsa.country]].
     * @param externalCode Key property. See [[FoJobClassLocalUsa.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalUsa.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalUsa` entity based on its keys.
     */
    FoJobClassLocalUsaRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobClassLocalUsa_1.FoJobClassLocalUsa, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobClassLocalUsa` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalUsa` entities.
     */
    FoJobClassLocalUsaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobClassLocalUsa_1.FoJobClassLocalUsa);
    };
    return FoJobClassLocalUsaRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobClassLocalUsaRequestBuilder = FoJobClassLocalUsaRequestBuilder;
//# sourceMappingURL=FoJobClassLocalUsaRequestBuilder.js.map