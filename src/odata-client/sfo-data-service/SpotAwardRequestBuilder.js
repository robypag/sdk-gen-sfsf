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
var SpotAward_1 = require("./SpotAward");
/**
 * Request builder class for operations supported on the [[SpotAward]] entity.
 */
var SpotAwardRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardRequestBuilder, _super);
    function SpotAwardRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAward` entity based on its keys.
     * @param externalCode Key property. See [[SpotAward.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAward` entity based on its keys.
     */
    SpotAwardRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAward_1.SpotAward, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `SpotAward` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAward` entities.
     */
    SpotAwardRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAward_1.SpotAward);
    };
    /**
     * Returns a request builder for creating a `SpotAward` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAward`.
     */
    SpotAwardRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAward_1.SpotAward, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAward`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAward`.
     */
    SpotAwardRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAward_1.SpotAward, entity);
    };
    SpotAwardRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(SpotAward_1.SpotAward, externalCodeOrEntity instanceof SpotAward_1.SpotAward ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return SpotAwardRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardRequestBuilder = SpotAwardRequestBuilder;
//# sourceMappingURL=SpotAwardRequestBuilder.js.map