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
var PerGlobalInfoSgp_1 = require("./PerGlobalInfoSgp");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoSgp]] entity.
 */
var PerGlobalInfoSgpRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoSgpRequestBuilder, _super);
    function PerGlobalInfoSgpRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoSgp` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoSgp.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoSgp.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoSgp.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoSgp` entity based on its keys.
     */
    PerGlobalInfoSgpRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoSgp_1.PerGlobalInfoSgp, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoSgp` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoSgp` entities.
     */
    PerGlobalInfoSgpRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoSgp_1.PerGlobalInfoSgp);
    };
    return PerGlobalInfoSgpRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoSgpRequestBuilder = PerGlobalInfoSgpRequestBuilder;
//# sourceMappingURL=PerGlobalInfoSgpRequestBuilder.js.map