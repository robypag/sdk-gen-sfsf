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
var SpotAwardRedemption_1 = require("./SpotAwardRedemption");
/**
 * Request builder class for operations supported on the [[SpotAwardRedemption]] entity.
 */
var SpotAwardRedemptionRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardRedemptionRequestBuilder, _super);
    function SpotAwardRedemptionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardRedemption` entity based on its keys.
     * @param externalCode Key property. See [[SpotAwardRedemption.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardRedemption` entity based on its keys.
     */
    SpotAwardRedemptionRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardRedemption_1.SpotAwardRedemption, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `SpotAwardRedemption` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardRedemption` entities.
     */
    SpotAwardRedemptionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardRedemption_1.SpotAwardRedemption);
    };
    /**
     * Returns a request builder for creating a `SpotAwardRedemption` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardRedemption`.
     */
    SpotAwardRedemptionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardRedemption_1.SpotAwardRedemption, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardRedemption`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardRedemption`.
     */
    SpotAwardRedemptionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardRedemption_1.SpotAwardRedemption, entity);
    };
    SpotAwardRedemptionRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(SpotAwardRedemption_1.SpotAwardRedemption, externalCodeOrEntity instanceof SpotAwardRedemption_1.SpotAwardRedemption ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return SpotAwardRedemptionRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardRedemptionRequestBuilder = SpotAwardRedemptionRequestBuilder;
//# sourceMappingURL=SpotAwardRedemptionRequestBuilder.js.map