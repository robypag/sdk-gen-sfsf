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
var CompetencyType_1 = require("./CompetencyType");
/**
 * Request builder class for operations supported on the [[CompetencyType]] entity.
 */
var CompetencyTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(CompetencyTypeRequestBuilder, _super);
    function CompetencyTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CompetencyType` entity based on its keys.
     * @param guid Key property. See [[CompetencyType.guid]].
     * @returns A request builder for creating requests to retrieve one `CompetencyType` entity based on its keys.
     */
    CompetencyTypeRequestBuilder.prototype.getByKey = function (guid) {
        return new core_1.GetByKeyRequestBuilder(CompetencyType_1.CompetencyType, { GUID: guid });
    };
    /**
     * Returns a request builder for querying all `CompetencyType` entities.
     * @returns A request builder for creating requests to retrieve all `CompetencyType` entities.
     */
    CompetencyTypeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CompetencyType_1.CompetencyType);
    };
    /**
     * Returns a request builder for creating a `CompetencyType` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CompetencyType`.
     */
    CompetencyTypeRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CompetencyType_1.CompetencyType, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CompetencyType`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CompetencyType`.
     */
    CompetencyTypeRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CompetencyType_1.CompetencyType, entity);
    };
    CompetencyTypeRequestBuilder.prototype.delete = function (guidOrEntity) {
        return new core_1.DeleteRequestBuilder(CompetencyType_1.CompetencyType, guidOrEntity instanceof CompetencyType_1.CompetencyType ? guidOrEntity : { GUID: guidOrEntity });
    };
    return CompetencyTypeRequestBuilder;
}(core_1.RequestBuilder));
exports.CompetencyTypeRequestBuilder = CompetencyTypeRequestBuilder;
//# sourceMappingURL=CompetencyTypeRequestBuilder.js.map