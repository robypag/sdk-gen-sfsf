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
var CustomPayTypeAssignment_1 = require("./CustomPayTypeAssignment");
/**
 * Request builder class for operations supported on the [[CustomPayTypeAssignment]] entity.
 */
var CustomPayTypeAssignmentRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomPayTypeAssignmentRequestBuilder, _super);
    function CustomPayTypeAssignmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomPayTypeAssignment` entity based on its keys.
     * @param customPayTypeExternalCode Key property. See [[CustomPayTypeAssignment.customPayTypeExternalCode]].
     * @param externalCode Key property. See [[CustomPayTypeAssignment.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CustomPayTypeAssignment` entity based on its keys.
     */
    CustomPayTypeAssignmentRequestBuilder.prototype.getByKey = function (customPayTypeExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(CustomPayTypeAssignment_1.CustomPayTypeAssignment, {
            CustomPayType_externalCode: customPayTypeExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `CustomPayTypeAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `CustomPayTypeAssignment` entities.
     */
    CustomPayTypeAssignmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CustomPayTypeAssignment_1.CustomPayTypeAssignment);
    };
    /**
     * Returns a request builder for creating a `CustomPayTypeAssignment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomPayTypeAssignment`.
     */
    CustomPayTypeAssignmentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CustomPayTypeAssignment_1.CustomPayTypeAssignment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomPayTypeAssignment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomPayTypeAssignment`.
     */
    CustomPayTypeAssignmentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CustomPayTypeAssignment_1.CustomPayTypeAssignment, entity);
    };
    CustomPayTypeAssignmentRequestBuilder.prototype.delete = function (customPayTypeExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(CustomPayTypeAssignment_1.CustomPayTypeAssignment, customPayTypeExternalCodeOrEntity instanceof CustomPayTypeAssignment_1.CustomPayTypeAssignment ? customPayTypeExternalCodeOrEntity : {
            CustomPayType_externalCode: customPayTypeExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return CustomPayTypeAssignmentRequestBuilder;
}(core_1.RequestBuilder));
exports.CustomPayTypeAssignmentRequestBuilder = CustomPayTypeAssignmentRequestBuilder;
//# sourceMappingURL=CustomPayTypeAssignmentRequestBuilder.js.map