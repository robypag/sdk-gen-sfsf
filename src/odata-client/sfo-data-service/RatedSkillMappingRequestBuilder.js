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
var RatedSkillMapping_1 = require("./RatedSkillMapping");
/**
 * Request builder class for operations supported on the [[RatedSkillMapping]] entity.
 */
var RatedSkillMappingRequestBuilder = /** @class */ (function (_super) {
    __extends(RatedSkillMappingRequestBuilder, _super);
    function RatedSkillMappingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RatedSkillMapping` entity based on its keys.
     * @param skillProfileExternalCode Key property. See [[RatedSkillMapping.skillProfileExternalCode]].
     * @param externalCode Key property. See [[RatedSkillMapping.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RatedSkillMapping` entity based on its keys.
     */
    RatedSkillMappingRequestBuilder.prototype.getByKey = function (skillProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(RatedSkillMapping_1.RatedSkillMapping, {
            SkillProfile_externalCode: skillProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `RatedSkillMapping` entities.
     * @returns A request builder for creating requests to retrieve all `RatedSkillMapping` entities.
     */
    RatedSkillMappingRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RatedSkillMapping_1.RatedSkillMapping);
    };
    /**
     * Returns a request builder for creating a `RatedSkillMapping` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RatedSkillMapping`.
     */
    RatedSkillMappingRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RatedSkillMapping_1.RatedSkillMapping, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RatedSkillMapping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RatedSkillMapping`.
     */
    RatedSkillMappingRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(RatedSkillMapping_1.RatedSkillMapping, entity);
    };
    RatedSkillMappingRequestBuilder.prototype.delete = function (skillProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(RatedSkillMapping_1.RatedSkillMapping, skillProfileExternalCodeOrEntity instanceof RatedSkillMapping_1.RatedSkillMapping ? skillProfileExternalCodeOrEntity : {
            SkillProfile_externalCode: skillProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return RatedSkillMappingRequestBuilder;
}(core_1.RequestBuilder));
exports.RatedSkillMappingRequestBuilder = RatedSkillMappingRequestBuilder;
//# sourceMappingURL=RatedSkillMappingRequestBuilder.js.map