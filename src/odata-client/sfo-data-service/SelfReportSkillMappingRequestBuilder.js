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
var SelfReportSkillMapping_1 = require("./SelfReportSkillMapping");
/**
 * Request builder class for operations supported on the [[SelfReportSkillMapping]] entity.
 */
var SelfReportSkillMappingRequestBuilder = /** @class */ (function (_super) {
    __extends(SelfReportSkillMappingRequestBuilder, _super);
    function SelfReportSkillMappingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SelfReportSkillMapping` entity based on its keys.
     * @param skillProfileExternalCode Key property. See [[SelfReportSkillMapping.skillProfileExternalCode]].
     * @param externalCode Key property. See [[SelfReportSkillMapping.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SelfReportSkillMapping` entity based on its keys.
     */
    SelfReportSkillMappingRequestBuilder.prototype.getByKey = function (skillProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SelfReportSkillMapping_1.SelfReportSkillMapping, {
            SkillProfile_externalCode: skillProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SelfReportSkillMapping` entities.
     * @returns A request builder for creating requests to retrieve all `SelfReportSkillMapping` entities.
     */
    SelfReportSkillMappingRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SelfReportSkillMapping_1.SelfReportSkillMapping);
    };
    /**
     * Returns a request builder for creating a `SelfReportSkillMapping` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SelfReportSkillMapping`.
     */
    SelfReportSkillMappingRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SelfReportSkillMapping_1.SelfReportSkillMapping, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SelfReportSkillMapping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SelfReportSkillMapping`.
     */
    SelfReportSkillMappingRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SelfReportSkillMapping_1.SelfReportSkillMapping, entity);
    };
    SelfReportSkillMappingRequestBuilder.prototype.delete = function (skillProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SelfReportSkillMapping_1.SelfReportSkillMapping, skillProfileExternalCodeOrEntity instanceof SelfReportSkillMapping_1.SelfReportSkillMapping ? skillProfileExternalCodeOrEntity : {
            SkillProfile_externalCode: skillProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return SelfReportSkillMappingRequestBuilder;
}(core_1.RequestBuilder));
exports.SelfReportSkillMappingRequestBuilder = SelfReportSkillMappingRequestBuilder;
//# sourceMappingURL=SelfReportSkillMappingRequestBuilder.js.map