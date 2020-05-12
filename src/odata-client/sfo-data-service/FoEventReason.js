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
var FoEventReasonRequestBuilder_1 = require("./FoEventReasonRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FOEventReason" of service "SFOData".
 */
var FoEventReason = /** @class */ (function (_super) {
    __extends(FoEventReason, _super);
    function FoEventReason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FoEventReason`.
     * @returns A builder that constructs instances of entity type `FoEventReason`.
     */
    FoEventReason.builder = function () {
        return core_1.Entity.entityBuilder(FoEventReason);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FoEventReason` entity type.
     * @returns A `FoEventReason` request builder.
     */
    FoEventReason.requestBuilder = function () {
        return new FoEventReasonRequestBuilder_1.FoEventReasonRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoEventReason`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoEventReason`.
     */
    FoEventReason.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FoEventReason);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FoEventReason.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FoEventReason.
     */
    FoEventReason._entityName = 'FOEventReason';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoEventReason.
     */
    FoEventReason._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FoEventReason._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FoEventReason;
}(core_1.Entity));
exports.FoEventReason = FoEventReason;
var FoTranslation_1 = require("./FoTranslation");
var PicklistOption_1 = require("./PicklistOption");
(function (FoEventReason) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.CREATED_BY = new core_1.StringField('createdBy', FoEventReason, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', FoEventReason, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.CREATED_ON = new core_1.DateField('createdOn', FoEventReason, 'Edm.DateTime');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.DESCRIPTION = new core_1.StringField('description', FoEventReason, 'Edm.String');
    /**
     * Static representation of the [[emplStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.EMPL_STATUS = new core_1.StringField('emplStatus', FoEventReason, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.END_DATE = new core_1.DateField('endDate', FoEventReason, 'Edm.DateTime');
    /**
     * Static representation of the [[event]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.EVENT = new core_1.StringField('event', FoEventReason, 'Edm.String');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.EXTERNAL_CODE = new core_1.StringField('externalCode', FoEventReason, 'Edm.String');
    /**
     * Static representation of the [[implicitPositionAction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.IMPLICIT_POSITION_ACTION = new core_1.BigNumberField('implicitPositionAction', FoEventReason, 'Edm.Int64');
    /**
     * Static representation of the [[includeInWorkExperience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.INCLUDE_IN_WORK_EXPERIENCE = new core_1.BooleanField('includeInWorkExperience', FoEventReason, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', FoEventReason, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', FoEventReason, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', FoEventReason, 'Edm.DateTime');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.NAME = new core_1.StringField('name', FoEventReason, 'Edm.String');
    /**
     * Static representation of the [[payrollEvent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.PAYROLL_EVENT = new core_1.StringField('payrollEvent', FoEventReason, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.START_DATE = new core_1.DateField('startDate', FoEventReason, 'Edm.DateTime');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.STATUS = new core_1.StringField('status', FoEventReason, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.DESCRIPTION_TRANSLATION_NAV = new core_1.OneToOneLink('descriptionTranslationNav', FoEventReason, FoTranslation_1.FoTranslation);
    /**
     * Static representation of the one-to-one navigation property [[emplStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.EMPL_STATUS_NAV = new core_1.OneToOneLink('emplStatusNav', FoEventReason, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[eventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.EVENT_NAV = new core_1.OneToOneLink('eventNav', FoEventReason, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[implicitPositionActionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.IMPLICIT_POSITION_ACTION_NAV = new core_1.OneToOneLink('implicitPositionActionNav', FoEventReason, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FoEventReason.NAME_TRANSLATION_NAV = new core_1.OneToOneLink('nameTranslationNav', FoEventReason, FoTranslation_1.FoTranslation);
    /**
     * All fields of the FoEventReason entity.
     */
    FoEventReason._allFields = [
        FoEventReason.CREATED_BY,
        FoEventReason.CREATED_DATE_TIME,
        FoEventReason.CREATED_ON,
        FoEventReason.DESCRIPTION,
        FoEventReason.EMPL_STATUS,
        FoEventReason.END_DATE,
        FoEventReason.EVENT,
        FoEventReason.EXTERNAL_CODE,
        FoEventReason.IMPLICIT_POSITION_ACTION,
        FoEventReason.INCLUDE_IN_WORK_EXPERIENCE,
        FoEventReason.LAST_MODIFIED_BY,
        FoEventReason.LAST_MODIFIED_DATE_TIME,
        FoEventReason.LAST_MODIFIED_ON,
        FoEventReason.NAME,
        FoEventReason.PAYROLL_EVENT,
        FoEventReason.START_DATE,
        FoEventReason.STATUS,
        FoEventReason.DESCRIPTION_TRANSLATION_NAV,
        FoEventReason.EMPL_STATUS_NAV,
        FoEventReason.EVENT_NAV,
        FoEventReason.IMPLICIT_POSITION_ACTION_NAV,
        FoEventReason.NAME_TRANSLATION_NAV
    ];
    /**
     * All fields selector.
     */
    FoEventReason.ALL_FIELDS = new core_1.AllFields('*', FoEventReason);
    /**
     * All key fields of the FoEventReason entity.
     */
    FoEventReason._keyFields = [FoEventReason.EXTERNAL_CODE, FoEventReason.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property FoEventReason.
     */
    FoEventReason._keys = FoEventReason._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FoEventReason = exports.FoEventReason || (exports.FoEventReason = {}));
exports.FoEventReason = FoEventReason;
//# sourceMappingURL=FoEventReason.js.map