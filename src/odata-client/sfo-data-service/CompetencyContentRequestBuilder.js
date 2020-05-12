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
var CompetencyContent_1 = require("./CompetencyContent");
/**
 * Request builder class for operations supported on the [[CompetencyContent]] entity.
 */
var CompetencyContentRequestBuilder = /** @class */ (function (_super) {
    __extends(CompetencyContentRequestBuilder, _super);
    function CompetencyContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CompetencyContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[CompetencyContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[CompetencyContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `CompetencyContent` entity based on its keys.
     */
    CompetencyContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(CompetencyContent_1.CompetencyContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `CompetencyContent` entities.
     * @returns A request builder for creating requests to retrieve all `CompetencyContent` entities.
     */
    CompetencyContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(CompetencyContent_1.CompetencyContent);
    };
    /**
     * Returns a request builder for creating a `CompetencyContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CompetencyContent`.
     */
    CompetencyContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(CompetencyContent_1.CompetencyContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CompetencyContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CompetencyContent`.
     */
    CompetencyContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(CompetencyContent_1.CompetencyContent, entity);
    };
    CompetencyContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(CompetencyContent_1.CompetencyContent, jobProfileExternalCodeOrEntity instanceof CompetencyContent_1.CompetencyContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return CompetencyContentRequestBuilder;
}(core_1.RequestBuilder));
exports.CompetencyContentRequestBuilder = CompetencyContentRequestBuilder;
//# sourceMappingURL=CompetencyContentRequestBuilder.js.map