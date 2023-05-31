"use strict";
// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs
// generated from terraform resource schema
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeonProvider = void 0;
const cdktf = __importStar(require("cdktf"));
/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs neon}
*/
class NeonProvider extends cdktf.TerraformProvider {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs neon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeonProviderConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'neon',
            terraformGeneratorMetadata: {
                providerName: 'neon',
                providerVersion: '0.1.0'
            },
            terraformProviderSource: 'kislerdm/neon'
        });
        this._apiKey = config.apiKey;
        this._alias = config.alias;
    }
    get apiKey() {
        return this._apiKey;
    }
    set apiKey(value) {
        this._apiKey = value;
    }
    resetApiKey() {
        this._apiKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get apiKeyInput() {
        return this._apiKey;
    }
    get alias() {
        return this._alias;
    }
    set alias(value) {
        this._alias = value;
    }
    resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get aliasInput() {
        return this._alias;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            api_key: cdktf.stringToTerraform(this._apiKey),
            alias: cdktf.stringToTerraform(this._alias),
        };
    }
}
// =================
// STATIC PROPERTIES
// =================
NeonProvider.tfResourceType = "neon";
exports.NeonProvider = NeonProvider;
