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
var Background_Certificates_1 = require("./Background_Certificates");
/**
 * Request builder class for operations supported on the [[Background_Certificates]] entity.
 */
var Background_CertificatesRequestBuilder = /** @class */ (function (_super) {
    __extends(Background_CertificatesRequestBuilder, _super);
    function Background_CertificatesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Background_Certificates` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Certificates.backgroundElementId]].
     * @param userId Key property. See [[Background_Certificates.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Certificates` entity based on its keys.
     */
    Background_CertificatesRequestBuilder.prototype.getByKey = function (backgroundElementId, userId) {
        return new core_1.GetByKeyRequestBuilder(Background_Certificates_1.Background_Certificates, {
            backgroundElementId: backgroundElementId,
            userId: userId
        });
    };
    /**
     * Returns a request builder for querying all `Background_Certificates` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Certificates` entities.
     */
    Background_CertificatesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Background_Certificates_1.Background_Certificates);
    };
    /**
     * Returns a request builder for creating a `Background_Certificates` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Certificates`.
     */
    Background_CertificatesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(Background_Certificates_1.Background_Certificates, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Background_Certificates`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Certificates`.
     */
    Background_CertificatesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(Background_Certificates_1.Background_Certificates, entity);
    };
    Background_CertificatesRequestBuilder.prototype.delete = function (backgroundElementIdOrEntity, userId) {
        return new core_1.DeleteRequestBuilder(Background_Certificates_1.Background_Certificates, backgroundElementIdOrEntity instanceof Background_Certificates_1.Background_Certificates ? backgroundElementIdOrEntity : {
            backgroundElementId: backgroundElementIdOrEntity,
            userId: userId
        });
    };
    return Background_CertificatesRequestBuilder;
}(core_1.RequestBuilder));
exports.Background_CertificatesRequestBuilder = Background_CertificatesRequestBuilder;
//# sourceMappingURL=Background_CertificatesRequestBuilder.js.map