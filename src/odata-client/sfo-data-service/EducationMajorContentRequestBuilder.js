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
var EducationMajorContent_1 = require("./EducationMajorContent");
/**
 * Request builder class for operations supported on the [[EducationMajorContent]] entity.
 */
var EducationMajorContentRequestBuilder = /** @class */ (function (_super) {
    __extends(EducationMajorContentRequestBuilder, _super);
    function EducationMajorContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EducationMajorContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[EducationMajorContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[EducationMajorContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EducationMajorContent` entity based on its keys.
     */
    EducationMajorContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EducationMajorContent_1.EducationMajorContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EducationMajorContent` entities.
     * @returns A request builder for creating requests to retrieve all `EducationMajorContent` entities.
     */
    EducationMajorContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EducationMajorContent_1.EducationMajorContent);
    };
    /**
     * Returns a request builder for creating a `EducationMajorContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EducationMajorContent`.
     */
    EducationMajorContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EducationMajorContent_1.EducationMajorContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EducationMajorContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EducationMajorContent`.
     */
    EducationMajorContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EducationMajorContent_1.EducationMajorContent, entity);
    };
    EducationMajorContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(EducationMajorContent_1.EducationMajorContent, jobProfileExternalCodeOrEntity instanceof EducationMajorContent_1.EducationMajorContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return EducationMajorContentRequestBuilder;
}(core_1.RequestBuilder));
exports.EducationMajorContentRequestBuilder = EducationMajorContentRequestBuilder;
//# sourceMappingURL=EducationMajorContentRequestBuilder.js.map