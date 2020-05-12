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
var FoGeozone_1 = require("./FoGeozone");
/**
 * Request builder class for operations supported on the [[FoGeozone]] entity.
 */
var FoGeozoneRequestBuilder = /** @class */ (function (_super) {
    __extends(FoGeozoneRequestBuilder, _super);
    function FoGeozoneRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoGeozone` entity based on its keys.
     * @param externalCode Key property. See [[FoGeozone.externalCode]].
     * @param startDate Key property. See [[FoGeozone.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoGeozone` entity based on its keys.
     */
    FoGeozoneRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoGeozone_1.FoGeozone, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoGeozone` entities.
     * @returns A request builder for creating requests to retrieve all `FoGeozone` entities.
     */
    FoGeozoneRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoGeozone_1.FoGeozone);
    };
    return FoGeozoneRequestBuilder;
}(core_1.RequestBuilder));
exports.FoGeozoneRequestBuilder = FoGeozoneRequestBuilder;
//# sourceMappingURL=FoGeozoneRequestBuilder.js.map