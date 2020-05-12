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
var Background_Courses_1 = require("./Background_Courses");
/**
 * Request builder class for operations supported on the [[Background_Courses]] entity.
 */
var Background_CoursesRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_CoursesRequestBuilder, _super);
    function Background_CoursesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Courses` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Courses.backgroundElementId]].
     * @param userId Key property. See [[Background_Courses.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Courses` entity based on its keys.
     */
    Background_CoursesRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Courses_1.Background_Courses, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Courses` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Courses` entities.
     */
    Background_CoursesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Courses_1.Background_Courses);
    };
    /**
     * Returns a request builder for creating a `Background_Courses` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Courses`.
     */
    Background_CoursesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Courses_1.Background_Courses, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Courses`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Courses`.
     */
    Background_CoursesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Courses_1.Background_Courses, entity);
    };
    Background_CoursesRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Courses_1.Background_Courses, backgroundElementIdOrEntity instanceof Background_Courses_1.Background_Courses ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_CoursesRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_CoursesRequestBuilder = Background_CoursesRequestBuilder;
//# sourceMappingURL=Background_CoursesRequestBuilder.js.map