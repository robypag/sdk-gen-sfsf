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
var PickListV2RequestBuilder_1 = require("./PickListV2RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PickListV2" of service "SFOData".
 */
var PickListV2 = /** @class */ (function (_super) {
    __extends(PickListV2, _super);
    function PickListV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PickListV2`.
     * @returns A builder that constructs instances of entity type `PickListV2`.
     */
    PickListV2.builder = function () {
        return core_1.Entity.entityBuilder(PickListV2);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PickListV2` entity type.
     * @returns A `PickListV2` request builder.
     */
    PickListV2.requestBuilder = function () {
        return new PickListV2RequestBuilder_1.PickListV2RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PickListV2`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PickListV2`.
     */
    PickListV2.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PickListV2);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PickListV2.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PickListV2.
     */
    PickListV2._entityName = 'PickListV2';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PickListV2.
     */
    PickListV2._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PickListV2._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PickListV2;
}(core_1.Entity));
exports.PickListV2 = PickListV2;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PickListValueV2_1 = require("./PickListValueV2");
var WfRequest_1 = require("./WfRequest");
(function (PickListV2) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.CREATED_BY = new core_1.StringField('createdBy', PickListV2, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PickListV2, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.DISPLAY_ORDER = new core_1.StringField('displayOrder', PickListV2, 'Edm.String');
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.EFFECTIVE_END_DATE = new core_1.DateField('effectiveEndDate', PickListV2, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', PickListV2, 'Edm.DateTime');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.ID = new core_1.StringField('id', PickListV2, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PickListV2, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PickListV2, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[legacyPickListId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.LEGACY_PICK_LIST_ID = new core_1.StringField('legacyPickListId', PickListV2, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PickListV2, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.NAME = new core_1.StringField('name', PickListV2, 'Edm.String');
    /**
     * Static representation of the [[parentPickList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.PARENT_PICK_LIST = new core_1.StringField('parentPickList', PickListV2, 'Edm.String');
    /**
     * Static representation of the [[picklistCreationSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.PICKLIST_CREATION_SOURCE = new core_1.StringField('picklistCreationSource', PickListV2, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.STATUS = new core_1.StringField('status', PickListV2, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PickListV2, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[displayOrderNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.DISPLAY_ORDER_NAV = new core_1.OneToOneLink('displayOrderNav', PickListV2, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PickListV2, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PickListV2, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[parentPickListNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.PARENT_PICK_LIST_NAV = new core_1.OneToOneLink('parentPickListNav', PickListV2, PickListV2);
    /**
     * Static representation of the one-to-one navigation property [[picklistCreationSourceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.PICKLIST_CREATION_SOURCE_NAV = new core_1.OneToOneLink('picklistCreationSourceNav', PickListV2, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.STATUS_NAV = new core_1.OneToOneLink('statusNav', PickListV2, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[values]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.VALUES = new core_1.Link('values', PickListV2, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PickListV2.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PickListV2, WfRequest_1.WfRequest);
    /**
     * All fields of the PickListV2 entity.
     */
    PickListV2._allFields = [
        PickListV2.CREATED_BY,
        PickListV2.CREATED_DATE_TIME,
        PickListV2.DISPLAY_ORDER,
        PickListV2.EFFECTIVE_END_DATE,
        PickListV2.EFFECTIVE_START_DATE,
        PickListV2.ID,
        PickListV2.LAST_MODIFIED_BY,
        PickListV2.LAST_MODIFIED_DATE_TIME,
        PickListV2.LEGACY_PICK_LIST_ID,
        PickListV2.MDF_SYSTEM_RECORD_STATUS,
        PickListV2.NAME,
        PickListV2.PARENT_PICK_LIST,
        PickListV2.PICKLIST_CREATION_SOURCE,
        PickListV2.STATUS,
        PickListV2.CREATED_BY_NAV,
        PickListV2.DISPLAY_ORDER_NAV,
        PickListV2.LAST_MODIFIED_BY_NAV,
        PickListV2.MDF_SYSTEM_RECORD_STATUS_NAV,
        PickListV2.PARENT_PICK_LIST_NAV,
        PickListV2.PICKLIST_CREATION_SOURCE_NAV,
        PickListV2.STATUS_NAV,
        PickListV2.VALUES,
        PickListV2.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PickListV2.ALL_FIELDS = new core_1.AllFields('*', PickListV2);
    /**
     * All key fields of the PickListV2 entity.
     */
    PickListV2._keyFields = [PickListV2.EFFECTIVE_START_DATE, PickListV2.ID];
    /**
     * Mapping of all key field names to the respective static field property PickListV2.
     */
    PickListV2._keys = PickListV2._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PickListV2 = exports.PickListV2 || (exports.PickListV2 = {}));
exports.PickListV2 = PickListV2;
//# sourceMappingURL=PickListV2.js.map