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
var FoCorporateAddressDeflt_1 = require("./FoCorporateAddressDeflt");
/**
 * Request builder class for operations supported on the [[FoCorporateAddressDeflt]] entity.
 */
var FoCorporateAddressDefltRequestBuilder = /** @class */ (function (_super) {
    __extends(FoCorporateAddressDefltRequestBuilder, _super);
    function FoCorporateAddressDefltRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoCorporateAddressDeflt` entity based on its keys.
     * @param addressId Key property. See [[FoCorporateAddressDeflt.addressId]].
     * @returns A request builder for creating requests to retrieve one `FoCorporateAddressDeflt` entity based on its keys.
     */
    FoCorporateAddressDefltRequestBuilder.prototype.getByKey = function (addressId) {
        return new core_1.GetByKeyRequestBuilder(FoCorporateAddressDeflt_1.FoCorporateAddressDeflt, { addressId: addressId });
    };
    /**
     * Returns a request builder for querying all `FoCorporateAddressDeflt` entities.
     * @returns A request builder for creating requests to retrieve all `FoCorporateAddressDeflt` entities.
     */
    FoCorporateAddressDefltRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoCorporateAddressDeflt_1.FoCorporateAddressDeflt);
    };
    return FoCorporateAddressDefltRequestBuilder;
}(core_1.RequestBuilder));
exports.FoCorporateAddressDefltRequestBuilder = FoCorporateAddressDefltRequestBuilder;
//# sourceMappingURL=FoCorporateAddressDefltRequestBuilder.js.map