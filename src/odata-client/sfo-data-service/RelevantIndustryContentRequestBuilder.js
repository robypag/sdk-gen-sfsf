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
var RelevantIndustryContent_1 = require("./RelevantIndustryContent");
/**
 * Request builder class for operations supported on the [[RelevantIndustryContent]] entity.
 */
var RelevantIndustryContentRequestBuilder = /** @class */ (function (_super) {
    __extends(RelevantIndustryContentRequestBuilder, _super);
    function RelevantIndustryContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RelevantIndustryContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[RelevantIndustryContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[RelevantIndustryContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `RelevantIndustryContent` entity based on its keys.
     */
    RelevantIndustryContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(RelevantIndustryContent_1.RelevantIndustryContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `RelevantIndustryContent` entities.
     * @returns A request builder for creating requests to retrieve all `RelevantIndustryContent` entities.
     */
    RelevantIndustryContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RelevantIndustryContent_1.RelevantIndustryContent);
    };
    /**
     * Returns a request builder for creating a `RelevantIndustryContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RelevantIndustryContent`.
     */
    RelevantIndustryContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(RelevantIndustryContent_1.RelevantIndustryContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RelevantIndustryContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RelevantIndustryContent`.
     */
    RelevantIndustryContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(RelevantIndustryContent_1.RelevantIndustryContent, entity);
    };
    RelevantIndustryContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(RelevantIndustryContent_1.RelevantIndustryContent, jobProfileExternalCodeOrEntity instanceof RelevantIndustryContent_1.RelevantIndustryContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return RelevantIndustryContentRequestBuilder;
}(core_1.RequestBuilder));
exports.RelevantIndustryContentRequestBuilder = RelevantIndustryContentRequestBuilder;
//# sourceMappingURL=RelevantIndustryContentRequestBuilder.js.map