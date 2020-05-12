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
var PerGlobalInfoCan_1 = require("./PerGlobalInfoCan");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoCan]] entity.
 */
var PerGlobalInfoCanRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoCanRequestBuilder, _super);
    function PerGlobalInfoCanRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoCan` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoCan.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoCan.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoCan.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoCan` entity based on its keys.
     */
    PerGlobalInfoCanRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoCan_1.PerGlobalInfoCan, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoCan` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoCan` entities.
     */
    PerGlobalInfoCanRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoCan_1.PerGlobalInfoCan);
    };
    return PerGlobalInfoCanRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoCanRequestBuilder = PerGlobalInfoCanRequestBuilder;
//# sourceMappingURL=PerGlobalInfoCanRequestBuilder.js.map