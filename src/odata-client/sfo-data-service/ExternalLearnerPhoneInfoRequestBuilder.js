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
var ExternalLearnerPhoneInfo_1 = require("./ExternalLearnerPhoneInfo");
/**
 * Request builder class for operations supported on the [[ExternalLearnerPhoneInfo]] entity.
 */
var ExternalLearnerPhoneInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(ExternalLearnerPhoneInfoRequestBuilder, _super);
    function ExternalLearnerPhoneInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExternalLearnerPhoneInfo` entity based on its keys.
     * @param itemId Key property. See [[ExternalLearnerPhoneInfo.itemId]].
     * @returns A request builder for creating requests to retrieve one `ExternalLearnerPhoneInfo` entity based on its keys.
     */
    ExternalLearnerPhoneInfoRequestBuilder.prototype.getByKey = function (itemId) {
        return new core_1.GetByKeyRequestBuilder(ExternalLearnerPhoneInfo_1.ExternalLearnerPhoneInfo, { itemId: itemId });
    };
    /**
     * Returns a request builder for querying all `ExternalLearnerPhoneInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearnerPhoneInfo` entities.
     */
    ExternalLearnerPhoneInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExternalLearnerPhoneInfo_1.ExternalLearnerPhoneInfo);
    };
    /**
     * Returns a request builder for creating a `ExternalLearnerPhoneInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearnerPhoneInfo`.
     */
    ExternalLearnerPhoneInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExternalLearnerPhoneInfo_1.ExternalLearnerPhoneInfo, entity);
    };
    return ExternalLearnerPhoneInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.ExternalLearnerPhoneInfoRequestBuilder = ExternalLearnerPhoneInfoRequestBuilder;
//# sourceMappingURL=ExternalLearnerPhoneInfoRequestBuilder.js.map