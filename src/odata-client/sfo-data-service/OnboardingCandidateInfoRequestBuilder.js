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
var OnboardingCandidateInfo_1 = require("./OnboardingCandidateInfo");
/**
 * Request builder class for operations supported on the [[OnboardingCandidateInfo]] entity.
 */
var OnboardingCandidateInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(OnboardingCandidateInfoRequestBuilder, _super);
    function OnboardingCandidateInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OnboardingCandidateInfo` entity based on its keys.
     * @param applicantId Key property. See [[OnboardingCandidateInfo.applicantId]].
     * @returns A request builder for creating requests to retrieve one `OnboardingCandidateInfo` entity based on its keys.
     */
    OnboardingCandidateInfoRequestBuilder.prototype.getByKey = function (applicantId) {
        return new core_1.GetByKeyRequestBuilder(OnboardingCandidateInfo_1.OnboardingCandidateInfo, { applicantId: applicantId });
    };
    /**
     * Returns a request builder for querying all `OnboardingCandidateInfo` entities.
     * @returns A request builder for creating requests to retrieve all `OnboardingCandidateInfo` entities.
     */
    OnboardingCandidateInfoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(OnboardingCandidateInfo_1.OnboardingCandidateInfo);
    };
    /**
     * Returns a request builder for creating a `OnboardingCandidateInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OnboardingCandidateInfo`.
     */
    OnboardingCandidateInfoRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(OnboardingCandidateInfo_1.OnboardingCandidateInfo, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `OnboardingCandidateInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OnboardingCandidateInfo`.
     */
    OnboardingCandidateInfoRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(OnboardingCandidateInfo_1.OnboardingCandidateInfo, entity);
    };
    OnboardingCandidateInfoRequestBuilder.prototype.delete = function (applicantIdOrEntity) {
        return new core_1.DeleteRequestBuilder(OnboardingCandidateInfo_1.OnboardingCandidateInfo, applicantIdOrEntity instanceof OnboardingCandidateInfo_1.OnboardingCandidateInfo ? applicantIdOrEntity : { applicantId: applicantIdOrEntity });
    };
    return OnboardingCandidateInfoRequestBuilder;
}(core_1.RequestBuilder));
exports.OnboardingCandidateInfoRequestBuilder = OnboardingCandidateInfoRequestBuilder;
//# sourceMappingURL=OnboardingCandidateInfoRequestBuilder.js.map