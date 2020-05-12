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
var FoPayGroup_1 = require("./FoPayGroup");
/**
 * Request builder class for operations supported on the [[FoPayGroup]] entity.
 */
var FoPayGroupRequestBuilder = /** @class */ (function (_super) {
    __extends(FoPayGroupRequestBuilder, _super);
    function FoPayGroupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoPayGroup` entity based on its keys.
     * @param externalCode Key property. See [[FoPayGroup.externalCode]].
     * @param startDate Key property. See [[FoPayGroup.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoPayGroup` entity based on its keys.
     */
    FoPayGroupRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoPayGroup_1.FoPayGroup, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoPayGroup` entities.
     * @returns A request builder for creating requests to retrieve all `FoPayGroup` entities.
     */
    FoPayGroupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoPayGroup_1.FoPayGroup);
    };
    /**
     * Returns a request builder for creating a `FoPayGroup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FoPayGroup`.
     */
    FoPayGroupRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FoPayGroup_1.FoPayGroup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FoPayGroup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FoPayGroup`.
     */
    FoPayGroupRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FoPayGroup_1.FoPayGroup, entity);
    };
    FoPayGroupRequestBuilder.prototype.delete = function (externalCodeOrEntity, startDate) {
        return new core_1.DeleteRequestBuilder(FoPayGroup_1.FoPayGroup, externalCodeOrEntity instanceof FoPayGroup_1.FoPayGroup ? externalCodeOrEntity : {
            externalCode: externalCodeOrEntity,
            startDate: startDate
        });
    };
    return FoPayGroupRequestBuilder;
}(core_1.RequestBuilder));
exports.FoPayGroupRequestBuilder = FoPayGroupRequestBuilder;
//# sourceMappingURL=FoPayGroupRequestBuilder.js.map