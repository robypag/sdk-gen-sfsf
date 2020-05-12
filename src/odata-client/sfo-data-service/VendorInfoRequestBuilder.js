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
var VendorInfo_1 = require("./VendorInfo");
/**
 * Request builder class for operations supported on the [[VendorInfo]] entity.
 */
var VendorInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(VendorInfoRequestBuilder, _super);
    function VendorInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `VendorInfo` entity based on its keys.
     * @param effectiveStartDate Key property. See [[VendorInfo.effectiveStartDate]].
     * @param vendorCode Key property. See [[VendorInfo.vendorCode]].
     * @returns A request builder for creating requests to retrieve one `VendorInfo` entity based on its keys.
     */
    VendorInfoRequestBuilder.prototype.getByKey = function (effectiveStartDate, vendorCode) {
        return new core_1.GetByKeyRequestBuilder(VendorInfo_1.VendorInfo, {
            effectiveStartDate: effectiveStartDate,
            vendorCode: vendorCode
        });
    };
    /**
     * Returns a request builder for querying all `VendorInfo` entities.
     * @returns A request builder for creating requests to retrieve all `VendorInfo` entities.
     */
    VendorInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(VendorInfo_1.VendorInfo);
    };
    /**
     * Returns a request builder for creating a `VendorInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `VendorInfo`.
     */
    VendorInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(VendorInfo_1.VendorInfo, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `VendorInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `VendorInfo`.
     */
    VendorInfoRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(VendorInfo_1.VendorInfo, entity);
    };
    VendorInfoRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, vendorCode) {
        return new core_1.DeleteRequestBuilder(VendorInfo_1.VendorInfo, effectiveStartDateOrEntity instanceof VendorInfo_1.VendorInfo ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            vendorCode: vendorCode
        });
    };
    return VendorInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.VendorInfoRequestBuilder = VendorInfoRequestBuilder;
//# sourceMappingURL=VendorInfoRequestBuilder.js.map