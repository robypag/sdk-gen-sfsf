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
var ExternalLearnerEmailInfo_1 = require("./ExternalLearnerEmailInfo");
/**
 * Request builder class for operations supported on the [[ExternalLearnerEmailInfo]] entity.
 */
var ExternalLearnerEmailInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(ExternalLearnerEmailInfoRequestBuilder, _super);
    function ExternalLearnerEmailInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExternalLearnerEmailInfo` entity based on its keys.
     * @param itemId Key property. See [[ExternalLearnerEmailInfo.itemId]].
     * @returns A request builder for creating requests to retrieve one `ExternalLearnerEmailInfo` entity based on its keys.
     */
    ExternalLearnerEmailInfoRequestBuilder.prototype.getByKey = function (itemId) {
        return new core_1.GetByKeyRequestBuilder(ExternalLearnerEmailInfo_1.ExternalLearnerEmailInfo, { itemId: itemId });
    };
    /**
     * Returns a request builder for querying all `ExternalLearnerEmailInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearnerEmailInfo` entities.
     */
    ExternalLearnerEmailInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExternalLearnerEmailInfo_1.ExternalLearnerEmailInfo);
    };
    /**
     * Returns a request builder for creating a `ExternalLearnerEmailInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearnerEmailInfo`.
     */
    ExternalLearnerEmailInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExternalLearnerEmailInfo_1.ExternalLearnerEmailInfo, entity);
    };
    return ExternalLearnerEmailInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.ExternalLearnerEmailInfoRequestBuilder = ExternalLearnerEmailInfoRequestBuilder;
//# sourceMappingURL=ExternalLearnerEmailInfoRequestBuilder.js.map