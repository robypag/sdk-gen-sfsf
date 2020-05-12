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
var ExternalLearnerAddressInfoRequestBuilder_1 = require("./ExternalLearnerAddressInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ExternalLearnerAddressInfo" of service "SFOData".
 */
var ExternalLearnerAddressInfo = /** @class */ (function (_super) {
    __extends(ExternalLearnerAddressInfo, _super);
    function ExternalLearnerAddressInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ExternalLearnerAddressInfo`.
     * @returns A builder that constructs instances of entity type `ExternalLearnerAddressInfo`.
     */
    ExternalLearnerAddressInfo.builder = function () {
        return core_1.Entity.entityBuilder(ExternalLearnerAddressInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ExternalLearnerAddressInfo` entity type.
     * @returns A `ExternalLearnerAddressInfo` request builder.
     */
    ExternalLearnerAddressInfo.requestBuilder = function () {
        return new ExternalLearnerAddressInfoRequestBuilder_1.ExternalLearnerAddressInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerAddressInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalLearnerAddressInfo`.
     */
    ExternalLearnerAddressInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, ExternalLearnerAddressInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ExternalLearnerAddressInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ExternalLearnerAddressInfo.
     */
    ExternalLearnerAddressInfo._entityName = 'ExternalLearnerAddressInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalLearnerAddressInfo.
     */
    ExternalLearnerAddressInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    ExternalLearnerAddressInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ExternalLearnerAddressInfo;
}(core_1.Entity));
exports.ExternalLearnerAddressInfo = ExternalLearnerAddressInfo;
var PicklistOption_1 = require("./PicklistOption");
(function (ExternalLearnerAddressInfo) {
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerAddressInfo.ADDRESS_TYPE = new core_1.StringField('addressType', ExternalLearnerAddressInfo, 'Edm.String');
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerAddressInfo.IS_DELETED = new core_1.BooleanField('is_deleted', ExternalLearnerAddressInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerAddressInfo.ITEM_ID = new core_1.BigNumberField('itemId', ExternalLearnerAddressInfo, 'Edm.Decimal');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerAddressInfo.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', ExternalLearnerAddressInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the one-to-one navigation property [[addressTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ExternalLearnerAddressInfo.ADDRESS_TYPE_NAV = new core_1.OneToOneLink('addressTypeNav', ExternalLearnerAddressInfo, PicklistOption_1.PicklistOption);
    /**
     * All fields of the ExternalLearnerAddressInfo entity.
     */
    ExternalLearnerAddressInfo._allFields = [
        ExternalLearnerAddressInfo.ADDRESS_TYPE,
        ExternalLearnerAddressInfo.IS_DELETED,
        ExternalLearnerAddressInfo.ITEM_ID,
        ExternalLearnerAddressInfo.LAST_MODIFIED_DATE_TIME,
        ExternalLearnerAddressInfo.ADDRESS_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    ExternalLearnerAddressInfo.ALL_FIELDS = new core_1.AllFields('*', ExternalLearnerAddressInfo);
    /**
     * All key fields of the ExternalLearnerAddressInfo entity.
     */
    ExternalLearnerAddressInfo._keyFields = [ExternalLearnerAddressInfo.ITEM_ID];
    /**
     * Mapping of all key field names to the respective static field property ExternalLearnerAddressInfo.
     */
    ExternalLearnerAddressInfo._keys = ExternalLearnerAddressInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ExternalLearnerAddressInfo = exports.ExternalLearnerAddressInfo || (exports.ExternalLearnerAddressInfo = {}));
exports.ExternalLearnerAddressInfo = ExternalLearnerAddressInfo;
//# sourceMappingURL=ExternalLearnerAddressInfo.js.map