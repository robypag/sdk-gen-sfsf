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
var Background_VarPayEmpHistData_1 = require("./Background_VarPayEmpHistData");
/**
 * Request builder class for operations supported on the [[Background_VarPayEmpHistData]] entity.
 */
var Background_VarPayEmpHistDataRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_VarPayEmpHistDataRequestBuilder, _super);
    function Background_VarPayEmpHistDataRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_VarPayEmpHistData` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_VarPayEmpHistData.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `Background_VarPayEmpHistData` entity based on its keys.
     */
    Background_VarPayEmpHistDataRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new core_1.GetByKeyRequestBuilder(Background_VarPayEmpHistData_1.Background_VarPayEmpHistData, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `Background_VarPayEmpHistData` entities.
     * @returns A request builder for creating requests to retrieve all `Background_VarPayEmpHistData` entities.
     */
    Background_VarPayEmpHistDataRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_VarPayEmpHistData_1.Background_VarPayEmpHistData);
    };
    /**
     * Returns a request builder for creating a `Background_VarPayEmpHistData` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_VarPayEmpHistData`.
     */
    Background_VarPayEmpHistDataRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_VarPayEmpHistData_1.Background_VarPayEmpHistData, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_VarPayEmpHistData`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_VarPayEmpHistData`.
     */
    Background_VarPayEmpHistDataRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_VarPayEmpHistData_1.Background_VarPayEmpHistData, entity);
    };
    Background_VarPayEmpHistDataRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity) {
        return new core_1.DeleteRequestBuilder(Background_VarPayEmpHistData_1.Background_VarPayEmpHistData, backgroundElementIdOrEntity instanceof Background_VarPayEmpHistData_1.Background_VarPayEmpHistData ? backgroundElementIdOrEntity : { backgroundElementId: backgroundElementIdOrEntity });
    };
    return Background_VarPayEmpHistDataRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_VarPayEmpHistDataRequestBuilder = Background_VarPayEmpHistDataRequestBuilder;
//# sourceMappingURL=Background_VarPayEmpHistDataRequestBuilder.js.map