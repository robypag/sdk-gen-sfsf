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
var PerGlobalInfoAre_1 = require("./PerGlobalInfoAre");
/**
 * Request builder class for operations supported on the [[PerGlobalInfoAre]] entity.
 */
var PerGlobalInfoAreRequestBuilder = /** @class */ (function (_super) {
    __extends(PerGlobalInfoAreRequestBuilder, _super);
    function PerGlobalInfoAreRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PerGlobalInfoAre` entity based on its keys.
     * @param country Key property. See [[PerGlobalInfoAre.country]].
     * @param personIdExternal Key property. See [[PerGlobalInfoAre.personIdExternal]].
     * @param startDate Key property. See [[PerGlobalInfoAre.startDate]].
     * @returns A request builder for creating requests to retrieve one `PerGlobalInfoAre` entity based on its keys.
     */
    PerGlobalInfoAreRequestBuilder.prototype.getByKey = function (country, personIdExternal, startDate) {
        return new core_1.GetByKeyRequestBuilder(PerGlobalInfoAre_1.PerGlobalInfoAre, {
            country: country,
            personIdExternal: personIdExternal,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `PerGlobalInfoAre` entities.
     * @returns A request builder for creating requests to retrieve all `PerGlobalInfoAre` entities.
     */
    PerGlobalInfoAreRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(PerGlobalInfoAre_1.PerGlobalInfoAre);
    };
    return PerGlobalInfoAreRequestBuilder;
}(core_1.RequestBuilder));
exports.PerGlobalInfoAreRequestBuilder = PerGlobalInfoAreRequestBuilder;
//# sourceMappingURL=PerGlobalInfoAreRequestBuilder.js.map