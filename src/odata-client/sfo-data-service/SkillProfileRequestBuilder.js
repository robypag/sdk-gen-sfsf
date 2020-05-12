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
var SkillProfile_1 = require("./SkillProfile");
/**
 * Request builder class for operations supported on the [[SkillProfile]] entity.
 */
var SkillProfileRequestBuilder = /** @class */ (function (_super) {
    __extends(SkillProfileRequestBuilder, _super);
    function SkillProfileRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SkillProfile` entity based on its keys.
     * @param externalCode Key property. See [[SkillProfile.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SkillProfile` entity based on its keys.
     */
    SkillProfileRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(SkillProfile_1.SkillProfile, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `SkillProfile` entities.
     * @returns A request builder for creating requests to retrieve all `SkillProfile` entities.
     */
    SkillProfileRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(SkillProfile_1.SkillProfile);
    };
    /**
     * Returns a request builder for creating a `SkillProfile` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SkillProfile`.
     */
    SkillProfileRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(SkillProfile_1.SkillProfile, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SkillProfile`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SkillProfile`.
     */
    SkillProfileRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(SkillProfile_1.SkillProfile, entity);
    };
    SkillProfileRequestBuilder.prototype.delete = function (externalCodeOrEntity) {
        return new core_1.DeleteRequestBuilder(SkillProfile_1.SkillProfile, externalCodeOrEntity instanceof SkillProfile_1.SkillProfile ? externalCodeOrEntity : { externalCode: externalCodeOrEntity });
    };
    return SkillProfileRequestBuilder;
}(core_1.RequestBuilder));
exports.SkillProfileRequestBuilder = SkillProfileRequestBuilder;
//# sourceMappingURL=SkillProfileRequestBuilder.js.map