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
var JdTemplateFamilyMapping_1 = require("./JdTemplateFamilyMapping");
/**
 * Request builder class for operations supported on the [[JdTemplateFamilyMapping]] entity.
 */
var JdTemplateFamilyMappingRequestBuilder = /** @class */ (function (_super) {
    __extends(JdTemplateFamilyMappingRequestBuilder, _super);
    function JdTemplateFamilyMappingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JdTemplateFamilyMapping` entity based on its keys.
     * @param jobDescTemplateExternalCode Key property. See [[JdTemplateFamilyMapping.jobDescTemplateExternalCode]].
     * @param externalCode Key property. See [[JdTemplateFamilyMapping.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JdTemplateFamilyMapping` entity based on its keys.
     */
    JdTemplateFamilyMappingRequestBuilder.prototype.getByKey = function (jobDescTemplateExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(JdTemplateFamilyMapping_1.JdTemplateFamilyMapping, {
            JobDescTemplate_externalCode: jobDescTemplateExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `JdTemplateFamilyMapping` entities.
     * @returns A request builder for creating requests to retrieve all `JdTemplateFamilyMapping` entities.
     */
    JdTemplateFamilyMappingRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JdTemplateFamilyMapping_1.JdTemplateFamilyMapping);
    };
    /**
     * Returns a request builder for creating a `JdTemplateFamilyMapping` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JdTemplateFamilyMapping`.
     */
    JdTemplateFamilyMappingRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(JdTemplateFamilyMapping_1.JdTemplateFamilyMapping, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JdTemplateFamilyMapping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JdTemplateFamilyMapping`.
     */
    JdTemplateFamilyMappingRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(JdTemplateFamilyMapping_1.JdTemplateFamilyMapping, entity);
    };
    JdTemplateFamilyMappingRequestBuilder.prototype.delete = function (jobDescTemplateExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(JdTemplateFamilyMapping_1.JdTemplateFamilyMapping, jobDescTemplateExternalCodeOrEntity instanceof JdTemplateFamilyMapping_1.JdTemplateFamilyMapping ? jobDescTemplateExternalCodeOrEntity : {
            JobDescTemplate_externalCode: jobDescTemplateExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return JdTemplateFamilyMappingRequestBuilder;
}(core_1.RequestBuilder));
exports.JdTemplateFamilyMappingRequestBuilder = JdTemplateFamilyMappingRequestBuilder;
//# sourceMappingURL=JdTemplateFamilyMappingRequestBuilder.js.map