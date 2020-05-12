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
var FoJobClassLocalIta_1 = require("./FoJobClassLocalIta");
/**
 * Request builder class for operations supported on the [[FoJobClassLocalIta]] entity.
 */
var FoJobClassLocalItaRequestBuilder = /** @class */ (function (_super) {
    __extends(FoJobClassLocalItaRequestBuilder, _super);
    function FoJobClassLocalItaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalIta` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalIta.country]].
     * @param externalCode Key property. See [[FoJobClassLocalIta.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalIta.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalIta` entity based on its keys.
     */
    FoJobClassLocalItaRequestBuilder.prototype.getByKey = function (country, externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoJobClassLocalIta_1.FoJobClassLocalIta, {
            country: country,
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoJobClassLocalIta` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalIta` entities.
     */
    FoJobClassLocalItaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoJobClassLocalIta_1.FoJobClassLocalIta);
    };
    return FoJobClassLocalItaRequestBuilder;
}(core_1.RequestBuilder));
exports.FoJobClassLocalItaRequestBuilder = FoJobClassLocalItaRequestBuilder;
//# sourceMappingURL=FoJobClassLocalItaRequestBuilder.js.map