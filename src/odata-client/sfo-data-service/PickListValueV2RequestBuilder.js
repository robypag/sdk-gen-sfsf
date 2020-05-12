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
var PickListValueV2_1 = require("./PickListValueV2");
/**
 * Request builder class for operations supported on the [[PickListValueV2]] entity.
 */
var PickListValueV2RequestBuilder = /** @class */ (function (_super) {
    __extends(PickListValueV2RequestBuilder, _super);
    function PickListValueV2RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PickListValueV2` entity based on its keys.
     * @param pickListV2EffectiveStartDate Key property. See [[PickListValueV2.pickListV2EffectiveStartDate]].
     * @param pickListV2Id Key property. See [[PickListValueV2.pickListV2Id]].
     * @param externalCode Key property. See [[PickListValueV2.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PickListValueV2` entity based on its keys.
     */
    PickListValueV2RequestBuilder.prototype.getByKey = function (pickListV2EffectiveStartDate, pickListV2Id, externalCode) {
        return new core_1.GetByKeyRequestBuilder(PickListValueV2_1.PickListValueV2, {
            PickListV2_effectiveStartDate: pickListV2EffectiveStartDate,
            PickListV2_id: pickListV2Id,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `PickListValueV2` entities.
     * @returns A request builder for creating requests to retrieve all `PickListValueV2` entities.
     */
    PickListValueV2RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PickListValueV2_1.PickListValueV2);
    };
    /**
     * Returns a request builder for creating a `PickListValueV2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PickListValueV2`.
     */
    PickListValueV2RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(PickListValueV2_1.PickListValueV2, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PickListValueV2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PickListValueV2`.
     */
    PickListValueV2RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(PickListValueV2_1.PickListValueV2, entity);
    };
    PickListValueV2RequestBuilder.prototype.delete = function (pickListV2EffectiveStartDateOrEntity, pickListV2Id, externalCode) {
        return new core_1.DeleteRequestBuilder(PickListValueV2_1.PickListValueV2, pickListV2EffectiveStartDateOrEntity instanceof PickListValueV2_1.PickListValueV2 ? pickListV2EffectiveStartDateOrEntity : {
            PickListV2_effectiveStartDate: pickListV2EffectiveStartDateOrEntity,
            PickListV2_id: pickListV2Id,
            externalCode: externalCode
        });
    };
    return PickListValueV2RequestBuilder;
}(core_1.RequestBuilder));
exports.PickListValueV2RequestBuilder = PickListValueV2RequestBuilder;
//# sourceMappingURL=PickListValueV2RequestBuilder.js.map