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
var ExtAddressInfo_1 = require("./ExtAddressInfo");
/**
 * Request builder class for operations supported on the [[ExtAddressInfo]] entity.
 */
var ExtAddressInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(ExtAddressInfoRequestBuilder, _super);
    function ExtAddressInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExtAddressInfo` entity based on its keys.
     * @param addressId Key property. See [[ExtAddressInfo.addressId]].
     * @returns A request builder for creating requests to retrieve one `ExtAddressInfo` entity based on its keys.
     */
    ExtAddressInfoRequestBuilder.prototype.getByKey = function (addressId) {
        return new core_1.GetByKeyRequestBuilder(ExtAddressInfo_1.ExtAddressInfo, { addressId: addressId });
    };
    /**
     * Returns a request builder for querying all `ExtAddressInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExtAddressInfo` entities.
     */
    ExtAddressInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExtAddressInfo_1.ExtAddressInfo);
    };
    /**
     * Returns a request builder for creating a `ExtAddressInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtAddressInfo`.
     */
    ExtAddressInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExtAddressInfo_1.ExtAddressInfo, entity);
    };
    return ExtAddressInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.ExtAddressInfoRequestBuilder = ExtAddressInfoRequestBuilder;
//# sourceMappingURL=ExtAddressInfoRequestBuilder.js.map