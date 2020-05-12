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
var EmploymentConditionContent_1 = require("./EmploymentConditionContent");
/**
 * Request builder class for operations supported on the [[EmploymentConditionContent]] entity.
 */
var EmploymentConditionContentRequestBuilder = /** @class */ (function (_super) {
    __extends(EmploymentConditionContentRequestBuilder, _super);
    function EmploymentConditionContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmploymentConditionContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[EmploymentConditionContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[EmploymentConditionContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmploymentConditionContent` entity based on its keys.
     */
    EmploymentConditionContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(EmploymentConditionContent_1.EmploymentConditionContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `EmploymentConditionContent` entities.
     * @returns A request builder for creating requests to retrieve all `EmploymentConditionContent` entities.
     */
    EmploymentConditionContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmploymentConditionContent_1.EmploymentConditionContent);
    };
    /**
     * Returns a request builder for creating a `EmploymentConditionContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmploymentConditionContent`.
     */
    EmploymentConditionContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmploymentConditionContent_1.EmploymentConditionContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmploymentConditionContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmploymentConditionContent`.
     */
    EmploymentConditionContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(EmploymentConditionContent_1.EmploymentConditionContent, entity);
    };
    EmploymentConditionContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(EmploymentConditionContent_1.EmploymentConditionContent, jobProfileExternalCodeOrEntity instanceof EmploymentConditionContent_1.EmploymentConditionContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return EmploymentConditionContentRequestBuilder;
}(core_1.RequestBuilder));
exports.EmploymentConditionContentRequestBuilder = EmploymentConditionContentRequestBuilder;
//# sourceMappingURL=EmploymentConditionContentRequestBuilder.js.map