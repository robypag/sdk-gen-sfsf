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
var PersonTypeUsage_1 = require("./PersonTypeUsage");
/**
 * Request builder class for operations supported on the [[PersonTypeUsage]] entity.
 */
var PersonTypeUsageRequestBuilder = /** @class */ (function (_super) {
    __extends(PersonTypeUsageRequestBuilder, _super);
    function PersonTypeUsageRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PersonTypeUsage` entity based on its keys.
     * @param externalCode Key property. See [[PersonTypeUsage.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PersonTypeUsage` entity based on its keys.
     */
    PersonTypeUsageRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(PersonTypeUsage_1.PersonTypeUsage, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `PersonTypeUsage` entities.
     * @returns A request builder for creating requests to retrieve all `PersonTypeUsage` entities.
     */
    PersonTypeUsageRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PersonTypeUsage_1.PersonTypeUsage);
    };
    return PersonTypeUsageRequestBuilder;
}(core_1.RequestBuilder));
exports.PersonTypeUsageRequestBuilder = PersonTypeUsageRequestBuilder;
//# sourceMappingURL=PersonTypeUsageRequestBuilder.js.map