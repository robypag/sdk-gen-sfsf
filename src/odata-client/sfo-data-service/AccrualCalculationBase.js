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
var AccrualCalculationBaseRequestBuilder_1 = require("./AccrualCalculationBaseRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AccrualCalculationBase" of service "SFOData".
 */
var AccrualCalculationBase = /** @class */ (function (_super) {
    __extends(AccrualCalculationBase, _super);
    function AccrualCalculationBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AccrualCalculationBase`.
     * @returns A builder that constructs instances of entity type `AccrualCalculationBase`.
     */
    AccrualCalculationBase.builder = function () {
        return core_1.Entity.entityBuilder(AccrualCalculationBase);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AccrualCalculationBase` entity type.
     * @returns A `AccrualCalculationBase` request builder.
     */
    AccrualCalculationBase.requestBuilder = function () {
        return new AccrualCalculationBaseRequestBuilder_1.AccrualCalculationBaseRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccrualCalculationBase`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccrualCalculationBase`.
     */
    AccrualCalculationBase.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, AccrualCalculationBase);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AccrualCalculationBase.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AccrualCalculationBase.
     */
    AccrualCalculationBase._entityName = 'AccrualCalculationBase';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AccrualCalculationBase.
     */
    AccrualCalculationBase._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    AccrualCalculationBase._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AccrualCalculationBase;
}(core_1.Entity));
exports.AccrualCalculationBase = AccrualCalculationBase;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (AccrualCalculationBase) {
    /**
     * Static representation of the [[actualQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.ACTUAL_QUANTITY = new core_1.BigNumberField('actualQuantity', AccrualCalculationBase, 'Edm.Decimal');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.CREATED_BY = new core_1.StringField('createdBy', AccrualCalculationBase, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', AccrualCalculationBase, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.DATE = new core_1.DateField('date', AccrualCalculationBase, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.EXTERNAL_CODE = new core_1.StringField('externalCode', AccrualCalculationBase, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', AccrualCalculationBase, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', AccrualCalculationBase, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', AccrualCalculationBase, 'Edm.String');
    /**
     * Static representation of the [[quantity1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.QUANTITY_1 = new core_1.BigNumberField('quantity1', AccrualCalculationBase, 'Edm.Decimal');
    /**
     * Static representation of the [[quantity2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.QUANTITY_2 = new core_1.BigNumberField('quantity2', AccrualCalculationBase, 'Edm.Decimal');
    /**
     * Static representation of the [[quantity3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.QUANTITY_3 = new core_1.BigNumberField('quantity3', AccrualCalculationBase, 'Edm.Decimal');
    /**
     * Static representation of the [[quantity4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.QUANTITY_4 = new core_1.BigNumberField('quantity4', AccrualCalculationBase, 'Edm.Decimal');
    /**
     * Static representation of the [[quantity5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.QUANTITY_5 = new core_1.BigNumberField('quantity5', AccrualCalculationBase, 'Edm.Decimal');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.USER_ID = new core_1.StringField('userId', AccrualCalculationBase, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', AccrualCalculationBase, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', AccrualCalculationBase, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', AccrualCalculationBase, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', AccrualCalculationBase, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualCalculationBase.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', AccrualCalculationBase, WfRequest_1.WfRequest);
    /**
     * All fields of the AccrualCalculationBase entity.
     */
    AccrualCalculationBase._allFields = [
        AccrualCalculationBase.ACTUAL_QUANTITY,
        AccrualCalculationBase.CREATED_BY,
        AccrualCalculationBase.CREATED_DATE_TIME,
        AccrualCalculationBase.DATE,
        AccrualCalculationBase.EXTERNAL_CODE,
        AccrualCalculationBase.LAST_MODIFIED_BY,
        AccrualCalculationBase.LAST_MODIFIED_DATE_TIME,
        AccrualCalculationBase.MDF_SYSTEM_RECORD_STATUS,
        AccrualCalculationBase.QUANTITY_1,
        AccrualCalculationBase.QUANTITY_2,
        AccrualCalculationBase.QUANTITY_3,
        AccrualCalculationBase.QUANTITY_4,
        AccrualCalculationBase.QUANTITY_5,
        AccrualCalculationBase.USER_ID,
        AccrualCalculationBase.CREATED_BY_NAV,
        AccrualCalculationBase.LAST_MODIFIED_BY_NAV,
        AccrualCalculationBase.MDF_SYSTEM_RECORD_STATUS_NAV,
        AccrualCalculationBase.USER_ID_NAV,
        AccrualCalculationBase.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    AccrualCalculationBase.ALL_FIELDS = new core_1.AllFields('*', AccrualCalculationBase);
    /**
     * All key fields of the AccrualCalculationBase entity.
     */
    AccrualCalculationBase._keyFields = [AccrualCalculationBase.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property AccrualCalculationBase.
     */
    AccrualCalculationBase._keys = AccrualCalculationBase._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AccrualCalculationBase = exports.AccrualCalculationBase || (exports.AccrualCalculationBase = {}));
exports.AccrualCalculationBase = AccrualCalculationBase;
//# sourceMappingURL=AccrualCalculationBase.js.map