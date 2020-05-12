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
var PerGlobalInfoIta_1 = require("./PerGlobalInfoIta");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoIta]] entity.
 */
var PerGlobalInfoItaRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoItaRequestBuilder, _super);
    function PerGlobalInfoItaRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoIta` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoIta.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoIta.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoIta.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoIta` entity based on its keys.
     */
    PerGlobalInfoItaRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoIta_1.PerGlobalInfoIta, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoIta` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoIta` entities.
     */
    PerGlobalInfoItaRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoIta_1.PerGlobalInfoIta);
    };
    return PerGlobalInfoItaRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoItaRequestBuilder = PerGlobalInfoItaRequestBuilder;
//# sourceMappingURL=PerGlobalInfoItaRequestBuilder.js.map