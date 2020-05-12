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
var GoalComment_1_1 = require("./GoalComment_1");
/**
 * Request builder class for operations supported on the [[GoalComment_1]] entity.
 */
var GoalComment_1RequestBuilder = /** @class */ (function (_super) {
    __extends(GoalComment_1RequestBuilder, _super);
    function GoalComment_1RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `GoalComment_1` entity based on its keys.
     * @param id Key property. See [[GoalComment_1.id]].
     * @returns A request builder for creating requests to retrieve one `GoalComment_1` entity based on its keys.
     */
    GoalComment_1RequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(GoalComment_1_1.GoalComment_1, { id: id });
    };
    /**
     * Returns a request builder for querying all `GoalComment_1` entities.
     * @returns A request builder for creating requests to retrieve all `GoalComment_1` entities.
     */
    GoalComment_1RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(GoalComment_1_1.GoalComment_1);
    };
    /**
     * Returns a request builder for creating a `GoalComment_1` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GoalComment_1`.
     */
    GoalComment_1RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(GoalComment_1_1.GoalComment_1, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `GoalComment_1`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GoalComment_1`.
     */
    GoalComment_1RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(GoalComment_1_1.GoalComment_1, entity);
    };
    GoalComment_1RequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(GoalComment_1_1.GoalComment_1, idOrEntity instanceof GoalComment_1_1.GoalComment_1 ? idOrEntity : { id: idOrEntity });
    };
    return GoalComment_1RequestBuilder;
}(core_1.RequestBuilder));
exports.GoalComment_1RequestBuilder = GoalComment_1RequestBuilder;
//# sourceMappingURL=GoalComment_1RequestBuilder.js.map