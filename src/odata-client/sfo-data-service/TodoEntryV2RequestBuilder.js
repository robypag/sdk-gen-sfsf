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
var TodoEntryV2_1 = require("./TodoEntryV2");
/**
 * Request builder class for operations supported on the [[TodoEntryV2]] entity.
 */
var TodoEntryV2RequestBuilder = /** @class */ (function (_super) {
    __extends(TodoEntryV2RequestBuilder, _super);
    function TodoEntryV2RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TodoEntryV2` entity based on its keys.
     * @param todoEntryId Key property. See [[TodoEntryV2.todoEntryId]].
     * @returns A request builder for creating requests to retrieve one `TodoEntryV2` entity based on its keys.
     */
    TodoEntryV2RequestBuilder.prototype.getByKey = function (todoEntryId) {
        return new core_1.GetByKeyRequestBuilder(TodoEntryV2_1.TodoEntryV2, { todoEntryId: todoEntryId });
    };
    /**
     * Returns a request builder for querying all `TodoEntryV2` entities.
     * @returns A request builder for creating requests to retrieve all `TodoEntryV2` entities.
     */
    TodoEntryV2RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TodoEntryV2_1.TodoEntryV2);
    };
    /**
     * Returns a request builder for creating a `TodoEntryV2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TodoEntryV2`.
     */
    TodoEntryV2RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TodoEntryV2_1.TodoEntryV2, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TodoEntryV2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TodoEntryV2`.
     */
    TodoEntryV2RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TodoEntryV2_1.TodoEntryV2, entity);
    };
    TodoEntryV2RequestBuilder.prototype.delete = function (todoEntryIdOrEntity) {
        return new core_1.DeleteRequestBuilder(TodoEntryV2_1.TodoEntryV2, todoEntryIdOrEntity instanceof TodoEntryV2_1.TodoEntryV2 ? todoEntryIdOrEntity : { todoEntryId: todoEntryIdOrEntity });
    };
    return TodoEntryV2RequestBuilder;
}(core_1.RequestBuilder));
exports.TodoEntryV2RequestBuilder = TodoEntryV2RequestBuilder;
//# sourceMappingURL=TodoEntryV2RequestBuilder.js.map