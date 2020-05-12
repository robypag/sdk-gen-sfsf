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
var FormAuditTrailRequestBuilder_1 = require("./FormAuditTrailRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FormAuditTrail" of service "SFOData".
 */
var FormAuditTrail = /** @class */ (function (_super) {
    __extends(FormAuditTrail, _super);
    function FormAuditTrail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `FormAuditTrail`.
     * @returns A builder that constructs instances of entity type `FormAuditTrail`.
     */
    FormAuditTrail.builder = function () {
        return core_1.Entity.entityBuilder(FormAuditTrail);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FormAuditTrail` entity type.
     * @returns A `FormAuditTrail` request builder.
     */
    FormAuditTrail.requestBuilder = function () {
        return new FormAuditTrailRequestBuilder_1.FormAuditTrailRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormAuditTrail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormAuditTrail`.
     */
    FormAuditTrail.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, FormAuditTrail);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FormAuditTrail.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FormAuditTrail.
     */
    FormAuditTrail._entityName = 'FormAuditTrail';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormAuditTrail.
     */
    FormAuditTrail._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    FormAuditTrail._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return FormAuditTrail;
}(core_1.Entity));
exports.FormAuditTrail = FormAuditTrail;
var FormContent_1 = require("./FormContent");
var FormHeader_1 = require("./FormHeader");
(function (FormAuditTrail) {
    /**
     * Static representation of the [[auditTrailAction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.AUDIT_TRAIL_ACTION = new core_1.StringField('auditTrailAction', FormAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[auditTrailCoSender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.AUDIT_TRAIL_CO_SENDER = new core_1.StringField('auditTrailCoSender', FormAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[auditTrailComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.AUDIT_TRAIL_COMMENT = new core_1.StringField('auditTrailComment', FormAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[auditTrailId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.AUDIT_TRAIL_ID = new core_1.BigNumberField('auditTrailId', FormAuditTrail, 'Edm.Int64');
    /**
     * Static representation of the [[auditTrailLastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.AUDIT_TRAIL_LAST_MODIFIED = new core_1.DateField('auditTrailLastModified', FormAuditTrail, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[auditTrailRecipient]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.AUDIT_TRAIL_RECIPIENT = new core_1.StringField('auditTrailRecipient', FormAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[auditTrailSendProxy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.AUDIT_TRAIL_SEND_PROXY = new core_1.StringField('auditTrailSendProxy', FormAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[auditTrailSender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.AUDIT_TRAIL_SENDER = new core_1.StringField('auditTrailSender', FormAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[formContentAssociatedStepId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.FORM_CONTENT_ASSOCIATED_STEP_ID = new core_1.StringField('formContentAssociatedStepId', FormAuditTrail, 'Edm.String');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', FormAuditTrail, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.FORM_DATA_ID = new core_1.BigNumberField('formDataId', FormAuditTrail, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[formContent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.FORM_CONTENT = new core_1.OneToOneLink('formContent', FormAuditTrail, FormContent_1.FormContent);
    /**
     * Static representation of the one-to-one navigation property [[formHeader]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FormAuditTrail.FORM_HEADER = new core_1.OneToOneLink('formHeader', FormAuditTrail, FormHeader_1.FormHeader);
    /**
     * All fields of the FormAuditTrail entity.
     */
    FormAuditTrail._allFields = [
        FormAuditTrail.AUDIT_TRAIL_ACTION,
        FormAuditTrail.AUDIT_TRAIL_CO_SENDER,
        FormAuditTrail.AUDIT_TRAIL_COMMENT,
        FormAuditTrail.AUDIT_TRAIL_ID,
        FormAuditTrail.AUDIT_TRAIL_LAST_MODIFIED,
        FormAuditTrail.AUDIT_TRAIL_RECIPIENT,
        FormAuditTrail.AUDIT_TRAIL_SEND_PROXY,
        FormAuditTrail.AUDIT_TRAIL_SENDER,
        FormAuditTrail.FORM_CONTENT_ASSOCIATED_STEP_ID,
        FormAuditTrail.FORM_CONTENT_ID,
        FormAuditTrail.FORM_DATA_ID,
        FormAuditTrail.FORM_CONTENT,
        FormAuditTrail.FORM_HEADER
    ];
    /**
     * All fields selector.
     */
    FormAuditTrail.ALL_FIELDS = new core_1.AllFields('*', FormAuditTrail);
    /**
     * All key fields of the FormAuditTrail entity.
     */
    FormAuditTrail._keyFields = [FormAuditTrail.AUDIT_TRAIL_ID];
    /**
     * Mapping of all key field names to the respective static field property FormAuditTrail.
     */
    FormAuditTrail._keys = FormAuditTrail._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FormAuditTrail = exports.FormAuditTrail || (exports.FormAuditTrail = {}));
exports.FormAuditTrail = FormAuditTrail;
//# sourceMappingURL=FormAuditTrail.js.map