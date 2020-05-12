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
var PerGlobalInfoBra_1 = require("./PerGlobalInfoBra");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoBra]] entity.
 */
var PerGlobalInfoBraRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoBraRequestBuilder, _super);
    function PerGlobalInfoBraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoBra` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoBra.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoBra.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoBra.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoBra` entity based on its keys.
     */
    PerGlobalInfoBraRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoBra_1.PerGlobalInfoBra, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoBra` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoBra` entities.
     */
    PerGlobalInfoBraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoBra_1.PerGlobalInfoBra);
    };
    return PerGlobalInfoBraRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoBraRequestBuilder = PerGlobalInfoBraRequestBuilder;
//# sourceMappingURL=PerGlobalInfoBraRequestBuilder.js.map