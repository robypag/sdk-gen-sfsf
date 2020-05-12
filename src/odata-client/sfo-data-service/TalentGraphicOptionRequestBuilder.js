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
var TalentGraphicOption_1 = require("./TalentGraphicOption");
/**
 * Request builder class for operations supported on the [[TalentGraphicOption]] entity.
 */
var TalentGraphicOptionRequestBuilder = /** @class */ (function (_super) {
    __extends(TalentGraphicOptionRequestBuilder, _super);
    function TalentGraphicOptionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TalentGraphicOption` entity based on its keys.
     * @param dataIndex Key property. See [[TalentGraphicOption.dataIndex]].
     * @param optionKey Key property. See [[TalentGraphicOption.optionKey]].
     * @returns A request builder for creating requests to retrieve one `TalentGraphicOption` entity based on its keys.
     */
    TalentGraphicOptionRequestBuilder.prototype.getByKey = function (dataIndex, optionKey) {
        return new core_1.GetByKeyRequestBuilder(TalentGraphicOption_1.TalentGraphicOption, {
            dataIndex: dataIndex,
            optionKey: optionKey
        });
    };
    /**
     * Returns a request builder for querying all `TalentGraphicOption` entities.
     * @returns A request builder for creating requests to retrieve all `TalentGraphicOption` entities.
     */
    TalentGraphicOptionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TalentGraphicOption_1.TalentGraphicOption);
    };
    return TalentGraphicOptionRequestBuilder;
}(core_1.RequestBuilder));
exports.TalentGraphicOptionRequestBuilder = TalentGraphicOptionRequestBuilder;
//# sourceMappingURL=TalentGraphicOptionRequestBuilder.js.map