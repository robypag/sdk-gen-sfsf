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
var PerGlobalInfoNld_1 = require("./PerGlobalInfoNld");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoNld]] entity.
 */
var PerGlobalInfoNldRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoNldRequestBuilder, _super);
    function PerGlobalInfoNldRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoNld` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoNld.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoNld.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoNld.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoNld` entity based on its keys.
     */
    PerGlobalInfoNldRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoNld_1.PerGlobalInfoNld, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoNld` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoNld` entities.
     */
    PerGlobalInfoNldRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoNld_1.PerGlobalInfoNld);
    };
    return PerGlobalInfoNldRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoNldRequestBuilder = PerGlobalInfoNldRequestBuilder;
//# sourceMappingURL=PerGlobalInfoNldRequestBuilder.js.map