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
var PerGlobalInfoChn_1 = require("./PerGlobalInfoChn");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoChn]] entity.
 */
var PerGlobalInfoChnRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoChnRequestBuilder, _super);
    function PerGlobalInfoChnRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoChn` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoChn.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoChn.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoChn.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoChn` entity based on its keys.
     */
    PerGlobalInfoChnRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoChn_1.PerGlobalInfoChn, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoChn` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoChn` entities.
     */
    PerGlobalInfoChnRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoChn_1.PerGlobalInfoChn);
    };
    return PerGlobalInfoChnRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoChnRequestBuilder = PerGlobalInfoChnRequestBuilder;
//# sourceMappingURL=PerGlobalInfoChnRequestBuilder.js.map