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
var DevGoal_2005_1 = require("./DevGoal_2005");
/**
 * Request builder class for operations supported on the [[DevGoal_2005]] entity.
 */
var DevGoal_2005RequestBuilder = /** @class */ (function (_super) {
    __extends(DevGoal_2005RequestBuilder, _super);
    function DevGoal_2005RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DevGoal_2005` entity based on its keys.
     * @param id Key property. See [[DevGoal_2005.id]].
     * @returns A request builder for creating requests to retrieve one `DevGoal_2005` entity based on its keys.
     */
    DevGoal_2005RequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(DevGoal_2005_1.DevGoal_2005, { id: id });
    };
    /**
     * Returns a request builder for querying all `DevGoal_2005` entities.
     * @returns A request builder for creating requests to retrieve all `DevGoal_2005` entities.
     */
    DevGoal_2005RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DevGoal_2005_1.DevGoal_2005);
    };
    /**
     * Returns a request builder for creating a `DevGoal_2005` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DevGoal_2005`.
     */
    DevGoal_2005RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(DevGoal_2005_1.DevGoal_2005, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DevGoal_2005`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DevGoal_2005`.
     */
    DevGoal_2005RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(DevGoal_2005_1.DevGoal_2005, entity);
    };
    DevGoal_2005RequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(DevGoal_2005_1.DevGoal_2005, idOrEntity instanceof DevGoal_2005_1.DevGoal_2005 ? idOrEntity : { id: idOrEntity });
    };
    return DevGoal_2005RequestBuilder;
}(core_1.RequestBuilder));
exports.DevGoal_2005RequestBuilder = DevGoal_2005RequestBuilder;
//# sourceMappingURL=DevGoal_2005RequestBuilder.js.map