"use strict";
// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint
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
exports.Endpoint = void 0;
const cdktf = __importStar(require("cdktf"));
/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint neon_endpoint}
*/
class Endpoint extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint neon_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EndpointConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'neon_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'neon',
                providerVersion: '0.1.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._autoscalingLimitMaxCu = config.autoscalingLimitMaxCu;
        this._autoscalingLimitMinCu = config.autoscalingLimitMinCu;
        this._branchId = config.branchId;
        this._disabled = config.disabled;
        this._id = config.id;
        this._passwordlessAccess = config.passwordlessAccess;
        this._pgSettings = config.pgSettings;
        this._poolerEnabled = config.poolerEnabled;
        this._poolerMode = config.poolerMode;
        this._projectId = config.projectId;
        this._regionId = config.regionId;
        this._type = config.type;
    }
    get autoscalingLimitMaxCu() {
        return this.getNumberAttribute('autoscaling_limit_max_cu');
    }
    set autoscalingLimitMaxCu(value) {
        this._autoscalingLimitMaxCu = value;
    }
    resetAutoscalingLimitMaxCu() {
        this._autoscalingLimitMaxCu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingLimitMaxCuInput() {
        return this._autoscalingLimitMaxCu;
    }
    get autoscalingLimitMinCu() {
        return this.getNumberAttribute('autoscaling_limit_min_cu');
    }
    set autoscalingLimitMinCu(value) {
        this._autoscalingLimitMinCu = value;
    }
    resetAutoscalingLimitMinCu() {
        this._autoscalingLimitMinCu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoscalingLimitMinCuInput() {
        return this._autoscalingLimitMinCu;
    }
    get branchId() {
        return this.getStringAttribute('branch_id');
    }
    set branchId(value) {
        this._branchId = value;
    }
    // Temporarily expose input value. Use with caution.
    get branchIdInput() {
        return this._branchId;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // current_state - computed: true, optional: false, required: false
    get currentState() {
        return this.getStringAttribute('current_state');
    }
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    set disabled(value) {
        this._disabled = value;
    }
    resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disabledInput() {
        return this._disabled;
    }
    // host - computed: true, optional: false, required: false
    get host() {
        return this.getStringAttribute('host');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    get passwordlessAccess() {
        return this.getBooleanAttribute('passwordless_access');
    }
    set passwordlessAccess(value) {
        this._passwordlessAccess = value;
    }
    resetPasswordlessAccess() {
        this._passwordlessAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordlessAccessInput() {
        return this._passwordlessAccess;
    }
    // pending_state - computed: true, optional: false, required: false
    get pendingState() {
        return this.getStringAttribute('pending_state');
    }
    get pgSettings() {
        return this.getStringMapAttribute('pg_settings');
    }
    set pgSettings(value) {
        this._pgSettings = value;
    }
    resetPgSettings() {
        this._pgSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pgSettingsInput() {
        return this._pgSettings;
    }
    get poolerEnabled() {
        return this.getBooleanAttribute('pooler_enabled');
    }
    set poolerEnabled(value) {
        this._poolerEnabled = value;
    }
    resetPoolerEnabled() {
        this._poolerEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get poolerEnabledInput() {
        return this._poolerEnabled;
    }
    get poolerMode() {
        return this.getStringAttribute('pooler_mode');
    }
    set poolerMode(value) {
        this._poolerMode = value;
    }
    resetPoolerMode() {
        this._poolerMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get poolerModeInput() {
        return this._poolerMode;
    }
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // proxy_host - computed: true, optional: false, required: false
    get proxyHost() {
        return this.getStringAttribute('proxy_host');
    }
    get regionId() {
        return this.getStringAttribute('region_id');
    }
    set regionId(value) {
        this._regionId = value;
    }
    resetRegionId() {
        this._regionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionIdInput() {
        return this._regionId;
    }
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            autoscaling_limit_max_cu: cdktf.numberToTerraform(this._autoscalingLimitMaxCu),
            autoscaling_limit_min_cu: cdktf.numberToTerraform(this._autoscalingLimitMinCu),
            branch_id: cdktf.stringToTerraform(this._branchId),
            disabled: cdktf.booleanToTerraform(this._disabled),
            id: cdktf.stringToTerraform(this._id),
            passwordless_access: cdktf.booleanToTerraform(this._passwordlessAccess),
            pg_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._pgSettings),
            pooler_enabled: cdktf.booleanToTerraform(this._poolerEnabled),
            pooler_mode: cdktf.stringToTerraform(this._poolerMode),
            project_id: cdktf.stringToTerraform(this._projectId),
            region_id: cdktf.stringToTerraform(this._regionId),
            type: cdktf.stringToTerraform(this._type),
        };
    }
}
// =================
// STATIC PROPERTIES
// =================
Endpoint.tfResourceType = "neon_endpoint";
exports.Endpoint = Endpoint;
