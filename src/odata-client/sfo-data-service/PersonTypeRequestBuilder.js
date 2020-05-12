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
var PersonType_1 = require("./PersonType");
/**
 * Request builder class for operations supported on the [[PersonType]] entity.
 */
var PersonTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(PersonTypeRequestBuilder, _super);
    function PersonTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PersonType` entity based on its keys.
     * @param externalCode Key property. See [[PersonType.externalCode]].
     * @returns A request builder for creating requests to retrieve one `PersonType` entity based on its keys.
     */
    PersonTypeRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(PersonType_1.PersonType, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `PersonType` entities.
     * @returns A request builder for creating requests to retrieve all `PersonType` entities.
     */
    PersonTypeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PersonType_1.PersonType);
    };
    return PersonTypeRequestBuilder;
}(core_1.RequestBuilder));
exports.PersonTypeRequestBuilder = PersonTypeRequestBuilder;
//# sourceMappingURL=PersonTypeRequestBuilder.js.map