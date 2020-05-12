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
var ContinuousFeedbackRequest_1 = require("./ContinuousFeedbackRequest");
/**
 * Request builder class for operations supported on the [[ContinuousFeedbackRequest]] entity.
 */
var ContinuousFeedbackRequestRequestBuilder = /** @class */ (function (_super) {
    __extends(ContinuousFeedbackRequestRequestBuilder, _super);
    function ContinuousFeedbackRequestRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ContinuousFeedbackRequest` entity based on its keys.
     * @param requestId Key property. See [[ContinuousFeedbackRequest.requestId]].
     * @returns A request builder for creating requests to retrieve one `ContinuousFeedbackRequest` entity based on its keys.
     */
    ContinuousFeedbackRequestRequestBuilder.prototype.getByKey = function (requestId) {
        return new core_1.GetByKeyRequestBuilder(ContinuousFeedbackRequest_1.ContinuousFeedbackRequest, { requestId: requestId });
    };
    /**
     * Returns a request builder for querying all `ContinuousFeedbackRequest` entities.
     * @returns A request builder for creating requests to retrieve all `ContinuousFeedbackRequest` entities.
     */
    ContinuousFeedbackRequestRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ContinuousFeedbackRequest_1.ContinuousFeedbackRequest);
    };
    /**
     * Returns a request builder for creating a `ContinuousFeedbackRequest` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ContinuousFeedbackRequest`.
     */
    ContinuousFeedbackRequestRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ContinuousFeedbackRequest_1.ContinuousFeedbackRequest, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ContinuousFeedbackRequest`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ContinuousFeedbackRequest`.
     */
    ContinuousFeedbackRequestRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(ContinuousFeedbackRequest_1.ContinuousFeedbackRequest, entity);
    };
    return ContinuousFeedbackRequestRequestBuilder;
}(core_1.RequestBuilder));
exports.ContinuousFeedbackRequestRequestBuilder = ContinuousFeedbackRequestRequestBuilder;
//# sourceMappingURL=ContinuousFeedbackRequestRequestBuilder.js.map