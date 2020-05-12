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
var SpotAwardGuidelinesRule_1 = require("./SpotAwardGuidelinesRule");
/**
 * Request builder class for operations supported on the [[SpotAwardGuidelinesRule]] entity.
 */
var SpotAwardGuidelinesRuleRequestBuilder = /** @class */ (function (_super) {
    __extends(SpotAwardGuidelinesRuleRequestBuilder, _super);
    function SpotAwardGuidelinesRuleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpotAwardGuidelinesRule` entity based on its keys.
     * @param spotAwardProgramExternalCode Key property. See [[SpotAwardGuidelinesRule.spotAwardProgramExternalCode]].
     * @param externalCode Key property. See [[SpotAwardGuidelinesRule.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SpotAwardGuidelinesRule` entity based on its keys.
     */
    SpotAwardGuidelinesRuleRequestBuilder.prototype.getByKey = function (spotAwardProgramExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(SpotAwardGuidelinesRule_1.SpotAwardGuidelinesRule, {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `SpotAwardGuidelinesRule` entities.
     * @returns A request builder for creating requests to retrieve all `SpotAwardGuidelinesRule` entities.
     */
    SpotAwardGuidelinesRuleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SpotAwardGuidelinesRule_1.SpotAwardGuidelinesRule);
    };
    /**
     * Returns a request builder for creating a `SpotAwardGuidelinesRule` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpotAwardGuidelinesRule`.
     */
    SpotAwardGuidelinesRuleRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SpotAwardGuidelinesRule_1.SpotAwardGuidelinesRule, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpotAwardGuidelinesRule`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpotAwardGuidelinesRule`.
     */
    SpotAwardGuidelinesRuleRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SpotAwardGuidelinesRule_1.SpotAwardGuidelinesRule, entity);
    };
    SpotAwardGuidelinesRuleRequestBuilder.prototype.delete = function (spotAwardProgramExternalCodeOrEntity, externalCode) {
        return new core_1.DeleteRequestBuilder(SpotAwardGuidelinesRule_1.SpotAwardGuidelinesRule, spotAwardProgramExternalCodeOrEntity instanceof SpotAwardGuidelinesRule_1.SpotAwardGuidelinesRule ? spotAwardProgramExternalCodeOrEntity : {
            SpotAwardProgram_externalCode: spotAwardProgramExternalCodeOrEntity,
            externalCode: externalCode
        });
    };
    return SpotAwardGuidelinesRuleRequestBuilder;
}(core_1.RequestBuilder));
exports.SpotAwardGuidelinesRuleRequestBuilder = SpotAwardGuidelinesRuleRequestBuilder;
//# sourceMappingURL=SpotAwardGuidelinesRuleRequestBuilder.js.map