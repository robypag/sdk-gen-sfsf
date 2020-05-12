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
var SecondaryAssignments_1 = require("./SecondaryAssignments");
/**
 * Request builder class for operations supported on the [[SecondaryAssignments]] entity.
 */
var SecondaryAssignmentsRequestBuilder = /** @class */ (function (_super) {
    __extends(SecondaryAssignmentsRequestBuilder, _super);
    function SecondaryAssignmentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SecondaryAssignments` entity based on its keys.
     * @param effectiveStartDate Key property. See [[SecondaryAssignments.effectiveStartDate]].
     * @param externalCode Key property. See [[SecondaryAssignments.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SecondaryAssignments` entity based on its keys.
     */
    SecondaryAssignmentsRequestBuilder.prototype.getByKey = function (effectiveStartDate, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SecondaryAssignments_1.SecondaryAssignments, {
            effectiveStartDate: effectiveStartDate,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SecondaryAssignments` entities.
     * @returns A request builder for creating requests to retrieve all `SecondaryAssignments` entities.
     */
    SecondaryAssignmentsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SecondaryAssignments_1.SecondaryAssignments);
    };
    /**
     * Returns a request builder for creating a `SecondaryAssignments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SecondaryAssignments`.
     */
    SecondaryAssignmentsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SecondaryAssignments_1.SecondaryAssignments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SecondaryAssignments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SecondaryAssignments`.
     */
    SecondaryAssignmentsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SecondaryAssignments_1.SecondaryAssignments, entity);
    };
    SecondaryAssignmentsRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SecondaryAssignments_1.SecondaryAssignments, effectiveStartDateOrEntity instanceof SecondaryAssignments_1.SecondaryAssignments ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            externalCode: externalCode
        });
    };
    return SecondaryAssignmentsRequestBuilder;
}(core_1.RequestBuilder));
exports.SecondaryAssignmentsRequestBuilder = SecondaryAssignmentsRequestBuilder;
//# sourceMappingURL=SecondaryAssignmentsRequestBuilder.js.map