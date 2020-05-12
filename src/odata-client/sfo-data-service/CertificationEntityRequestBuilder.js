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
var CertificationEntity_1 = require("./CertificationEntity");
/**
 * Request builder class for operations supported on the [[CertificationEntity]] entity.
 */
var CertificationEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(CertificationEntityRequestBuilder, _super);
    function CertificationEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CertificationEntity` entity based on its keys.
     * @param externalCode Key property. See [[CertificationEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CertificationEntity` entity based on its keys.
     */
    CertificationEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(CertificationEntity_1.CertificationEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `CertificationEntity` entities.
     * @returns A request builder for creating requests to retrieve all `CertificationEntity` entities.
     */
    CertificationEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CertificationEntity_1.CertificationEntity);
    };
    /**
     * Returns a request builder for creating a `CertificationEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CertificationEntity`.
     */
    CertificationEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CertificationEntity_1.CertificationEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CertificationEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CertificationEntity`.
     */
    CertificationEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CertificationEntity_1.CertificationEntity, entity);
    };
    CertificationEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(CertificationEntity_1.CertificationEntity, externalCodeOrEntity instanceof CertificationEntity_1.CertificationEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return CertificationEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.CertificationEntityRequestBuilder = CertificationEntityRequestBuilder;
//# sourceMappingURL=CertificationEntityRequestBuilder.js.map