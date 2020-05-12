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
var ExternalLearnerEmailInfoRequestBuilder_1 = require("./ExternalLearnerEmailInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExternalLearnerEmailInfo" of service "SFOData".
 */
var ExternalLearnerEmailInfo = /** @class */ (function (_super) {
    __extends(ExternalLearnerEmailInfo, _super);
    function ExternalLearnerEmailInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExternalLearnerEmailInfo`.
     * @returns A builder that constructs instances of entity type `ExternalLearnerEmailInfo`.
     */
    ExternalLearnerEmailInfo.builder = function () {
        return core_1.Entity.entityBuilder(ExternalLearnerEmailInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExternalLearnerEmailInfo` entity type.
     * @returns A `ExternalLearnerEmailInfo` request builder.
     */
    ExternalLearnerEmailInfo.requestBuilder = function () {
        return new ExternalLearnerEmailInfoRequestBuilder_1.ExternalLearnerEmailInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerEmailInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalLearnerEmailInfo`.
     */
    ExternalLearnerEmailInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExternalLearnerEmailInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExternalLearnerEmailInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExternalLearnerEmailInfo.
     */
    ExternalLearnerEmailInfo._entityName = 'ExternalLearnerEmailInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalLearnerEmailInfo.
     */
    ExternalLearnerEmailInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExternalLearnerEmailInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExternalLearnerEmailInfo;
}(core_1.Entity));
exports.ExternalLearnerEmailInfo = ExternalLearnerEmailInfo;
var PicklistOption_1 = require("./PicklistOption");
(function (ExternalLearnerEmailInfo) {
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerEmailInfo.EMAIL_ADDRESS = new core_1.StringField('emailAddress', ExternalLearnerEmailInfo, 'Edm.String');
    /**
     * Static representation of the [[emailType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerEmailInfo.EMAIL_TYPE = new core_1.StringField('emailType', ExternalLearnerEmailInfo, 'Edm.String');
    /**
     * Static representation of the [[isPrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerEmailInfo.IS_PRIMARY = new core_1.BooleanField('isPrimary', ExternalLearnerEmailInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerEmailInfo.IS_DELETED = new core_1.BooleanField('is_deleted', ExternalLearnerEmailInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerEmailInfo.ITEM_ID = new core_1.BigNumberField('itemId', ExternalLearnerEmailInfo, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerEmailInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExternalLearnerEmailInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the one-to-one navigation property [[emailTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerEmailInfo.EMAIL_TYPE_NAV = new core_1.OneToOneLink('emailTypeNav', ExternalLearnerEmailInfo, PicklistOption_1.PicklistOption);
    /**
     * All fields of the ExternalLearnerEmailInfo entity.
     */
    ExternalLearnerEmailInfo._allFields = [
        ExternalLearnerEmailInfo.EMAIL_ADDRESS,
        ExternalLearnerEmailInfo.EMAIL_TYPE,
        ExternalLearnerEmailInfo.IS_PRIMARY,
        ExternalLearnerEmailInfo.IS_DELETED,
        ExternalLearnerEmailInfo.ITEM_ID,
        ExternalLearnerEmailInfo.LAST_MODIFIED_DATE_TIME,
        ExternalLearnerEmailInfo.EMAIL_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    ExternalLearnerEmailInfo.ALL_FIELDS = new core_1.AllFields('*', ExternalLearnerEmailInfo);
    /**
     * All key fields of the ExternalLearnerEmailInfo entity.
     */
    ExternalLearnerEmailInfo._keyFields = [ExternalLearnerEmailInfo.ITEM_ID];
    /**
     * Mapping of all key field names to the respective static field property ExternalLearnerEmailInfo.
     */
    ExternalLearnerEmailInfo._keys = ExternalLearnerEmailInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExternalLearnerEmailInfo = exports.ExternalLearnerEmailInfo || (exports.ExternalLearnerEmailInfo = {}));
exports.ExternalLearnerEmailInfo = ExternalLearnerEmailInfo;
//# sourceMappingURL=ExternalLearnerEmailInfo.js.map