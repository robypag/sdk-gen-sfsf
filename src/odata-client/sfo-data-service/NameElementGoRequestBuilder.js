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
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var NameElementGo_1 = require("./NameElementGo");
/**
 * Request builder class for operations supported on the [[NameElementGo]] entity.
 */
var NameElementGoRequestBuilder = /** @class */ (function (_super) {
    __extends(NameElementGoRequestBuilder, _super);
    function NameElementGoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `NameElementGo` entity based on its keys.
     * @param nameFormatGoExternalCode Key property. See [[NameElementGo.nameFormatGoExternalCode]].
     * @param externalCode Key property. See [[NameElementGo.externalCode]].
     * @returns A request builder for creating requests to retrieve one `NameElementGo` entity based on its keys.
     */
    NameElementGoRequestBuilder.prototype.getByKey = function (nameFormatGoExternalCode, externalCode) {
        return new core_1.GetByKeyRequestBuilder(NameElementGo_1.NameElementGo, {
            NameFormatGO_externalCode: nameFormatGoExternalCode,
            externalCode: externalCode
        });
    };
    /**
     * Returns a request builder for querying all `NameElementGo` entities.
     * @returns A request builder for creating requests to retrieve all `NameElementGo` entities.
     */
    NameElementGoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(NameElementGo_1.NameElementGo);
    };
    return NameElementGoRequestBuilder;
}(core_1.RequestBuilder));
exports.NameElementGoRequestBuilder = NameElementGoRequestBuilder;
//# sourceMappingURL=NameElementGoRequestBuilder.js.map