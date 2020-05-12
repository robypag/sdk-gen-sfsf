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
var EmpPayCompNonRecurringRequestBuilder_1 = require("./EmpPayCompNonRecurringRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmpPayCompNonRecurring" of service "SFOData".
 */
var EmpPayCompNonRecurring = /** @class */ (function (_super) {
    __extends(EmpPayCompNonRecurring, _super);
    function EmpPayCompNonRecurring() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmpPayCompNonRecurring`.
     * @returns A builder that constructs instances of entity type `EmpPayCompNonRecurring`.
     */
    EmpPayCompNonRecurring.builder = function () {
        return core_1.Entity.entityBuilder(EmpPayCompNonRecurring);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmpPayCompNonRecurring` entity type.
     * @returns A `EmpPayCompNonRecurring` request builder.
     */
    EmpPayCompNonRecurring.requestBuilder = function () {
        return new EmpPayCompNonRecurringRequestBuilder_1.EmpPayCompNonRecurringRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpPayCompNonRecurring`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpPayCompNonRecurring`.
     */
    EmpPayCompNonRecurring.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, EmpPayCompNonRecurring);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmpPayCompNonRecurring.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmpPayCompNonRecurring.
     */
    EmpPayCompNonRecurring._entityName = 'EmpPayCompNonRecurring';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpPayCompNonRecurring.
     */
    EmpPayCompNonRecurring._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    EmpPayCompNonRecurring._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmpPayCompNonRecurring;
}(core_1.Entity));
exports.EmpPayCompNonRecurring = EmpPayCompNonRecurring;
var FoCostCenter_1 = require("./FoCostCenter");
var EmpEmployment_1 = require("./EmpEmployment");
var FoPayComponent_1 = require("./FoPayComponent");
var User_1 = require("./User");
var WfRequest_1 = require("./WfRequest");
(function (EmpPayCompNonRecurring) {
    /**
     * Static representation of the [[alternativeCostCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.ALTERNATIVE_COST_CENTER = new core_1.StringField('alternativeCostCenter', EmpPayCompNonRecurring, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.CREATED_BY = new core_1.StringField('createdBy', EmpPayCompNonRecurring, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', EmpPayCompNonRecurring, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.CREATED_ON = new core_1.DateField('createdOn', EmpPayCompNonRecurring, 'Edm.DateTime');
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.CURRENCY_CODE = new core_1.StringField('currencyCode', EmpPayCompNonRecurring, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', EmpPayCompNonRecurring, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', EmpPayCompNonRecurring, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', EmpPayCompNonRecurring, 'Edm.DateTime');
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.NOTES = new core_1.StringField('notes', EmpPayCompNonRecurring, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.OPERATION = new core_1.StringField('operation', EmpPayCompNonRecurring, 'Edm.String');
    /**
     * Static representation of the [[payComponentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.PAY_COMPONENT_CODE = new core_1.StringField('payComponentCode', EmpPayCompNonRecurring, 'Edm.String');
    /**
     * Static representation of the [[payDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.PAY_DATE = new core_1.DateField('payDate', EmpPayCompNonRecurring, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.USER_ID = new core_1.StringField('userId', EmpPayCompNonRecurring, 'Edm.String');
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.VALUE = new core_1.NumberField('value', EmpPayCompNonRecurring, 'Edm.Double');
    /**
     * Static representation of the one-to-many navigation property [[alternativeCostCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.ALTERNATIVE_COST_CENTER_NAV = new core_1.Link('alternativeCostCenterNav', EmpPayCompNonRecurring, FoCostCenter_1.FoCostCenter);
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.EMPLOYMENT_NAV = new core_1.OneToOneLink('employmentNav', EmpPayCompNonRecurring, EmpEmployment_1.EmpEmployment);
    /**
     * Static representation of the one-to-many navigation property [[payComponentCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.PAY_COMPONENT_CODE_NAV = new core_1.Link('payComponentCodeNav', EmpPayCompNonRecurring, FoPayComponent_1.FoPayComponent);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.USER_NAV = new core_1.OneToOneLink('userNav', EmpPayCompNonRecurring, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmpPayCompNonRecurring.WF_REQUEST_NAV = new core_1.OneToOneLink('wfRequestNav', EmpPayCompNonRecurring, WfRequest_1.WfRequest);
    /**
     * All fields of the EmpPayCompNonRecurring entity.
     */
    EmpPayCompNonRecurring._allFields = [
        EmpPayCompNonRecurring.ALTERNATIVE_COST_CENTER,
        EmpPayCompNonRecurring.CREATED_BY,
        EmpPayCompNonRecurring.CREATED_DATE_TIME,
        EmpPayCompNonRecurring.CREATED_ON,
        EmpPayCompNonRecurring.CURRENCY_CODE,
        EmpPayCompNonRecurring.LAST_MODIFIED_BY,
        EmpPayCompNonRecurring.LAST_MODIFIED_DATE_TIME,
        EmpPayCompNonRecurring.LAST_MODIFIED_ON,
        EmpPayCompNonRecurring.NOTES,
        EmpPayCompNonRecurring.OPERATION,
        EmpPayCompNonRecurring.PAY_COMPONENT_CODE,
        EmpPayCompNonRecurring.PAY_DATE,
        EmpPayCompNonRecurring.USER_ID,
        EmpPayCompNonRecurring.VALUE,
        EmpPayCompNonRecurring.ALTERNATIVE_COST_CENTER_NAV,
        EmpPayCompNonRecurring.EMPLOYMENT_NAV,
        EmpPayCompNonRecurring.PAY_COMPONENT_CODE_NAV,
        EmpPayCompNonRecurring.USER_NAV,
        EmpPayCompNonRecurring.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    EmpPayCompNonRecurring.ALL_FIELDS = new core_1.AllFields('*', EmpPayCompNonRecurring);
    /**
     * All key fields of the EmpPayCompNonRecurring entity.
     */
    EmpPayCompNonRecurring._keyFields = [EmpPayCompNonRecurring.PAY_COMPONENT_CODE, EmpPayCompNonRecurring.PAY_DATE, EmpPayCompNonRecurring.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmpPayCompNonRecurring.
     */
    EmpPayCompNonRecurring._keys = EmpPayCompNonRecurring._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmpPayCompNonRecurring = exports.EmpPayCompNonRecurring || (exports.EmpPayCompNonRecurring = {}));
exports.EmpPayCompNonRecurring = EmpPayCompNonRecurring;
//# sourceMappingURL=EmpPayCompNonRecurring.js.map