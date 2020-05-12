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
var PerPersonalRequestBuilder_1 = require("./PerPersonalRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerPersonal" of service "SFOData".
 */
var PerPersonal = /** @class */ (function (_super) {
    __extends(PerPersonal, _super);
    function PerPersonal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerPersonal`.
     * @returns A builder that constructs instances of entity type `PerPersonal`.
     */
    PerPersonal.builder = function () {
        return core_1.Entity.entityBuilder(PerPersonal);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerPersonal` entity type.
     * @returns A `PerPersonal` request builder.
     */
    PerPersonal.requestBuilder = function () {
        return new PerPersonalRequestBuilder_1.PerPersonalRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPersonal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerPersonal`.
     */
    PerPersonal.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerPersonal);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerPersonal.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerPersonal.
     */
    PerPersonal._entityName = 'PerPersonal';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerPersonal.
     */
    PerPersonal._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerPersonal._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerPersonal;
}(core_1.Entity));
exports.PerPersonal = PerPersonal;
var PerGlobalInfoAre_1 = require("./PerGlobalInfoAre");
var PerGlobalInfoAus_1 = require("./PerGlobalInfoAus");
var PerGlobalInfoBra_1 = require("./PerGlobalInfoBra");
var PerGlobalInfoCan_1 = require("./PerGlobalInfoCan");
var PerGlobalInfoChe_1 = require("./PerGlobalInfoChe");
var PerGlobalInfoChn_1 = require("./PerGlobalInfoChn");
var PerGlobalInfoCol_1 = require("./PerGlobalInfoCol");
var PerGlobalInfoDeu_1 = require("./PerGlobalInfoDeu");
var PerGlobalInfoEsp_1 = require("./PerGlobalInfoEsp");
var PerGlobalInfoFra_1 = require("./PerGlobalInfoFra");
var PerGlobalInfoGbr_1 = require("./PerGlobalInfoGbr");
var PerGlobalInfoInd_1 = require("./PerGlobalInfoInd");
var PerGlobalInfoIta_1 = require("./PerGlobalInfoIta");
var PerGlobalInfoMex_1 = require("./PerGlobalInfoMex");
var PerGlobalInfoNld_1 = require("./PerGlobalInfoNld");
var PerGlobalInfoNzl_1 = require("./PerGlobalInfoNzl");
var PerGlobalInfoSau_1 = require("./PerGlobalInfoSau");
var PerGlobalInfoSgp_1 = require("./PerGlobalInfoSgp");
var PerGlobalInfoUsa_1 = require("./PerGlobalInfoUsa");
var PerGlobalInfoZaf_1 = require("./PerGlobalInfoZaf");
var PicklistOption_1 = require("./PicklistOption");
var PerPerson_1 = require("./PerPerson");
var WfRequest_1 = require("./WfRequest");
(function (PerPersonal) {
    /**
     * Static representation of the [[birthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.BIRTH_NAME = new core_1.StringField('birthName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.CREATED_BY = new core_1.StringField('createdBy', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerPersonal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.CREATED_ON = new core_1.DateField('createdOn', PerPersonal, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.END_DATE = new core_1.DateField('endDate', PerPersonal, 'Edm.DateTime');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.FIRST_NAME = new core_1.StringField('firstName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[formalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.FORMAL_NAME = new core_1.StringField('formalName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.GENDER = new core_1.StringField('gender', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[includeAllRecords]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.INCLUDE_ALL_RECORDS = new core_1.BooleanField('includeAllRecords', PerPersonal, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerPersonal, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerPersonal, 'Edm.DateTime');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LAST_NAME = new core_1.StringField('lastName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[maritalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.MARITAL_STATUS = new core_1.StringField('maritalStatus', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.MIDDLE_NAME = new core_1.StringField('middleName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[nationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.NATIONALITY = new core_1.StringField('nationality', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[nativePreferredLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.NATIVE_PREFERRED_LANG = new core_1.StringField('nativePreferredLang', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.OPERATION = new core_1.StringField('operation', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[salutation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.SALUTATION = new core_1.StringField('salutation', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[secondLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.SECOND_LAST_NAME = new core_1.StringField('secondLastName', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[secondNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.SECOND_NATIONALITY = new core_1.StringField('secondNationality', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.START_DATE = new core_1.DateField('startDate', PerPersonal, 'Edm.DateTime');
    /**
     * Static representation of the [[suffix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.SUFFIX = new core_1.StringField('suffix', PerPersonal, 'Edm.String');
    /**
     * Static representation of the [[thirdNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.THIRD_NATIONALITY = new core_1.StringField('thirdNationality', PerPersonal, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[localNavAre]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_ARE = new core_1.OneToOneLink('localNavARE', PerPersonal, PerGlobalInfoAre_1.PerGlobalInfoAre);
    /**
     * Static representation of the one-to-one navigation property [[localNavAus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_AUS = new core_1.OneToOneLink('localNavAUS', PerPersonal, PerGlobalInfoAus_1.PerGlobalInfoAus);
    /**
     * Static representation of the one-to-one navigation property [[localNavBra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_BRA = new core_1.OneToOneLink('localNavBRA', PerPersonal, PerGlobalInfoBra_1.PerGlobalInfoBra);
    /**
     * Static representation of the one-to-one navigation property [[localNavCan]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_CAN = new core_1.OneToOneLink('localNavCAN', PerPersonal, PerGlobalInfoCan_1.PerGlobalInfoCan);
    /**
     * Static representation of the one-to-one navigation property [[localNavChe]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_CHE = new core_1.OneToOneLink('localNavCHE', PerPersonal, PerGlobalInfoChe_1.PerGlobalInfoChe);
    /**
     * Static representation of the one-to-one navigation property [[localNavChn]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_CHN = new core_1.OneToOneLink('localNavCHN', PerPersonal, PerGlobalInfoChn_1.PerGlobalInfoChn);
    /**
     * Static representation of the one-to-one navigation property [[localNavCol]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_COL = new core_1.OneToOneLink('localNavCOL', PerPersonal, PerGlobalInfoCol_1.PerGlobalInfoCol);
    /**
     * Static representation of the one-to-one navigation property [[localNavDeu]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_DEU = new core_1.OneToOneLink('localNavDEU', PerPersonal, PerGlobalInfoDeu_1.PerGlobalInfoDeu);
    /**
     * Static representation of the one-to-one navigation property [[localNavEsp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_ESP = new core_1.OneToOneLink('localNavESP', PerPersonal, PerGlobalInfoEsp_1.PerGlobalInfoEsp);
    /**
     * Static representation of the one-to-one navigation property [[localNavFra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_FRA = new core_1.OneToOneLink('localNavFRA', PerPersonal, PerGlobalInfoFra_1.PerGlobalInfoFra);
    /**
     * Static representation of the one-to-one navigation property [[localNavGbr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_GBR = new core_1.OneToOneLink('localNavGBR', PerPersonal, PerGlobalInfoGbr_1.PerGlobalInfoGbr);
    /**
     * Static representation of the one-to-one navigation property [[localNavInd]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_IND = new core_1.OneToOneLink('localNavIND', PerPersonal, PerGlobalInfoInd_1.PerGlobalInfoInd);
    /**
     * Static representation of the one-to-one navigation property [[localNavIta]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_ITA = new core_1.OneToOneLink('localNavITA', PerPersonal, PerGlobalInfoIta_1.PerGlobalInfoIta);
    /**
     * Static representation of the one-to-one navigation property [[localNavMex]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_MEX = new core_1.OneToOneLink('localNavMEX', PerPersonal, PerGlobalInfoMex_1.PerGlobalInfoMex);
    /**
     * Static representation of the one-to-one navigation property [[localNavNld]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_NLD = new core_1.OneToOneLink('localNavNLD', PerPersonal, PerGlobalInfoNld_1.PerGlobalInfoNld);
    /**
     * Static representation of the one-to-one navigation property [[localNavNzl]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_NZL = new core_1.OneToOneLink('localNavNZL', PerPersonal, PerGlobalInfoNzl_1.PerGlobalInfoNzl);
    /**
     * Static representation of the one-to-one navigation property [[localNavSau]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_SAU = new core_1.OneToOneLink('localNavSAU', PerPersonal, PerGlobalInfoSau_1.PerGlobalInfoSau);
    /**
     * Static representation of the one-to-one navigation property [[localNavSgp]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_SGP = new core_1.OneToOneLink('localNavSGP', PerPersonal, PerGlobalInfoSgp_1.PerGlobalInfoSgp);
    /**
     * Static representation of the one-to-one navigation property [[localNavUsa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_USA = new core_1.OneToOneLink('localNavUSA', PerPersonal, PerGlobalInfoUsa_1.PerGlobalInfoUsa);
    /**
     * Static representation of the one-to-one navigation property [[localNavZaf]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.LOCAL_NAV_ZAF = new core_1.OneToOneLink('localNavZAF', PerPersonal, PerGlobalInfoZaf_1.PerGlobalInfoZaf);
    /**
     * Static representation of the one-to-one navigation property [[maritalStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.MARITAL_STATUS_NAV = new core_1.OneToOneLink('maritalStatusNav', PerPersonal, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[nativePreferredLangNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.NATIVE_PREFERRED_LANG_NAV = new core_1.OneToOneLink('nativePreferredLangNav', PerPersonal, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.PERSON_NAV = new core_1.OneToOneLink('personNav', PerPersonal, PerPerson_1.PerPerson);
    /**
     * Static representation of the one-to-one navigation property [[salutationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.SALUTATION_NAV = new core_1.OneToOneLink('salutationNav', PerPersonal, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[suffixNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.SUFFIX_NAV = new core_1.OneToOneLink('suffixNav', PerPersonal, PicklistOption_1.PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonal.WF_REQUEST_NAV = new core_1.OneToOneLink('wfRequestNav', PerPersonal, WfRequest_1.WfRequest);
    /**
     * All fields of the PerPersonal entity.
     */
    PerPersonal._allFields = [
        PerPersonal.BIRTH_NAME,
        PerPersonal.CREATED_BY,
        PerPersonal.CREATED_DATE_TIME,
        PerPersonal.CREATED_ON,
        PerPersonal.END_DATE,
        PerPersonal.FIRST_NAME,
        PerPersonal.FORMAL_NAME,
        PerPersonal.GENDER,
        PerPersonal.INCLUDE_ALL_RECORDS,
        PerPersonal.LAST_MODIFIED_BY,
        PerPersonal.LAST_MODIFIED_DATE_TIME,
        PerPersonal.LAST_MODIFIED_ON,
        PerPersonal.LAST_NAME,
        PerPersonal.MARITAL_STATUS,
        PerPersonal.MIDDLE_NAME,
        PerPersonal.NATIONALITY,
        PerPersonal.NATIVE_PREFERRED_LANG,
        PerPersonal.OPERATION,
        PerPersonal.PERSON_ID_EXTERNAL,
        PerPersonal.SALUTATION,
        PerPersonal.SECOND_LAST_NAME,
        PerPersonal.SECOND_NATIONALITY,
        PerPersonal.START_DATE,
        PerPersonal.SUFFIX,
        PerPersonal.THIRD_NATIONALITY,
        PerPersonal.LOCAL_NAV_ARE,
        PerPersonal.LOCAL_NAV_AUS,
        PerPersonal.LOCAL_NAV_BRA,
        PerPersonal.LOCAL_NAV_CAN,
        PerPersonal.LOCAL_NAV_CHE,
        PerPersonal.LOCAL_NAV_CHN,
        PerPersonal.LOCAL_NAV_COL,
        PerPersonal.LOCAL_NAV_DEU,
        PerPersonal.LOCAL_NAV_ESP,
        PerPersonal.LOCAL_NAV_FRA,
        PerPersonal.LOCAL_NAV_GBR,
        PerPersonal.LOCAL_NAV_IND,
        PerPersonal.LOCAL_NAV_ITA,
        PerPersonal.LOCAL_NAV_MEX,
        PerPersonal.LOCAL_NAV_NLD,
        PerPersonal.LOCAL_NAV_NZL,
        PerPersonal.LOCAL_NAV_SAU,
        PerPersonal.LOCAL_NAV_SGP,
        PerPersonal.LOCAL_NAV_USA,
        PerPersonal.LOCAL_NAV_ZAF,
        PerPersonal.MARITAL_STATUS_NAV,
        PerPersonal.NATIVE_PREFERRED_LANG_NAV,
        PerPersonal.PERSON_NAV,
        PerPersonal.SALUTATION_NAV,
        PerPersonal.SUFFIX_NAV,
        PerPersonal.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PerPersonal.ALL_FIELDS = new core_1.AllFields('*', PerPersonal);
    /**
     * All key fields of the PerPersonal entity.
     */
    PerPersonal._keyFields = [PerPersonal.PERSON_ID_EXTERNAL, PerPersonal.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerPersonal.
     */
    PerPersonal._keys = PerPersonal._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerPersonal = exports.PerPersonal || (exports.PerPersonal = {}));
exports.PerPersonal = PerPersonal;
//# sourceMappingURL=PerPersonal.js.map