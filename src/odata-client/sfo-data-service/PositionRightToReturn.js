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
var PositionRightToReturnRequestBuilder_1 = require("./PositionRightToReturnRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PositionRightToReturn" of service "SFOData".
 */
var PositionRightToReturn = /** @class */ (function (_super) {
    __extends(PositionRightToReturn, _super);
    function PositionRightToReturn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PositionRightToReturn`.
     * @returns A builder that constructs instances of entity type `PositionRightToReturn`.
     */
    PositionRightToReturn.builder = function () {
        return core_1.Entity.entityBuilder(PositionRightToReturn);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PositionRightToReturn` entity type.
     * @returns A `PositionRightToReturn` request builder.
     */
    PositionRightToReturn.requestBuilder = function () {
        return new PositionRightToReturnRequestBuilder_1.PositionRightToReturnRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionRightToReturn`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PositionRightToReturn`.
     */
    PositionRightToReturn.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PositionRightToReturn);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PositionRightToReturn.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PositionRightToReturn.
     */
    PositionRightToReturn._entityName = 'PositionRightToReturn';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PositionRightToReturn.
     */
    PositionRightToReturn._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PositionRightToReturn._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PositionRightToReturn;
}(core_1.Entity));
exports.PositionRightToReturn = PositionRightToReturn;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var FoEventReason_1 = require("./FoEventReason");
var TimeType_1 = require("./TimeType");
var Position_1 = require("./Position");
var WfRequest_1 = require("./WfRequest");
(function (PositionRightToReturn) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.CREATED_BY = new core_1.StringField('createdBy', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PositionRightToReturn, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.EFFECTIVE_STATUS = new core_1.StringField('effectiveStatus', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.END_DATE = new core_1.DateField('endDate', PositionRightToReturn, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PositionRightToReturn, 'Edm.Int64');
    /**
     * Static representation of the [[gaEndJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.GA_END_JOB_INFO_ID = new core_1.BigNumberField('gaEndJobInfoId', PositionRightToReturn, 'Edm.Int64');
    /**
     * Static representation of the [[gaEventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.GA_EVENT_REASON = new core_1.StringField('gaEventReason', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the [[gaStartJobInfoId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.GA_START_JOB_INFO_ID = new core_1.BigNumberField('gaStartJobInfoId', PositionRightToReturn, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PositionRightToReturn, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[loaTimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.LOA_TIME_TYPE = new core_1.StringField('loaTimeType', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the [[posTbhEndRowId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.POS_TBH_END_ROW_ID = new core_1.BigNumberField('posTBHEndRowId', PositionRightToReturn, 'Edm.Int64');
    /**
     * Static representation of the [[posTbhStartRowId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.POS_TBH_START_ROW_ID = new core_1.BigNumberField('posTBHStartRowId', PositionRightToReturn, 'Edm.Int64');
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.POSITION = new core_1.StringField('position', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the [[reason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.REASON = new core_1.StringField('reason', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the [[rootObjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.ROOT_OBJECT_ID = new core_1.StringField('rootObjectId', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.START_DATE = new core_1.DateField('startDate', PositionRightToReturn, 'Edm.DateTime');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.USER_ID = new core_1.StringField('userId', PositionRightToReturn, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PositionRightToReturn, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.EFFECTIVE_STATUS_NAV = new core_1.OneToOneLink('effectiveStatusNav', PositionRightToReturn, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[gaEventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.GA_EVENT_REASON_NAV = new core_1.Link('gaEventReasonNav', PositionRightToReturn, FoEventReason_1.FoEventReason);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PositionRightToReturn, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[loaTimeTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.LOA_TIME_TYPE_NAV = new core_1.OneToOneLink('loaTimeTypeNav', PositionRightToReturn, TimeType_1.TimeType);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PositionRightToReturn, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.POSITION_NAV = new core_1.Link('positionNav', PositionRightToReturn, Position_1.Position);
    /**
     * Static representation of the one-to-one navigation property [[reasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.REASON_NAV = new core_1.OneToOneLink('reasonNav', PositionRightToReturn, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', PositionRightToReturn, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PositionRightToReturn.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PositionRightToReturn, WfRequest_1.WfRequest);
    /**
     * All fields of the PositionRightToReturn entity.
     */
    PositionRightToReturn._allFields = [
        PositionRightToReturn.CREATED_BY,
        PositionRightToReturn.CREATED_DATE_TIME,
        PositionRightToReturn.EFFECTIVE_STATUS,
        PositionRightToReturn.END_DATE,
        PositionRightToReturn.EXTERNAL_CODE,
        PositionRightToReturn.GA_END_JOB_INFO_ID,
        PositionRightToReturn.GA_EVENT_REASON,
        PositionRightToReturn.GA_START_JOB_INFO_ID,
        PositionRightToReturn.LAST_MODIFIED_BY,
        PositionRightToReturn.LAST_MODIFIED_DATE_TIME,
        PositionRightToReturn.LOA_TIME_TYPE,
        PositionRightToReturn.MDF_SYSTEM_RECORD_STATUS,
        PositionRightToReturn.POS_TBH_END_ROW_ID,
        PositionRightToReturn.POS_TBH_START_ROW_ID,
        PositionRightToReturn.POSITION,
        PositionRightToReturn.REASON,
        PositionRightToReturn.ROOT_OBJECT_ID,
        PositionRightToReturn.START_DATE,
        PositionRightToReturn.USER_ID,
        PositionRightToReturn.CREATED_BY_NAV,
        PositionRightToReturn.EFFECTIVE_STATUS_NAV,
        PositionRightToReturn.GA_EVENT_REASON_NAV,
        PositionRightToReturn.LAST_MODIFIED_BY_NAV,
        PositionRightToReturn.LOA_TIME_TYPE_NAV,
        PositionRightToReturn.MDF_SYSTEM_RECORD_STATUS_NAV,
        PositionRightToReturn.POSITION_NAV,
        PositionRightToReturn.REASON_NAV,
        PositionRightToReturn.USER_ID_NAV,
        PositionRightToReturn.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PositionRightToReturn.ALL_FIELDS = new core_1.AllFields('*', PositionRightToReturn);
    /**
     * All key fields of the PositionRightToReturn entity.
     */
    PositionRightToReturn._keyFields = [PositionRightToReturn.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PositionRightToReturn.
     */
    PositionRightToReturn._keys = PositionRightToReturn._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PositionRightToReturn = exports.PositionRightToReturn || (exports.PositionRightToReturn = {}));
exports.PositionRightToReturn = PositionRightToReturn;
//# sourceMappingURL=PositionRightToReturn.js.map