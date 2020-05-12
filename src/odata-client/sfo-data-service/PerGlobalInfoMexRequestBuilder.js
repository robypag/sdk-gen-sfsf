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
var PerGlobalInfoMex_1 = require("./PerGlobalInfoMex");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoMex]] entity.
 */
var PerGlobalInfoMexRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoMexRequestBuilder, _super);
    function PerGlobalInfoMexRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoMex` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoMex.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoMex.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoMex.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoMex` entity based on its keys.
     */
    PerGlobalInfoMexRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoMex_1.PerGlobalInfoMex, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoMex` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoMex` entities.
     */
    PerGlobalInfoMexRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoMex_1.PerGlobalInfoMex);
    };
    return PerGlobalInfoMexRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoMexRequestBuilder = PerGlobalInfoMexRequestBuilder;
//# sourceMappingURL=PerGlobalInfoMexRequestBuilder.js.map