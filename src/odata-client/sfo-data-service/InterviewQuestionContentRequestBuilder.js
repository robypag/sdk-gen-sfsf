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
var InterviewQuestionContent_1 = require("./InterviewQuestionContent");
/**
 * Request builder class for operations supported on the [[InterviewQuestionContent]] entity.
 */
var InterviewQuestionContentRequestBuilder = /** @class */ (function (_super) {
    __extends(InterviewQuestionContentRequestBuilder, _super);
    function InterviewQuestionContentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InterviewQuestionContent` entity based on its keys.
     * @param jobProfileExternalCode Key property. See [[InterviewQuestionContent.jobProfileExternalCode]].
     * @param externalCode Key property. See [[InterviewQuestionContent.externalCode]].
     * @returns A request builder for creating requests to retrieve one `InterviewQuestionContent` entity based on its keys.
     */
    InterviewQuestionContentRequestBuilder.prototype.getByKey = function (jobProfileExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(InterviewQuestionContent_1.InterviewQuestionContent, {
            JobProfile_externalCode: jobProfileExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `InterviewQuestionContent` entities.
     * @returns A request builder for creating requests to retrieve all `InterviewQuestionContent` entities.
     */
    InterviewQuestionContentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(InterviewQuestionContent_1.InterviewQuestionContent);
    };
    /**
     * Returns a request builder for creating a `InterviewQuestionContent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InterviewQuestionContent`.
     */
    InterviewQuestionContentRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(InterviewQuestionContent_1.InterviewQuestionContent, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InterviewQuestionContent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InterviewQuestionContent`.
     */
    InterviewQuestionContentRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(InterviewQuestionContent_1.InterviewQuestionContent, entity);
    };
    InterviewQuestionContentRequestBuilder.prototype.delete = function (jobProfileExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(InterviewQuestionContent_1.InterviewQuestionContent, jobProfileExternalCodeOrEntity instanceof InterviewQuestionContent_1.InterviewQuestionContent ? jobProfileExternalCodeOrEntity : {
            JobProfile_externalCode: jobProfileExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return InterviewQuestionContentRequestBuilder;
}(core_1.RequestBuilder));
exports.InterviewQuestionContentRequestBuilder = InterviewQuestionContentRequestBuilder;
//# sourceMappingURL=InterviewQuestionContentRequestBuilder.js.map