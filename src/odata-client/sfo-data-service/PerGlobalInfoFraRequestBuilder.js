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
var PerGlobalInfoFra_1 = require("./PerGlobalInfoFra");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoFra]] entity.
 */
var PerGlobalInfoFraRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoFraRequestBuilder, _super);
    function PerGlobalInfoFraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoFra` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoFra.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoFra.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoFra.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoFra` entity based on its keys.
     */
    PerGlobalInfoFraRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoFra_1.PerGlobalInfoFra, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoFra` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoFra` entities.
     */
    PerGlobalInfoFraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoFra_1.PerGlobalInfoFra);
    };
    return PerGlobalInfoFraRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoFraRequestBuilder = PerGlobalInfoFraRequestBuilder;
//# sourceMappingURL=PerGlobalInfoFraRequestBuilder.js.map