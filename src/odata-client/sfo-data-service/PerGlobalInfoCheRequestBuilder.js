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
var PerGlobalInfoChe_1 = require("./PerGlobalInfoChe");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoChe]] entity.
 */
var PerGlobalInfoCheRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoCheRequestBuilder, _super);
    function PerGlobalInfoCheRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoChe` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoChe.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoChe.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoChe.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoChe` entity based on its keys.
     */
    PerGlobalInfoCheRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoChe_1.PerGlobalInfoChe, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoChe` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoChe` entities.
     */
    PerGlobalInfoCheRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoChe_1.PerGlobalInfoChe);
    };
    return PerGlobalInfoCheRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoCheRequestBuilder = PerGlobalInfoCheRequestBuilder;
//# sourceMappingURL=PerGlobalInfoCheRequestBuilder.js.map