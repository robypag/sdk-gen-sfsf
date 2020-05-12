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
var SpotAwardEligibilityRule_1 = require("./SpotAwardEligibilityRule");
/**
 * Request builder class for operations supported on the [[SpotAwardEligibilityRule]] entity.
 */
var SpotAwardEligibilityRuleRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardEligibilityRuleRequestBuilder, _super);
    function SpotAwardEligibilityRuleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardEligibilityRule` entity based on its keys.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardEligibilityRule.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardEligibilityRule.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardEligibilityRule` entity based on its keys.
     */
    SpotAwardEligibilityRuleRequestBuilder.prototype.getByKey = function (spotAwardProgramExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardEligibilityRule_1.SpotAwardEligibilityRule, {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SpotAwardEligibilityRule` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardEligibilityRule` entities.
     */
    SpotAwardEligibilityRuleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardEligibilityRule_1.SpotAwardEligibilityRule);
    };
    /**
     * Returns a request builder for creating a `SpotAwardEligibilityRule` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardEligibilityRule`.
     */
    SpotAwardEligibilityRuleRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardEligibilityRule_1.SpotAwardEligibilityRule, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardEligibilityRule`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardEligibilityRule`.
     */
    SpotAwardEligibilityRuleRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardEligibilityRule_1.SpotAwardEligibilityRule, entity);
    };
    SpotAwardEligibilityRuleRequestBuilder.prototype.delete = function (spotAwardProgramExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SpotAwardEligibilityRule_1.SpotAwardEligibilityRule, spotAwardProgramExternalCodeOrEntity instanceof SpotAwardEligibilityRule_1.SpotAwardEligibilityRule ? spotAwardProgramExternalCodeOrEntity : {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return SpotAwardEligibilityRuleRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardEligibilityRuleRequestBuilder = SpotAwardEligibilityRuleRequestBuilder;
//# sourceMappingURL=SpotAwardEligibilityRuleRequestBuilder.js.map