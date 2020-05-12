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
var OnboardingProcess_1 = require("./OnboardingProcess");
/**
 * Request builder class for operations supported on the [[OnboardingProcess]] entity.
 */
var OnboardingProcessRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingProcessRequestBuilder, _super);
    function OnboardingProcessRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingProcess` entity based on its keys.
     * @param onboardingProcessId Key property. See [[OnboardingProcess.onboardingProcessId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingProcess` entity based on its keys.
     */
    OnboardingProcessRequestBuilder.prototype.getByKey = function (onboardingProcessId) {
        return new core_1.GetByKeyRequestBuilder(OnboardingProcess_1.OnboardingProcess, { onboardingProcessId: onboardingProcessId });
    };
    /**
     * Returns a request builder for querying all `OnboardingProcess` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingProcess` entities.
     */
    OnboardingProcessRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingProcess_1.OnboardingProcess);
    };
    /**
     * Returns a request builder for creating a `OnboardingProcess` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OnboardingProcess`.
     */
    OnboardingProcessRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(OnboardingProcess_1.OnboardingProcess, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `OnboardingProcess`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OnboardingProcess`.
     */
    OnboardingProcessRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(OnboardingProcess_1.OnboardingProcess, entity);
    };
    OnboardingProcessRequestBuilder.prototype.delete = function (onboardingProcessIdOrEntity) {
        return new core_1.DeleteRequestBuilder(OnboardingProcess_1.OnboardingProcess, onboardingProcessIdOrEntity instanceof OnboardingProcess_1.OnboardingProcess ? onboardingProcessIdOrEntity : { onboardingProcessId: onboardingProcessIdOrEntity });
    };
    return OnboardingProcessRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingProcessRequestBuilder = OnboardingProcessRequestBuilder;
//# sourceMappingURL=OnboardingProcessRequestBuilder.js.map