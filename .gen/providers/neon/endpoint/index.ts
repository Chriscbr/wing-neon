// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#autoscaling_limit_max_cu Endpoint#autoscaling_limit_max_cu}
  */
  readonly autoscalingLimitMaxCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#autoscaling_limit_min_cu Endpoint#autoscaling_limit_min_cu}
  */
  readonly autoscalingLimitMinCu?: number;
  /**
  * Branch ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#branch_id Endpoint#branch_id}
  */
  readonly branchId: string;
  /**
  * Disable the endpoint.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#disabled Endpoint#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#id Endpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allow passwordless access.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#passwordless_access Endpoint#passwordless_access}
  */
  readonly passwordlessAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#pg_settings Endpoint#pg_settings}
  */
  readonly pgSettings?: { [key: string]: string };
  /**
  * Activate connection pooling.
See details: https://neon.tech/docs/connect/connection-pooling
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#pooler_enabled Endpoint#pooler_enabled}
  */
  readonly poolerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Mode of connections pooling.
See details: https://neon.tech/docs/connect/connection-pooling
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#pooler_mode Endpoint#pooler_mode}
  */
  readonly poolerMode?: string;
  /**
  * Project ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#project_id Endpoint#project_id}
  */
  readonly projectId: string;
  /**
  * AWS Region.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#region_id Endpoint#region_id}
  */
  readonly regionId?: string;
  /**
  * Access type. **Note** that "read_write" is the only supported type yet.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint#type Endpoint#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/endpoint neon_endpoint}
*/
export class Endpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_endpoint";

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
  public constructor(scope: Construct, id: string, config: EndpointConfig) {
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

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_limit_max_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMaxCu?: number; 
  public get autoscalingLimitMaxCu() {
    return this.getNumberAttribute('autoscaling_limit_max_cu');
  }
  public set autoscalingLimitMaxCu(value: number) {
    this._autoscalingLimitMaxCu = value;
  }
  public resetAutoscalingLimitMaxCu() {
    this._autoscalingLimitMaxCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMaxCuInput() {
    return this._autoscalingLimitMaxCu;
  }

  // autoscaling_limit_min_cu - computed: true, optional: true, required: false
  private _autoscalingLimitMinCu?: number; 
  public get autoscalingLimitMinCu() {
    return this.getNumberAttribute('autoscaling_limit_min_cu');
  }
  public set autoscalingLimitMinCu(value: number) {
    this._autoscalingLimitMinCu = value;
  }
  public resetAutoscalingLimitMinCu() {
    this._autoscalingLimitMinCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingLimitMinCuInput() {
    return this._autoscalingLimitMinCu;
  }

  // branch_id - computed: false, optional: false, required: true
  private _branchId?: string; 
  public get branchId() {
    return this.getStringAttribute('branch_id');
  }
  public set branchId(value: string) {
    this._branchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchIdInput() {
    return this._branchId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_state - computed: true, optional: false, required: false
  public get currentState() {
    return this.getStringAttribute('current_state');
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // passwordless_access - computed: true, optional: true, required: false
  private _passwordlessAccess?: boolean | cdktf.IResolvable; 
  public get passwordlessAccess() {
    return this.getBooleanAttribute('passwordless_access');
  }
  public set passwordlessAccess(value: boolean | cdktf.IResolvable) {
    this._passwordlessAccess = value;
  }
  public resetPasswordlessAccess() {
    this._passwordlessAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessAccessInput() {
    return this._passwordlessAccess;
  }

  // pending_state - computed: true, optional: false, required: false
  public get pendingState() {
    return this.getStringAttribute('pending_state');
  }

  // pg_settings - computed: true, optional: true, required: false
  private _pgSettings?: { [key: string]: string }; 
  public get pgSettings() {
    return this.getStringMapAttribute('pg_settings');
  }
  public set pgSettings(value: { [key: string]: string }) {
    this._pgSettings = value;
  }
  public resetPgSettings() {
    this._pgSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgSettingsInput() {
    return this._pgSettings;
  }

  // pooler_enabled - computed: false, optional: true, required: false
  private _poolerEnabled?: boolean | cdktf.IResolvable; 
  public get poolerEnabled() {
    return this.getBooleanAttribute('pooler_enabled');
  }
  public set poolerEnabled(value: boolean | cdktf.IResolvable) {
    this._poolerEnabled = value;
  }
  public resetPoolerEnabled() {
    this._poolerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolerEnabledInput() {
    return this._poolerEnabled;
  }

  // pooler_mode - computed: true, optional: true, required: false
  private _poolerMode?: string; 
  public get poolerMode() {
    return this.getStringAttribute('pooler_mode');
  }
  public set poolerMode(value: string) {
    this._poolerMode = value;
  }
  public resetPoolerMode() {
    this._poolerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolerModeInput() {
    return this._poolerMode;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // proxy_host - computed: true, optional: false, required: false
  public get proxyHost() {
    return this.getStringAttribute('proxy_host');
  }

  // region_id - computed: true, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
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
