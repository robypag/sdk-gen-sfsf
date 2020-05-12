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
var ExternalLearnerPersonalInfo_1 = require("./ExternalLearnerPersonalInfo");
/**
 * Request builder class for operations supported on the [[ExternalLearnerPersonalInfo]] entity.
 */
var ExternalLearnerPersonalInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(ExternalLearnerPersonalInfoRequestBuilder, _super);
    function ExternalLearnerPersonalInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExternalLearnerPersonalInfo` entity based on its keys.
     * @param itemId Key property. See [[ExternalLearnerPersonalInfo.itemId]].
     * @returns A request builder for creating requests to retrieve one `ExternalLearnerPersonalInfo` entity based on its keys.
     */
    ExternalLearnerPersonalInfoRequestBuilder.prototype.getByKey = function (itemId) {
        return new core_1.GetByKeyRequestBuilder(ExternalLearnerPersonalInfo_1.ExternalLearnerPersonalInfo, { itemId: itemId });
    };
    /**
     * Returns a request builder for querying all `ExternalLearnerPersonalInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearnerPersonalInfo` entities.
     */
    ExternalLearnerPersonalInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExternalLearnerPersonalInfo_1.ExternalLearnerPersonalInfo);
    };
    /**
     * Returns a request builder for creating a `ExternalLearnerPersonalInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearnerPersonalInfo`.
     */
    ExternalLearnerPersonalInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExternalLearnerPersonalInfo_1.ExternalLearnerPersonalInfo, entity);
    };
    return ExternalLearnerPersonalInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.ExternalLearnerPersonalInfoRequestBuilder = ExternalLearnerPersonalInfoRequestBuilder;
//# sourceMappingURL=ExternalLearnerPersonalInfoRequestBuilder.js.map