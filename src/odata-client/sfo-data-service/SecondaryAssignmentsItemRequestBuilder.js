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
var SecondaryAssignmentsItem_1 = require("./SecondaryAssignmentsItem");
/**
 * Request builder class for operations supported on the [[SecondaryAssignmentsItem]] entity.
 */
var SecondaryAssignmentsItemRequestBuilder = /** @class */ (function (_super) {
    __extends(SecondaryAssignmentsItemRequestBuilder, _super);
    function SecondaryAssignmentsItemRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SecondaryAssignmentsItem` entity based on its keys.
     * @param secondaryAssignmentsEffectiveStartDate Key property. See [[SecondaryAssignmentsItem.secondaryAssignmentsEffectiveStartDate]].
     * @param secondaryAssignmentsExternalCode Key property. See [[SecondaryAssignmentsItem.secondaryAssignmentsExternalCode]].
     * @param externalCode Key property. See [[SecondaryAssignmentsItem.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SecondaryAssignmentsItem` entity based on its keys.
     */
    SecondaryAssignmentsItemRequestBuilder.prototype.getByKey = function (secondaryAssignmentsEffectiveStartDate, secondaryAssignmentsExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SecondaryAssignmentsItem_1.SecondaryAssignmentsItem, {
            SecondaryAssignments_effectiveStartDate: secondaryAssignmentsEffectiveStartDate,
            SecondaryAssignments_externalCode: secondaryAssignmentsExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SecondaryAssignmentsItem` entities.
     * @returns A request builder for creating requests to retrieve all `SecondaryAssignmentsItem` entities.
     */
    SecondaryAssignmentsItemRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SecondaryAssignmentsItem_1.SecondaryAssignmentsItem);
    };
    /**
     * Returns a request builder for creating a `SecondaryAssignmentsItem` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SecondaryAssignmentsItem`.
     */
    SecondaryAssignmentsItemRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SecondaryAssignmentsItem_1.SecondaryAssignmentsItem, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SecondaryAssignmentsItem`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SecondaryAssignmentsItem`.
     */
    SecondaryAssignmentsItemRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SecondaryAssignmentsItem_1.SecondaryAssignmentsItem, entity);
    };
    SecondaryAssignmentsItemRequestBuilder.prototype.delete = function (secondaryAssignmentsEffectiveStartDateOrEntity, secondaryAssignmentsExternalCode, externalCode) {
        return new core_1.DeleteRequestBuilder(SecondaryAssignmentsItem_1.SecondaryAssignmentsItem, secondaryAssignmentsEffectiveStartDateOrEntity instanceof SecondaryAssignmentsItem_1.SecondaryAssignmentsItem ? secondaryAssignmentsEffectiveStartDateOrEntity : {
            SecondaryAssignments_effectiveStartDate: secondaryAssignmentsEffectiveStartDateOrEntity,
            SecondaryAssignments_externalCode: secondaryAssignmentsExternalCode,
            externalCode: externalCode
        });
    };
    return SecondaryAssignmentsItemRequestBuilder;
}(core_1.RequestBuilder));
exports.SecondaryAssignmentsItemRequestBuilder = SecondaryAssignmentsItemRequestBuilder;
//# sourceMappingURL=SecondaryAssignmentsItemRequestBuilder.js.map