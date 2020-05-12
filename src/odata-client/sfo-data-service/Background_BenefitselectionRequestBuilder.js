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
var Background_Benefitselection_1 = require("./Background_Benefitselection");
/**
 * Request builder class for operations supported on the [[Background_Benefitselection]] entity.
 */
var Background_BenefitselectionRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_BenefitselectionRequestBuilder, _super);
    function Background_BenefitselectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Benefitselection` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Benefitselection.backgroundElementId]].
     * @param userId Key property. See [[Background_Benefitselection.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Benefitselection` entity based on its keys.
     */
    Background_BenefitselectionRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Benefitselection_1.Background_Benefitselection, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Benefitselection` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Benefitselection` entities.
     */
    Background_BenefitselectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Benefitselection_1.Background_Benefitselection);
    };
    /**
     * Returns a request builder for creating a `Background_Benefitselection` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Benefitselection`.
     */
    Background_BenefitselectionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Benefitselection_1.Background_Benefitselection, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Benefitselection`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Benefitselection`.
     */
    Background_BenefitselectionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Benefitselection_1.Background_Benefitselection, entity);
    };
    Background_BenefitselectionRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Benefitselection_1.Background_Benefitselection, backgroundElementIdOrEntity instanceof Background_Benefitselection_1.Background_Benefitselection ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_BenefitselectionRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_BenefitselectionRequestBuilder = Background_BenefitselectionRequestBuilder;
//# sourceMappingURL=Background_BenefitselectionRequestBuilder.js.map