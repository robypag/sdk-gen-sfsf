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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var NominationTargetRequestBuilder_1 = require("./NominationTargetRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "NominationTarget" of service "SFOData".
 */
var NominationTarget = /** @class */ (function (_super) {
    __extends(NominationTarget, _super);
    function NominationTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `NominationTarget`.
     * @returns A builder that constructs instances of entity type `NominationTarget`.
     */
    NominationTarget.builder = function () {
        return core_1.Entity.entityBuilder(NominationTarget);
    };
    /**
     * Returns a request builder to construct requests for operations on the `NominationTarget` entity type.
     * @returns A `NominationTarget` request builder.
     */
    NominationTarget.requestBuilder = function () {
        return new NominationTargetRequestBuilder_1.NominationTargetRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NominationTarget`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NominationTarget`.
     */
    NominationTarget.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, NominationTarget);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    NominationTarget.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for NominationTarget.
     */
    NominationTarget._entityName = 'NominationTarget';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NominationTarget.
     */
    NominationTarget._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    NominationTarget._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return NominationTarget;
}(core_1.Entity));
exports.NominationTarget = NominationTarget;
var Position_1 = require("./Position");
var Successor_1 = require("./Successor");
var TalentPool_1 = require("./TalentPool");
(function (NominationTarget) {
    /**
     * Static representation of the [[nominationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NominationTarget.NOMINATION_ID = new core_1.BigNumberField('nominationId', NominationTarget, 'Edm.Int64');
    /**
     * Static representation of the [[nominationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NominationTarget.NOMINATION_TYPE = new core_1.NumberField('nominationType', NominationTarget, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NominationTarget.POSITION_NAV = new core_1.OneToOneLink('positionNav', NominationTarget, Position_1.Position);
    /**
     * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NominationTarget.SUCCESSOR_NAV = new core_1.Link('successorNav', NominationTarget, Successor_1.Successor);
    /**
     * Static representation of the one-to-one navigation property [[talentPoolNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NominationTarget.TALENT_POOL_NAV = new core_1.OneToOneLink('talentPoolNav', NominationTarget, TalentPool_1.TalentPool);
    /**
     * All fields of the NominationTarget entity.
     */
    NominationTarget._allFields = [
        NominationTarget.NOMINATION_ID,
        NominationTarget.NOMINATION_TYPE,
        NominationTarget.POSITION_NAV,
        NominationTarget.SUCCESSOR_NAV,
        NominationTarget.TALENT_POOL_NAV
    ];
    /**
     * All fields selector.
     */
    NominationTarget.ALL_FIELDS = new core_1.AllFields('*', NominationTarget);
    /**
     * All key fields of the NominationTarget entity.
     */
    NominationTarget._keyFields = [NominationTarget.NOMINATION_ID];
    /**
     * Mapping of all key field names to the respective static field property NominationTarget.
     */
    NominationTarget._keys = NominationTarget._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(NominationTarget = exports.NominationTarget || (exports.NominationTarget = {}));
exports.NominationTarget = NominationTarget;
//# sourceMappingURL=NominationTarget.js.map