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
var PerGlobalInfoNzl_1 = require("./PerGlobalInfoNzl");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoNzl]] entity.
 */
var PerGlobalInfoNzlRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoNzlRequestBuilder, _super);
    function PerGlobalInfoNzlRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoNzl` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoNzl.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoNzl.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoNzl.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoNzl` entity based on its keys.
     */
    PerGlobalInfoNzlRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoNzl_1.PerGlobalInfoNzl, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoNzl` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoNzl` entities.
     */
    PerGlobalInfoNzlRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoNzl_1.PerGlobalInfoNzl);
    };
    return PerGlobalInfoNzlRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoNzlRequestBuilder = PerGlobalInfoNzlRequestBuilder;
//# sourceMappingURL=PerGlobalInfoNzlRequestBuilder.js.map