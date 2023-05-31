// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BranchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch#id Branch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Branch name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch#name Branch#name}
  */
  readonly name?: string;
  /**
  * ID of the branch to checkout.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch#parent_id Branch#parent_id}
  */
  readonly parentId?: string;
  /**
  * Log Sequence Number (LSN) horizon for the data to be present in the new branch.
See details: https://neon.tech/docs/reference/glossary/#lsn
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch#parent_lsn Branch#parent_lsn}
  */
  readonly parentLsn?: string;
  /**
  * Timestamp horizon for the data to be present in the new branch. 
**Note**: it's defined as Unix epoch.'
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch#parent_timestamp Branch#parent_timestamp}
  */
  readonly parentTimestamp?: number;
  /**
  * Project ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch#project_id Branch#project_id}
  */
  readonly projectId: string;
}
export interface BranchEndpoint {
}

export function branchEndpointToTerraform(struct?: BranchEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class BranchEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BranchEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BranchEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autoscaling_limit_max_cu - computed: true, optional: false, required: false
  public get autoscalingLimitMaxCu() {
    return this.getNumberAttribute('autoscaling_limit_max_cu');
  }

  // autoscaling_limit_min_cu - computed: true, optional: false, required: false
  public get autoscalingLimitMinCu() {
    return this.getNumberAttribute('autoscaling_limit_min_cu');
  }

  // branch_id - computed: true, optional: false, required: false
  public get branchId() {
    return this.getStringAttribute('branch_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_state - computed: true, optional: false, required: false
  public get currentState() {
    return this.getStringAttribute('current_state');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // passwordless_access - computed: true, optional: false, required: false
  public get passwordlessAccess() {
    return this.getBooleanAttribute('passwordless_access');
  }

  // pending_state - computed: true, optional: false, required: false
  public get pendingState() {
    return this.getStringAttribute('pending_state');
  }

  // pg_settings - computed: true, optional: false, required: false
  private _pgSettings = new cdktf.StringMap(this, "pg_settings");
  public get pgSettings() {
    return this._pgSettings;
  }

  // pooler_enabled - computed: true, optional: false, required: false
  public get poolerEnabled() {
    return this.getBooleanAttribute('pooler_enabled');
  }

  // pooler_mode - computed: true, optional: false, required: false
  public get poolerMode() {
    return this.getStringAttribute('pooler_mode');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // proxy_host - computed: true, optional: false, required: false
  public get proxyHost() {
    return this.getStringAttribute('proxy_host');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class BranchEndpointList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BranchEndpointOutputReference {
    return new BranchEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch neon_branch}
*/
export class Branch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_branch";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/branch neon_branch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BranchConfig
  */
  public constructor(scope: Construct, id: string, config: BranchConfig) {
    super(scope, id, {
      terraformResourceType: 'neon_branch',
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
    this._id = config.id;
    this._name = config.name;
    this._parentId = config.parentId;
    this._parentLsn = config.parentLsn;
    this._parentTimestamp = config.parentTimestamp;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_state - computed: true, optional: false, required: false
  public get currentState() {
    return this.getStringAttribute('current_state');
  }

  // endpoint - computed: true, optional: false, required: false
  private _endpoint = new BranchEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
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

  // logical_size - computed: true, optional: false, required: false
  public get logicalSize() {
    return this.getNumberAttribute('logical_size');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // parent_lsn - computed: true, optional: true, required: false
  private _parentLsn?: string; 
  public get parentLsn() {
    return this.getStringAttribute('parent_lsn');
  }
  public set parentLsn(value: string) {
    this._parentLsn = value;
  }
  public resetParentLsn() {
    this._parentLsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentLsnInput() {
    return this._parentLsn;
  }

  // parent_timestamp - computed: true, optional: true, required: false
  private _parentTimestamp?: number; 
  public get parentTimestamp() {
    return this.getNumberAttribute('parent_timestamp');
  }
  public set parentTimestamp(value: number) {
    this._parentTimestamp = value;
  }
  public resetParentTimestamp() {
    this._parentTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentTimestampInput() {
    return this._parentTimestamp;
  }

  // pending_state - computed: true, optional: false, required: false
  public get pendingState() {
    return this.getStringAttribute('pending_state');
  }

  // physical_size_size - computed: true, optional: false, required: false
  public get physicalSizeSize() {
    return this.getNumberAttribute('physical_size_size');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      parent_lsn: cdktf.stringToTerraform(this._parentLsn),
      parent_timestamp: cdktf.numberToTerraform(this._parentTimestamp),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
