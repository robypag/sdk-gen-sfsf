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
var InterviewQuestionEntity_1 = require("./InterviewQuestionEntity");
/**
 * Request builder class for operations supported on the [[InterviewQuestionEntity]] entity.
 */
var InterviewQuestionEntityRequestBuilder = /** @class */ (function (_super) {
    __extends(InterviewQuestionEntityRequestBuilder, _super);
    function InterviewQuestionEntityRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InterviewQuestionEntity` entity based on its keys.
     * @param externalCode Key property. See [[InterviewQuestionEntity.externalCode]].
     * @returns A request builder for creating requests to retrieve one `InterviewQuestionEntity` entity based on its keys.
     */
    InterviewQuestionEntityRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(InterviewQuestionEntity_1.InterviewQuestionEntity, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `InterviewQuestionEntity` entities.
     * @returns A request builder for creating requests to retrieve all `InterviewQuestionEntity` entities.
     */
    InterviewQuestionEntityRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(InterviewQuestionEntity_1.InterviewQuestionEntity);
    };
    /**
     * Returns a request builder for creating a `InterviewQuestionEntity` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InterviewQuestionEntity`.
     */
    InterviewQuestionEntityRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(InterviewQuestionEntity_1.InterviewQuestionEntity, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InterviewQuestionEntity`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InterviewQuestionEntity`.
     */
    InterviewQuestionEntityRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(InterviewQuestionEntity_1.InterviewQuestionEntity, entity);
    };
    InterviewQuestionEntityRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(InterviewQuestionEntity_1.InterviewQuestionEntity, externalCodeOrEntity instanceof InterviewQuestionEntity_1.InterviewQuestionEntity ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return InterviewQuestionEntityRequestBuilder;
}(core_1.RequestBuilder));
exports.InterviewQuestionEntityRequestBuilder = InterviewQuestionEntityRequestBuilder;
//# sourceMappingURL=InterviewQuestionEntityRequestBuilder.js.map