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
var PerGlobalInfoCol_1 = require("./PerGlobalInfoCol");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoCol]] entity.
 */
var PerGlobalInfoColRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoColRequestBuilder, _super);
    function PerGlobalInfoColRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoCol` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoCol.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoCol.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoCol.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoCol` entity based on its keys.
     */
    PerGlobalInfoColRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoCol_1.PerGlobalInfoCol, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoCol` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoCol` entities.
     */
    PerGlobalInfoColRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoCol_1.PerGlobalInfoCol);
    };
    return PerGlobalInfoColRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoColRequestBuilder = PerGlobalInfoColRequestBuilder;
//# sourceMappingURL=PerGlobalInfoColRequestBuilder.js.map