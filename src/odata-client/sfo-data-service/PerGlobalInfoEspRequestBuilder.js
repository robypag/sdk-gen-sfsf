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
var PerGlobalInfoEsp_1 = require("./PerGlobalInfoEsp");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoEsp]] entity.
 */
var PerGlobalInfoEspRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoEspRequestBuilder, _super);
    function PerGlobalInfoEspRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoEsp` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoEsp.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoEsp.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoEsp.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoEsp` entity based on its keys.
     */
    PerGlobalInfoEspRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoEsp_1.PerGlobalInfoEsp, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoEsp` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoEsp` entities.
     */
    PerGlobalInfoEspRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoEsp_1.PerGlobalInfoEsp);
    };
    return PerGlobalInfoEspRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoEspRequestBuilder = PerGlobalInfoEspRequestBuilder;
//# sourceMappingURL=PerGlobalInfoEspRequestBuilder.js.map