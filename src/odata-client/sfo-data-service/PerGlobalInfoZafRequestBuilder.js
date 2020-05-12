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
var PerGlobalInfoZaf_1 = require("./PerGlobalInfoZaf");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoZaf]] entity.
 */
var PerGlobalInfoZafRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoZafRequestBuilder, _super);
    function PerGlobalInfoZafRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoZaf` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoZaf.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoZaf.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoZaf.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoZaf` entity based on its keys.
     */
    PerGlobalInfoZafRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoZaf_1.PerGlobalInfoZaf, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoZaf` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoZaf` entities.
     */
    PerGlobalInfoZafRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoZaf_1.PerGlobalInfoZaf);
    };
    return PerGlobalInfoZafRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoZafRequestBuilder = PerGlobalInfoZafRequestBuilder;
//# sourceMappingURL=PerGlobalInfoZafRequestBuilder.js.map