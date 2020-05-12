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
var PerGlobalInfoDeu_1 = require("./PerGlobalInfoDeu");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoDeu]] entity.
 */
var PerGlobalInfoDeuRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoDeuRequestBuilder, _super);
    function PerGlobalInfoDeuRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoDeu` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoDeu.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoDeu.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoDeu.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoDeu` entity based on its keys.
     */
    PerGlobalInfoDeuRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoDeu_1.PerGlobalInfoDeu, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoDeu` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoDeu` entities.
     */
    PerGlobalInfoDeuRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoDeu_1.PerGlobalInfoDeu);
    };
    return PerGlobalInfoDeuRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoDeuRequestBuilder = PerGlobalInfoDeuRequestBuilder;
//# sourceMappingURL=PerGlobalInfoDeuRequestBuilder.js.map