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
var FoJobClassLocalBra_1 = require("./FoJobClassLocalBra");
/**
 * Request builder class for operations supported on the [[FoJobClassLocalBra]] entity.
 */
var FoJobClassLocalBraRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobClassLocalBraRequestBuilder, _super);
    function FoJobClassLocalBraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalBra` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalBra.country]].
     * @param externalCode Key property. See [[FoJobClassLocalBra.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalBra.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalBra` entity based on its keys.
     */
    FoJobClassLocalBraRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobClassLocalBra_1.FoJobClassLocalBra, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobClassLocalBra` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalBra` entities.
     */
    FoJobClassLocalBraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobClassLocalBra_1.FoJobClassLocalBra);
    };
    return FoJobClassLocalBraRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobClassLocalBraRequestBuilder = FoJobClassLocalBraRequestBuilder;
//# sourceMappingURL=FoJobClassLocalBraRequestBuilder.js.map