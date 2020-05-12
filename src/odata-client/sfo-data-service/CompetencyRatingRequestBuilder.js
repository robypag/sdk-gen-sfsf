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
var CompetencyRating_1 = require("./CompetencyRating");
/**
 * Request builder class for operations supported on the [[CompetencyRating]] entity.
 */
var CompetencyRatingRequestBuilder = /** @class */ (function (_super) {
    __extends(CompetencyRatingRequestBuilder, _super);
    function CompetencyRatingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CompetencyRating` entity based on its keys.
     * @param id Key property. See [[CompetencyRating.id]].
     * @returns A request builder for creating requests to retrieve one `CompetencyRating` entity based on its keys.
     */
    CompetencyRatingRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(CompetencyRating_1.CompetencyRating, { id: id });
    };
    /**
     * Returns a request builder for querying all `CompetencyRating` entities.
     * @returns A request builder for creating requests to retrieve all `CompetencyRating` entities.
     */
    CompetencyRatingRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CompetencyRating_1.CompetencyRating);
    };
    /**
     * Returns a request builder for creating a `CompetencyRating` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CompetencyRating`.
     */
    CompetencyRatingRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CompetencyRating_1.CompetencyRating, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CompetencyRating`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CompetencyRating`.
     */
    CompetencyRatingRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CompetencyRating_1.CompetencyRating, entity);
    };
    CompetencyRatingRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilder(CompetencyRating_1.CompetencyRating, idOrEntity instanceof CompetencyRating_1.CompetencyRating ? idOrEntity : { id: idOrEntity });
    };
    return CompetencyRatingRequestBuilder;
}(core_1.RequestBuilder));
exports.CompetencyRatingRequestBuilder = CompetencyRatingRequestBuilder;
//# sourceMappingURL=CompetencyRatingRequestBuilder.js.map