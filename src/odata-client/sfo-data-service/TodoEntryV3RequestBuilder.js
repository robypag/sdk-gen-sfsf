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
var TodoEntryV3_1 = require("./TodoEntryV3");
/**
 * Request builder class for operations supported on the [[TodoEntryV3]] entity.
 */
var TodoEntryV3RequestBuilder = /** @class */ (function (_super) {
    __extends(TodoEntryV3RequestBuilder, _super);
    function TodoEntryV3RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TodoEntryV3` entity based on its keys.
     * @param todoEntryId Key property. See [[TodoEntryV3.todoEntryId]].
     * @returns A request builder for creating requests to retrieve one `TodoEntryV3` entity based on its keys.
     */
    TodoEntryV3RequestBuilder.prototype.getByKey = function (todoEntryId) {
        return new core_1.GetByKeyRequestBuilder(TodoEntryV3_1.TodoEntryV3, { todoEntryId: todoEntryId });
    };
    /**
     * Returns a request builder for querying all `TodoEntryV3` entities.
     * @returns A request builder for creating requests to retrieve all `TodoEntryV3` entities.
     */
    TodoEntryV3RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TodoEntryV3_1.TodoEntryV3);
    };
    /**
     * Returns a request builder for creating a `TodoEntryV3` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TodoEntryV3`.
     */
    TodoEntryV3RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TodoEntryV3_1.TodoEntryV3, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TodoEntryV3`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TodoEntryV3`.
     */
    TodoEntryV3RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TodoEntryV3_1.TodoEntryV3, entity);
    };
    TodoEntryV3RequestBuilder.prototype.delete = function (todoEntryIdOrEntity) {
        return new core_1.DeleteRequestBuilder(TodoEntryV3_1.TodoEntryV3, todoEntryIdOrEntity instanceof TodoEntryV3_1.TodoEntryV3 ? todoEntryIdOrEntity : { todoEntryId: todoEntryIdOrEntity });
    };
    return TodoEntryV3RequestBuilder;
}(core_1.RequestBuilder));
exports.TodoEntryV3RequestBuilder = TodoEntryV3RequestBuilder;
//# sourceMappingURL=TodoEntryV3RequestBuilder.js.map