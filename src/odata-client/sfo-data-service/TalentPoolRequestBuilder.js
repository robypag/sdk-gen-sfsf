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
var TalentPool_1 = require("./TalentPool");
/**
 * Request builder class for operations supported on the [[TalentPool]] entity.
 */
var TalentPoolRequestBuilder = /** @class */ (function (_super) {
    __extends(TalentPoolRequestBuilder, _super);
    function TalentPoolRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TalentPool` entity based on its keys.
     * @param code Key property. See [[TalentPool.code]].
     * @param effectiveStartDate Key property. See [[TalentPool.effectiveStartDate]].
     * @returns A request builder for creating requests to retrieve one `TalentPool` entity based on its keys.
     */
    TalentPoolRequestBuilder.prototype.getByKey = function (code, effectiveStartDate) {
        return new core_1.GetByKeyRequestBuilder(TalentPool_1.TalentPool, {
            code: code,
            effectiveStartDate: effectiveStartDate
        });
    };
    /**
     * Returns a request builder for querying all `TalentPool` entities.
     * @returns A request builder for creating requests to retrieve all `TalentPool` entities.
     */
    TalentPoolRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TalentPool_1.TalentPool);
    };
    /**
     * Returns a request builder for creating a `TalentPool` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TalentPool`.
     */
    TalentPoolRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(TalentPool_1.TalentPool, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TalentPool`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TalentPool`.
     */
    TalentPoolRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(TalentPool_1.TalentPool, entity);
    };
    TalentPoolRequestBuilder.prototype.delete = function (codeOrEntity, effectiveStartDate) {
        return new core_1.DeleteRequestBuilder(TalentPool_1.TalentPool, codeOrEntity instanceof TalentPool_1.TalentPool ? codeOrEntity : {
            code: codeOrEntity,
            effectiveStartDate: effectiveStartDate
        });
    };
    return TalentPoolRequestBuilder;
}(core_1.RequestBuilder));
exports.TalentPoolRequestBuilder = TalentPoolRequestBuilder;
//# sourceMappingURL=TalentPoolRequestBuilder.js.map