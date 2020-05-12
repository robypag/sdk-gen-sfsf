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
var ExternalLearnerAddressInfo_1 = require("./ExternalLearnerAddressInfo");
/**
 * Request builder class for operations supported on the [[ExternalLearnerAddressInfo]] entity.
 */
var ExternalLearnerAddressInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(ExternalLearnerAddressInfoRequestBuilder, _super);
    function ExternalLearnerAddressInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExternalLearnerAddressInfo` entity based on its keys.
     * @param itemId Key property. See [[ExternalLearnerAddressInfo.itemId]].
     * @returns A request builder for creating requests to retrieve one `ExternalLearnerAddressInfo` entity based on its keys.
     */
    ExternalLearnerAddressInfoRequestBuilder.prototype.getByKey = function (itemId) {
        return new core_1.GetByKeyRequestBuilder(ExternalLearnerAddressInfo_1.ExternalLearnerAddressInfo, { itemId: itemId });
    };
    /**
     * Returns a request builder for querying all `ExternalLearnerAddressInfo` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalLearnerAddressInfo` entities.
     */
    ExternalLearnerAddressInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(ExternalLearnerAddressInfo_1.ExternalLearnerAddressInfo);
    };
    /**
     * Returns a request builder for creating a `ExternalLearnerAddressInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalLearnerAddressInfo`.
     */
    ExternalLearnerAddressInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(ExternalLearnerAddressInfo_1.ExternalLearnerAddressInfo, entity);
    };
    return ExternalLearnerAddressInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.ExternalLearnerAddressInfoRequestBuilder = ExternalLearnerAddressInfoRequestBuilder;
//# sourceMappingURL=ExternalLearnerAddressInfoRequestBuilder.js.map