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
var AssignTeamGoal_1 = require("./AssignTeamGoal");
/**
 * Request builder class for operations supported on the [[AssignTeamGoal]] entity.
 */
var AssignTeamGoalRequestBuilder = /** @class */ (function (_super) {
    __extends(AssignTeamGoalRequestBuilder, _super);
    function AssignTeamGoalRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AssignTeamGoal` entity based on its keys.
     * @param id Key property. See [[AssignTeamGoal.id]].
     * @returns A request builder for creating requests to retrieve one `AssignTeamGoal` entity based on its keys.
     */
    AssignTeamGoalRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(AssignTeamGoal_1.AssignTeamGoal, { id: id });
    };
    /**
     * Returns a request builder for querying all `AssignTeamGoal` entities.
     * @returns A request builder for creating requests to retrieve all `AssignTeamGoal` entities.
     */
    AssignTeamGoalRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(AssignTeamGoal_1.AssignTeamGoal);
    };
    /**
     * Returns a request builder for creating a `AssignTeamGoal` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssignTeamGoal`.
     */
    AssignTeamGoalRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(AssignTeamGoal_1.AssignTeamGoal, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssignTeamGoal`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssignTeamGoal`.
     */
    AssignTeamGoalRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(AssignTeamGoal_1.AssignTeamGoal, entity);
    };
    AssignTeamGoalRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(AssignTeamGoal_1.AssignTeamGoal, idOrEntity instanceof AssignTeamGoal_1.AssignTeamGoal ? idOrEntity : { id: idOrEntity });
    };
    return AssignTeamGoalRequestBuilder;
}(core_1.RequestBuilder));
exports.AssignTeamGoalRequestBuilder = AssignTeamGoalRequestBuilder;
//# sourceMappingURL=AssignTeamGoalRequestBuilder.js.map