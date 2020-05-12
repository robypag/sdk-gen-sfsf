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
var PickListV2_1 = require("./PickListV2");
/**
 * Request builder class for operations supported on the [[PickListV2]] entity.
 */
var PickListV2RequestBuilder = /** @class */ (function (_super) {
    __extends(PickListV2RequestBuilder, _super);
    function PickListV2RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PickListV2` entity based on its keys.
     * @param effectiveStartDate Key property. See [[PickListV2.effectiveStartDate]].
     * @param id Key property. See [[PickListV2.id]].
     * @returns A request builder for creating requests to retrieve one `PickListV2` entity based on its keys.
     */
    PickListV2RequestBuilder.prototype.getByKey = function (effectiveStartDate, id) {
        return new core_1.GetByKeyRequestBuilder(PickListV2_1.PickListV2, {
            effectiveStartDate: effectiveStartDate,
            id: id
        });
    };
    /**
     * Returns a request builder for querying all `PickListV2` entities.
     * @returns A request builder for creating requests to retrieve all `PickListV2` entities.
     */
    PickListV2RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PickListV2_1.PickListV2);
    };
    /**
     * Returns a request builder for creating a `PickListV2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PickListV2`.
     */
    PickListV2RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PickListV2_1.PickListV2, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PickListV2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PickListV2`.
     */
    PickListV2RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PickListV2_1.PickListV2, entity);
    };
    PickListV2RequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, id) {
        return new core_1.DeleteRequestBuilder(PickListV2_1.PickListV2, effectiveStartDateOrEntity instanceof PickListV2_1.PickListV2 ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            id: id
        });
    };
    return PickListV2RequestBuilder;
}(core_1.RequestBuilder));
exports.PickListV2RequestBuilder = PickListV2RequestBuilder;
//# sourceMappingURL=PickListV2RequestBuilder.js.map