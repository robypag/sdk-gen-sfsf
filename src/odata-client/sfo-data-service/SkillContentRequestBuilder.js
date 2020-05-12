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
var SkillContent_1 = require("./SkillContent");
/**
 * Request builder class for operations supported on the [[SkillContent]] entity.
 */
var SkillContentRequestBuilder = /** @class */ (function (_super) {
    __extends(SkillContentRequestBuilder, _super);
    function SkillContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SkillContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[SkillContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[SkillContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SkillContent` entity based on its keys.
     */
    SkillContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SkillContent_1.SkillContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SkillContent` entities.
     * @returns A request builder for creating requests to retrieve all `SkillContent` entities.
     */
    SkillContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SkillContent_1.SkillContent);
    };
    /**
     * Returns a request builder for creating a `SkillContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SkillContent`.
     */
    SkillContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SkillContent_1.SkillContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SkillContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SkillContent`.
     */
    SkillContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SkillContent_1.SkillContent, entity);
    };
    SkillContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SkillContent_1.SkillContent, jobProfileExternalCodeOrEntity instanceof SkillContent_1.SkillContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return SkillContentRequestBuilder;
}(core_1.RequestBuilder));
exports.SkillContentRequestBuilder = SkillContentRequestBuilder;
//# sourceMappingURL=SkillContentRequestBuilder.js.map