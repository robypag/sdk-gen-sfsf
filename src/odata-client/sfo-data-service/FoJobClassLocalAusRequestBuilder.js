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
var FoJobClassLocalAus_1 = require("./FoJobClassLocalAus");
/**
 * Request builder class for operations supported on the [[FoJobClassLocalAus]] entity.
 */
var FoJobClassLocalAusRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobClassLocalAusRequestBuilder, _super);
    function FoJobClassLocalAusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalAus` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalAus.country]].
     * @param externalCode Key property. See [[FoJobClassLocalAus.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalAus.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalAus` entity based on its keys.
     */
    FoJobClassLocalAusRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobClassLocalAus_1.FoJobClassLocalAus, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobClassLocalAus` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalAus` entities.
     */
    FoJobClassLocalAusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobClassLocalAus_1.FoJobClassLocalAus);
    };
    return FoJobClassLocalAusRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobClassLocalAusRequestBuilder = FoJobClassLocalAusRequestBuilder;
//# sourceMappingURL=FoJobClassLocalAusRequestBuilder.js.map