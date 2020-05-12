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
var TimeZone_1 = require("./TimeZone");
/**
 * Request builder class for operations supported on the [[TimeZone]] entity.
 */
var TimeZoneRequestBuilder = /** @class */ (function (_super) {
    __extends(TimeZoneRequestBuilder, _super);
    function TimeZoneRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TimeZone` entity based on its keys.
     * @param effectiveStartDate Key property. See [[TimeZone.effectiveStartDate]].
     * @param externalCode Key property. See [[TimeZone.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeZone` entity based on its keys.
     */
    TimeZoneRequestBuilder.prototype.getByKey = function (effectiveStartDate, externalCode) {
        return new core_1.GetByKeyRequestBuilder(TimeZone_1.TimeZone, {
            effectiveStartDate: effectiveStartDate,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `TimeZone` entities.
     * @returns A request builder for creating requests to retrieve all `TimeZone` entities.
     */
    TimeZoneRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TimeZone_1.TimeZone);
    };
    /**
     * Returns a request builder for creating a `TimeZone` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TimeZone`.
     */
    TimeZoneRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TimeZone_1.TimeZone, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TimeZone`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TimeZone`.
     */
    TimeZoneRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TimeZone_1.TimeZone, entity);
    };
    TimeZoneRequestBuilder.prototype.delete = function (effectiveStartDateOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(TimeZone_1.TimeZone, effectiveStartDateOrEntity instanceof TimeZone_1.TimeZone ? effectiveStartDateOrEntity : {
            effectiveStartDate: effectiveStartDateOrEntity,
            externalCode: externalCode
        });
    };
    return TimeZoneRequestBuilder;
}(core_1.RequestBuilder));
exports.TimeZoneRequestBuilder = TimeZoneRequestBuilder;
//# sourceMappingURL=TimeZoneRequestBuilder.js.map