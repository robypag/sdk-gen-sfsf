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
var Background_BenefitselectionRequestBuilder_1 = require("./Background_BenefitselectionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Benefitselection" of service "SFOData".
 */
var Background_Benefitselection = /** @class */ (function (_super) {
    __extends(Background_Benefitselection, _super);
    function Background_Benefitselection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Benefitselection`.
     * @returns A builder that constructs instances of entity type `Background_Benefitselection`.
     */
    Background_Benefitselection.builder = function () {
        return core_1.Entity.entityBuilder(Background_Benefitselection);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Benefitselection` entity type.
     * @returns A `Background_Benefitselection` request builder.
     */
    Background_Benefitselection.requestBuilder = function () {
        return new Background_BenefitselectionRequestBuilder_1.Background_BenefitselectionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Benefitselection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Benefitselection`.
     */
    Background_Benefitselection.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Benefitselection);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Benefitselection.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Benefitselection.
     */
    Background_Benefitselection._entityName = 'Background_Benefitselection';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Benefitselection.
     */
    Background_Benefitselection._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Benefitselection._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Benefitselection;
}(core_1.Entity));
exports.Background_Benefitselection = Background_Benefitselection;
var PicklistOption_1 = require("./PicklistOption");
var User_1 = require("./User");
(function (Background_Benefitselection) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Benefitselection, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Benefitselection, 'Edm.Int64');
    /**
     * Static representation of the [[dental]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DENTAL = new core_1.StringField('dental', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the [[depdisability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DEPDISABILITY = new core_1.StringField('depdisability', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the [[depgender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DEPGENDER = new core_1.StringField('depgender', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the [[depname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DEPNAME = new core_1.StringField('depname', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the [[depnationalid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DEPNATIONALID = new core_1.StringField('depnationalid', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the [[depsmoke]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DEPSMOKE = new core_1.StringField('depsmoke', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the [[depstudent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DEPSTUDENT = new core_1.StringField('depstudent', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.END_DATE = new core_1.DateField('endDate', Background_Benefitselection, 'Edm.DateTime');
    /**
     * Static representation of the [[health]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.HEALTH = new core_1.StringField('health', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Benefitselection, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[relation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.RELATION = new core_1.StringField('relation', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.USER_ID = new core_1.StringField('userId', Background_Benefitselection, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[depdisabilityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DEPDISABILITY_NAV = new core_1.OneToOneLink('depdisabilityNav', Background_Benefitselection, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[depsmokeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DEPSMOKE_NAV = new core_1.OneToOneLink('depsmokeNav', Background_Benefitselection, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[depstudentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.DEPSTUDENT_NAV = new core_1.OneToOneLink('depstudentNav', Background_Benefitselection, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[relationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.RELATION_NAV = new core_1.OneToOneLink('relationNav', Background_Benefitselection, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Benefitselection.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Benefitselection, User_1.User);
    /**
     * All fields of the Background_Benefitselection entity.
     */
    Background_Benefitselection._allFields = [
        Background_Benefitselection.BACKGROUND_ELEMENT_ID,
        Background_Benefitselection.BG_ORDER_POS,
        Background_Benefitselection.DENTAL,
        Background_Benefitselection.DEPDISABILITY,
        Background_Benefitselection.DEPGENDER,
        Background_Benefitselection.DEPNAME,
        Background_Benefitselection.DEPNATIONALID,
        Background_Benefitselection.DEPSMOKE,
        Background_Benefitselection.DEPSTUDENT,
        Background_Benefitselection.END_DATE,
        Background_Benefitselection.HEALTH,
        Background_Benefitselection.LAST_MODIFIED_DATE,
        Background_Benefitselection.RELATION,
        Background_Benefitselection.USER_ID,
        Background_Benefitselection.DEPDISABILITY_NAV,
        Background_Benefitselection.DEPSMOKE_NAV,
        Background_Benefitselection.DEPSTUDENT_NAV,
        Background_Benefitselection.RELATION_NAV,
        Background_Benefitselection.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Benefitselection.ALL_FIELDS = new core_1.AllFields('*', Background_Benefitselection);
    /**
     * All key fields of the Background_Benefitselection entity.
     */
    Background_Benefitselection._keyFields = [Background_Benefitselection.BACKGROUND_ELEMENT_ID, Background_Benefitselection.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Benefitselection.
     */
    Background_Benefitselection._keys = Background_Benefitselection._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Benefitselection = exports.Background_Benefitselection || (exports.Background_Benefitselection = {}));
exports.Background_Benefitselection = Background_Benefitselection;
//# sourceMappingURL=Background_Benefitselection.js.map