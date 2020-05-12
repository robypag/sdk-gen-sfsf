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
var Background_VarPayEmpHistDataInt_1 = require("./Background_VarPayEmpHistDataInt");
/**
 * Request builder class for operations supported on the [[Background_VarPayEmpHistDataInt]] entity.
 */
var Background_VarPayEmpHistDataIntRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_VarPayEmpHistDataIntRequestBuilder, _super);
    function Background_VarPayEmpHistDataIntRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_VarPayEmpHistDataInt` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_VarPayEmpHistDataInt.backgroundElementId]].
     * @returns A request builder for creating requests to retrieve one `Background_VarPayEmpHistDataInt` entity based on its keys.
     */
    Background_VarPayEmpHistDataIntRequestBuilder.prototype.getByKey = function (backgroundElementId) {
        return new core_1.GetByKeyRequestBuilder(Background_VarPayEmpHistDataInt_1.Background_VarPayEmpHistDataInt, { backgroundElementId: backgroundElementId });
    };
    /**
     * Returns a request builder for querying all `Background_VarPayEmpHistDataInt` entities.
     * @returns A request builder for creating requests to retrieve all `Background_VarPayEmpHistDataInt` entities.
     */
    Background_VarPayEmpHistDataIntRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_VarPayEmpHistDataInt_1.Background_VarPayEmpHistDataInt);
    };
    /**
     * Returns a request builder for creating a `Background_VarPayEmpHistDataInt` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_VarPayEmpHistDataInt`.
     */
    Background_VarPayEmpHistDataIntRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_VarPayEmpHistDataInt_1.Background_VarPayEmpHistDataInt, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_VarPayEmpHistDataInt`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_VarPayEmpHistDataInt`.
     */
    Background_VarPayEmpHistDataIntRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_VarPayEmpHistDataInt_1.Background_VarPayEmpHistDataInt, entity);
    };
    Background_VarPayEmpHistDataIntRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity) {
        return new core_1.DeleteRequestBuilder(Background_VarPayEmpHistDataInt_1.Background_VarPayEmpHistDataInt, backgroundElementIdOrEntity instanceof Background_VarPayEmpHistDataInt_1.Background_VarPayEmpHistDataInt ? backgroundElementIdOrEntity : { backgroundElementId: backgroundElementIdOrEntity });
    };
    return Background_VarPayEmpHistDataIntRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_VarPayEmpHistDataIntRequestBuilder = Background_VarPayEmpHistDataIntRequestBuilder;
//# sourceMappingURL=Background_VarPayEmpHistDataIntRequestBuilder.js.map