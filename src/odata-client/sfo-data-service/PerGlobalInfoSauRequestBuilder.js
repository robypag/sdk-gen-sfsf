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
var PerGlobalInfoSau_1 = require("./PerGlobalInfoSau");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoSau]] entity.
 */
var PerGlobalInfoSauRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoSauRequestBuilder, _super);
    function PerGlobalInfoSauRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoSau` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoSau.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoSau.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoSau.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoSau` entity based on its keys.
     */
    PerGlobalInfoSauRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoSau_1.PerGlobalInfoSau, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoSau` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoSau` entities.
     */
    PerGlobalInfoSauRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoSau_1.PerGlobalInfoSau);
    };
    return PerGlobalInfoSauRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoSauRequestBuilder = PerGlobalInfoSauRequestBuilder;
//# sourceMappingURL=PerGlobalInfoSauRequestBuilder.js.map