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
var PerGlobalInfoGbr_1 = require("./PerGlobalInfoGbr");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoGbr]] entity.
 */
var PerGlobalInfoGbrRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoGbrRequestBuilder, _super);
    function PerGlobalInfoGbrRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoGbr` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoGbr.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoGbr.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoGbr.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoGbr` entity based on its keys.
     */
    PerGlobalInfoGbrRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoGbr_1.PerGlobalInfoGbr, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoGbr` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoGbr` entities.
     */
    PerGlobalInfoGbrRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoGbr_1.PerGlobalInfoGbr);
    };
    return PerGlobalInfoGbrRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoGbrRequestBuilder = PerGlobalInfoGbrRequestBuilder;
//# sourceMappingURL=PerGlobalInfoGbrRequestBuilder.js.map