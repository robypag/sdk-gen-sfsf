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
var EducationDegreeContent_1 = require("./EducationDegreeContent");
/**
 * Request builder class for operations supported on the [[EducationDegreeContent]] entity.
 */
var EducationDegreeContentRequestBuilder = /** @class */ (function (_super) {
    __extends(EducationDegreeContentRequestBuilder, _super);
    function EducationDegreeContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EducationDegreeContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[EducationDegreeContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[EducationDegreeContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EducationDegreeContent` entity based on its keys.
     */
    EducationDegreeContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EducationDegreeContent_1.EducationDegreeContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EducationDegreeContent` entities.
     * @returns A request builder for creating requests to retrieve all `EducationDegreeContent` entities.
     */
    EducationDegreeContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EducationDegreeContent_1.EducationDegreeContent);
    };
    /**
     * Returns a request builder for creating a `EducationDegreeContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EducationDegreeContent`.
     */
    EducationDegreeContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EducationDegreeContent_1.EducationDegreeContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EducationDegreeContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EducationDegreeContent`.
     */
    EducationDegreeContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EducationDegreeContent_1.EducationDegreeContent, entity);
    };
    EducationDegreeContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(EducationDegreeContent_1.EducationDegreeContent, jobProfileExternalCodeOrEntity instanceof EducationDegreeContent_1.EducationDegreeContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return EducationDegreeContentRequestBuilder;
}(core_1.RequestBuilder));
exports.EducationDegreeContentRequestBuilder = EducationDegreeContentRequestBuilder;
//# sourceMappingURL=EducationDegreeContentRequestBuilder.js.map