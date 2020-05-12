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
var core_1 = require("@sap-cloud-sdk/core");
var FoPayComponentGroup_1 = require("./FoPayComponentGroup");
/**
 * Request builder class for operations supported on the [[FoPayComponentGroup]] entity.
 */
var FoPayComponentGroupRequestBuilder = /** @class */ (function (_super) {
    __extends(FoPayComponentGroupRequestBuilder, _super);
    function FoPayComponentGroupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoPayComponentGroup` entity based on its keys.
     * @param externalCode Key property. See [[FoPayComponentGroup.externalCode]].
     * @param startDate Key property. See [[FoPayComponentGroup.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoPayComponentGroup` entity based on its keys.
     */
    FoPayComponentGroupRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoPayComponentGroup_1.FoPayComponentGroup, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoPayComponentGroup` entities.
     * @returns A request builder for creating requests to retrieve all `FoPayComponentGroup` entities.
     */
    FoPayComponentGroupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoPayComponentGroup_1.FoPayComponentGroup);
    };
    return FoPayComponentGroupRequestBuilder;
}(core_1.RequestBuilder));
exports.FoPayComponentGroupRequestBuilder = FoPayComponentGroupRequestBuilder;
//# sourceMappingURL=FoPayComponentGroupRequestBuilder.js.map