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
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CertificationContent_1 = require("./CertificationContent");
/**
 * Request builder class for operations supported on the [[CertificationContent]] entity.
 */
var CertificationContentRequestBuilder = /** @class */ (function (_super) {
    __extends(CertificationContentRequestBuilder, _super);
    function CertificationContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CertificationContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[CertificationContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[CertificationContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CertificationContent` entity based on its keys.
     */
    CertificationContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(CertificationContent_1.CertificationContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `CertificationContent` entities.
     * @returns A request builder for creating requests to retrieve all `CertificationContent` entities.
     */
    CertificationContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CertificationContent_1.CertificationContent);
    };
    /**
     * Returns a request builder for creating a `CertificationContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CertificationContent`.
     */
    CertificationContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CertificationContent_1.CertificationContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CertificationContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CertificationContent`.
     */
    CertificationContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CertificationContent_1.CertificationContent, entity);
    };
    CertificationContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(CertificationContent_1.CertificationContent, jobProfileExternalCodeOrEntity instanceof CertificationContent_1.CertificationContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return CertificationContentRequestBuilder;
}(core_1.RequestBuilder));
exports.CertificationContentRequestBuilder = CertificationContentRequestBuilder;
//# sourceMappingURL=CertificationContentRequestBuilder.js.map